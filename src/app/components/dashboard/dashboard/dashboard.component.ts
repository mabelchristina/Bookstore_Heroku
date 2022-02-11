import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateBookComponent } from '../../updateBook/update-book/update-book.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  value:any

  filteredString:any
  constructor(private router:Router,public dataService:DataService,public dialog: MatDialog) { }

  ngOnInit( ): void {
  }
  onCart(){
    this.router.navigateByUrl('/dashboard/cart');
  }
  searchTitle(event:any){
    this.value=event.target.value
    let Ddata={
      type:'search',
      data:[this.value]
    }
    this.dataService.changeData(Ddata)
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateBookComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
