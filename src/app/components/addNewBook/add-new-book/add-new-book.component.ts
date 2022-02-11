import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.scss'],
})
export class AddNewBookComponent implements OnInit {
  addbooksForm!: FormGroup;
  submitted = false;
  book: any;
  bookName: any;
  author: any;
  description: any;
  quantity: any;
  price: any;
  discountPrice: any;
  bookid: any;
  UpdateForm!: FormGroup;
  isAddMode=true;
  loading = false;

  addToCart: boolean = false;
  constructor(
    @Optional() public dialogRef: MatDialogRef<AddNewBookComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private bookService: BookService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.addbooksForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      discountPrice: ['', Validators.required],
    });

    if (data !== null) {
      this.isAddMode=false
      this.addbooksForm.patchValue({
        bookName: data.bookName,
        author: data.author,
        description: data.description,
        quantity: data.quantity,
        price: data.price,
        discountPrice: data.discountPrice,
        bookid: data._id,
      });

    }
  }

  ngOnInit(): void {}


  add() {
    if (this.addbooksForm.valid) {
      let reqData = {
        bookName: this.addbooksForm.value.bookName,
        author: this.addbooksForm.value.author,
        description: this.addbooksForm.value.description,
        quantity: this.addbooksForm.value.quantity,
        price: this.addbooksForm.value.price,
        discountPrice: this.addbooksForm.value.discountPrice,
      };
      this.bookService.addnewbookService(reqData).subscribe((response) => {
        console.log(response);
        this.router.navigate(['/dashboard/admin']);
      });
    } else {
      console.log('invalid');
    }
  }
  update() {
    console.log('id is', this.data._id);
    if (this.addbooksForm.valid) {
      let reqData = {
        bookName: this.addbooksForm.value.bookName,
        author: this.addbooksForm.value.author,
        description: this.addbooksForm.value.description,
        quantity: this.addbooksForm.value.quantity,
        price: this.addbooksForm.value.price,
        discountPrice: this.addbooksForm.value.discountPrice,
      };
      this.bookService
        .updatebookService(reqData, this.data._id)
        .subscribe((response) => {
          this.router.navigate(['/dashboard/admin']);
          console.log(response);
         
        });
    } else {
      console.log('invalid');
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
