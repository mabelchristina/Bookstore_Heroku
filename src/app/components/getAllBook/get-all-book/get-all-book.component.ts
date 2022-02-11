import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { DataService } from 'src/app/services/data/data.service';
import { Subscription } from 'rxjs';
import { SearchPipe } from 'src/app/pipe/search.pipe';

@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss']
})
export class GetAllBookComponent implements OnInit {
  booksArray: any;
  token: any;
  book:any;
  message:any
  id:any
  subscription!: Subscription;
   Count: boolean = false;
  addtobagcount: boolean = true;
  filteredString:any
  searchWord:any;

  constructor(private booksService:BookService,private router:Router,private data:DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.getBook.subscribe((message) => {
      this.message = message;
      this.book = message.data[0];
      this.id = this.book?._id;
    });
    this.getBooks();
    this.subscription = this.data.searchNote.subscribe(message => {
      this.message = message;
      this.searchWord=message.data[0];
    })
  }
  getBooks() {

    this.booksService.getBooksService().subscribe((response: any) => {

        console.log(response.result)

        this.booksArray = response.result;

        console.log("getBooksArray", this.booksArray);
        // console.log("id is",this.message._id)
       
      })
  }
  bookDetails(books:any){
    console.log("book details",books);
    this.book=books;
    this.router.navigateByUrl('/dashboard/book');
    let Arraydata={
      data:[this.book]
    }
    this.data.changebookData(Arraydata)
  }
  addtobag() {
    console.log('book id', this.id);
    this.addtobagcount = false;
    this.Count = true;

    this.booksService.addcartitem(this.id).subscribe(
      (response: any) => {
        console.log(response);
      });
  }
  

  addtowishlist() {
    this.booksService.addwishlist(this.id).subscribe((response: any) => {
      console.log('add to cart item', response);
    });
  }


}
