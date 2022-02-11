import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  subscription: any;
  message: any;
  book: any;
  bookId:any
  id: any;
  Count: boolean = false;
  addtobagcount: boolean = true;
  orderCount = 1;
  rating: any;
  value: any;
  comment: any;
  currentfeedback: any;
  bookStoreArray: any = [];
  constructor(private bookService: BookService, private data: DataService) {}

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookId");
    // console.log(this.bookId);
    this.subscription = this.data.getBook.subscribe((message) => {
      this.message = message;
      this.book = message.data[0];
      this.id = this.book?._id;
    });
  }
  addtobag() {
    console.log('book id', this.id);
    this.addtobagcount = false;
    this.Count = true;

    this.bookService.addcartitem(this.id).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  addtowishlist() {
    this.bookService.addwishlist(this.id).subscribe((response: any) => {
      console.log('add to cart item', response);
    });
  }
  increaseCount() {
    this.orderCount += 1;
    this.updateCount();
  }
  decreaseCount() {
    if (this.orderCount > 0) {
      this.orderCount -= 1;
      this.updateCount();
    } else {
      return;
    }
  }
  updateCount() {
    let payload = {
      quantityToBuy: this.orderCount,
    };
    this.bookService.updateitemcount(this.id, payload).subscribe((response) => {
      console.log(response);
    });
  }

  addFeedback() {
    let data = {
      rating: this.value,
      comment: this.comment,
      product_id: this.id,
    };

    this.bookService.addFeedbackService(data).subscribe((response: any) => {
      console.log('the response', response);
      this.getfeedBack();
    });
  }

  getfeedBack() {
    let data = {
      product_id: this.id,
    };
    this.bookService.getfeedBack(data).subscribe((response: any) => {
      console.log('Feedback', response);
      this.bookStoreArray = response.result.reverse();
    });
  }
}
