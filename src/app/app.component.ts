import { Component ,OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// import { url } from 'inspector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  title = 'login';
// ############################### CALL API ############################

// getData={
//   Email:'harshalichambhare@gmail.com',
//   UserRole:'Provider'
// };
// url='https://devsoowgoodapi.azurewebsites.net/api/';
// json:any;
// output:any;
//   constructor(private http: HttpClient)
//   {
//   http.get(this.url).toPromise().then((data:any) =>{
//   console.log(data);
//   console.log(data.json);
//   this.json= JSON.stringify(data.json);
//   this.output=data;
//   this.json = data.results.appointmentdatedata;

// })
//   }
// ############################### CALL API END ############################


  // public registerForm:any;

  // ngOnInit(): void {
  //   this.registerForm = new FormGroup({
  //     "Email":new FormControl(null,[Validators.required,Validators.email])
  //   })
  // }
  // submitData()
  // {
  //   console.log(this.registerForm.value);
  //   if(this.registerForm.valid)
  //   {
  //     alert(`Thank You ${this.registerForm.value.Email}`);
  //     this.registerForm.reset();//reset
  //   }
  // }
  // get Email() {return this.registerForm.get('Email');}

  // url='https://devsoowgoodapi.azurewebsites.net/api/';
  
  // constructor(private http: HttpClient) { }
   
  //  params = new HttpParams()
  // .set('Email', 'string')
  // .set('UserRole', "string");
  // this.httpClient.get<any>(url,{params});
}

