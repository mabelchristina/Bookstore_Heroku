import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateBookComponent } from '../../updateBook/update-book/update-book.component';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cartitems: any;
  count: any;
  value:any
  isShow:boolean=false;

  filteredString:any
  constructor(private router:Router,public dataService:DataService,public dialog: MatDialog,public bookService:BookService) { }

  ngOnInit( ): void {
    this.cartItemList();
  }
  // onCart(){
  //   this.router.navigateByUrl('/dashboard/cart');
  // }
 
  searchTitle(event:any){
    this.value=event.target.value
    let Ddata={
      type:'search',
      data:[this.value]
    }
    this.dataService.changeData(Ddata)
  }
  cartItemList() {
    this.bookService.getCartItems().subscribe((response: any) => {
      console.log(response);
      this.cartitems = response.result;
      console.log(this.cartitems);
      this.count = response.result.length;
    });
  }
 

}
