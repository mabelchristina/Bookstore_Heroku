import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;
  booksArray: any;
  

  constructor(private httpService: HttpService) { }
  getBooksService() {
    console.log("data is in books service",);
    this.token = localStorage.getItem('token')
      let options = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'x-access-token': this.token,
        })
      }
      return this.httpService.Getservice('get/book', true, options);
  }
  addcartitem(productID: any) {
    console.log("data is in books service",productID);
    this.token = localStorage.getItem('token')
      let options = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'x-access-token': this.token,
        })
      }
    return this.httpService.postService('add_cart_item/'+productID, {}, true, options);
  }
  updateitemcount(productID: any, payload: any) {
    console.log('added', payload);
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.PutService("cart_item_quantity/" + productID, payload, true, options);
  }
  addwishlist(productID: any) {
    this.token = localStorage.getItem('token')
    let options = {
      
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postService("add_wish_list/" + productID, {}, true, options);
  }

  getCartItems() {
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.Getservice("get_cart_items", true, options)
  }
  removecartitem(productID: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.DeleteService("remove_cart_item/" + productID, null, true, options);
  }
  getwishlist() {
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }

    return this.httpService.Getservice("get_wishlist_items", true, options)
  }

  removewishlistitem(productID: any) {
    let options = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.DeleteService("remove_wishlist_item/" + productID, null, true, options);
  }


  customerDetailsService(data:any){
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.PutService('edit_user', data ,true, options)

  }

  orderplace(payload: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postService("add/order", payload, true, options);
  }
  addFeedbackService(data: any) {

    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    console.log('data', data.product_id);
    
    return this.httpService.postService(`add/feedback/${data.product_id}`, data, true, options)
  }

  getfeedBack(data: any) {
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
   
    return this.httpService.Getservice(`get/feedback/${data.product_id}`, true, options);

  }
  addnewbookService(reqData: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('admin/add/book', reqData, true, options)

  }

  updatebookService(reqPayload: any, productID: any) {
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'content-Type': 'application/json'
      })
    }
    return this.httpService.PutService('admin/update/book/' + productID, reqPayload, true, options);
  }

  deleteBookService(productID: any) {

    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.DeleteService('admin/delete/book/' + productID, null, true, options)
  }
}
