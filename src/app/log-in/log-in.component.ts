// import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetapiService } from '../services/getapi.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogINComponent   {
  title='userVarify';
  
  emailOutput:any;
  
  constructor(private getApi:GetapiService , private router:Router){}

     getUserFormData(data:any)
     {   

      console.log(this.registerForm.value);
        // ############################## GET ######################
       //    this.getApi.users().subscribe((data)=>{
      //     this.users=data;
     //  });
    // ############################## GET ######################
            // console.log(data)
            this.getApi.saveUser(data).subscribe((response)=>{
            console.log(response);
            this.emailOutput = response;
            //  if(this.registerForm.valid)
            //  {
              
              if((this.emailOutput.success) != 0)
              {
                this.registerForm.reset();//reset  ${this.registerForm.value.email}
               alert(`Check Your Email for Varification`);
              this.router.navigate(['/otp']);
             }
             else{
              this.registerForm.reset();
              alert("Email id Already Exist");
            }
           //      storeDataInLocalStorez()
// {
  localStorage.setItem('id', (this.emailOutput.id));
  localStorage.setItem('userName', (this.emailOutput.email));
  localStorage.setItem('verificationotp',(this.emailOutput.verificationotp));
  localStorage.setItem('userRole', ('provider'));
  // localStorage.setItem('currentverificationotp:', JSON.stringify(this.otpform.value));


// }
           
})


     }
     

   public registerForm:any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "email":new FormControl(null,[Validators.required,Validators.email])
    })
  }
  
  get email() {return this.registerForm.get('email');}
}



 // url='https://devsoowgoodapi.azurewebsites.net/api/';
  
  // constructor(private http: HttpClient) { }
   
  //  params = new HttpParams()
  // .set('Email', 'string')
  // .set('UserRole', "string");
  // this.httpClient.get<any>(url,{params});


  // ################### Get Api ########################

// users:any;
// constructor(private getApi:GetapiService){
//   this.getApi.users().subscribe((data: any)=>{
//     console.warn("data",data);
//     // this.users=data;
//   })
// }

// ################################ Get Api End ################

// submitData()
  // {
  //   console.log(this.registerForm.value);
  //   if(this.registerForm.valid)
  //   {
  //     alert(`Check Your Email for Varification ${this.registerForm.value.email}`);
  //     this.registerForm.reset();//reset
  //   }
  // }