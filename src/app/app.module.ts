import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { LoginComponent } from './components/login/login/login.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { BookComponent } from './components/book/book/book.component';
import { GetAllBookComponent } from './components/getAllBook/get-all-book/get-all-book.component';
import { MatSelectModule } from '@angular/material/select';
import { OrderComponent } from './components/order/order/order.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { AdminComponent } from './components/admin/admin/admin.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { AddNewBookComponent } from './components/addNewBook/add-new-book/add-new-book.component';
import { SearchPipe } from './pipe/search.pipe';
import { UpdateBookComponent } from './components/updateBook/update-book/update-book.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    BookComponent,
    GetAllBookComponent,
    OrderComponent,
    CartComponent,
    AdminComponent,
    AddNewBookComponent,
    SearchPipe,
    UpdateBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDividerModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    MatSliderModule,
    MatBadgeModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
