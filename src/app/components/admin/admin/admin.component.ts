import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { AddNewBookComponent } from '../../addNewBook/add-new-book/add-new-book.component';
import { UpdateBookComponent } from '../../updateBook/update-book/update-book.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  booksArray: any;
  bookcount: any;
  book: any;
  bookName: any;
  author: any;
  description: any;
  quantity: any;
  price: any;
  discountPrice: any;
  bookid: any;
  isAddMode?:boolean;
  loading = false;

  UpdateForm!: FormGroup;
  submitted = false;
  constructor(
    private bookService: BookService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) {
  
  }

  ngOnInit(): void {
    this.getBooks();
  
  }
  getBooks() {
    this.bookService.getBooksService().subscribe((response: any) => {
        // console.log(response.result)
        this.booksArray = response.result.reverse();
        this.bookcount = response.result.length;
        console.log("getBooksArray", this.booksArray);
      })
  }
  openDialog(book: any) {
    const dialogRef = this.dialog.open(AddNewBookComponent, {
      width: '560px',
      height: '600px',
      data: book,

    });
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result}`);
    });
    
  }
  

  delete(book:any){
    this.bookService.deleteBookService(book._id).subscribe((response:any)=>{
      console.log(response);
      this.getBooks();
      
    })
  }

  AddDialog() {
    const dialogRef = this.dialog.open(AddNewBookComponent, {
      data: this.book,
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result}`);
    });

  }

}
