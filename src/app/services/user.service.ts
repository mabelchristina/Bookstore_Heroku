import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token:any
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
   }

  registerUserService(reqPayload: any) {
    console.log(reqPayload);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('registration', reqPayload, true, headers)
  }
  loginUserService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService('login', reqData, true, headers)
  }
  login(data: any) {
    console.log("data is in user service",data);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('/bookstore_user/login', data, false, options);
  }

  adminSignup(reqPayLoad: any) {
    console.log("data is in user service",reqPayLoad);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('/bookstore_user/admin/registration', reqPayLoad, false, options);

  }

  adminLogin(data: any) {
    console.log("data is in user service",data);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('admin/login', data, false, options);
  }
  adminregistrationService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // 'x-access-token': this.token,
      })
    }
    return this.httpService.postService('admin/registration', reqData, true, headers)
  }

  adminLoginService(reqData:any){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // x-access-token: this.token
      })
    }
    return this.httpService.postService('admin/login', reqData, true, headers)
  }
}
