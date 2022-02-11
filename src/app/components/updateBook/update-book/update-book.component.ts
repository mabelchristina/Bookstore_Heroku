import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
 

  constructor( public dialogRef: MatDialogRef<UpdateBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
     }

  ngOnInit(): void {

  }
  // }
  // onSubmit() {

    // this.submitted = true;

    // if (this.addbooksForm.valid) {

    //   let reqData = {
    //     "bookName": this.addbooksForm.value.bookName,
    //     "author": this.addbooksForm.value.author,
    //     "description": this.addbooksForm.value.description,
    //     "quantity": this.addbooksForm.value.quantity,
    //     "price": this.addbooksForm.value.price,
    //     "discountPrice": this.addbooksForm.value.discountPrice,
          
    //   }
    //   this.booksService.addnewbookService(reqData).subscribe((response) => {
    //     console.log(response);
    //     this.router.navigate(['/dashboard/admin'])
    //   })

    // }
    // else {
    //   console.log("invalid");

    // }

  // }

}
