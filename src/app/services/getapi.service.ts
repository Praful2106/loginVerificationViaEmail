import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetapiService {
  url='https://devsoowgoodapi.azurewebsites.net/api/Users/verifyuser';
  otpurl='https://devsoowgoodapi.azurewebsites.net/api/Users/confirmverification'
  data: any;

  constructor(private http:HttpClient) { }
  // users(){
  //   return this.http.get(this.url);
  // }
  saveUser(data:any)
  {
    return this.http.post(this.url,data);
  }
  saveOtp(body:any)
  {
    return this.http.post(this.otpurl,body);
    
  }
}











  // serverUrl="https://devsoowgoodapi.azurewebsites.net/api/"
  // http: any;
  // verifyUser(data: any): Observable < any > {
  //   return this.http.post(environment.serverUrl + 'verifyUser', data).pipe(
  //     catchError((error: HttpErrorResponse) => throwError(error))
  //   )
  // }
  // users() {
  //   throw new Error('Method not implemented.');
  // }

  // constructor(private http:HttpClient) { }
  // getcomments():Observable<any>{
  //   return this.http.get("https://devsoowgoodapi.azurewebsites.net/api/");
  // }

//   url="https://devsoowgoodapi.azurewebsites.net/api/"
//   constructor(private http:HttpClient) { }
// users(){
//   return this.http.get(this.url);
// }
