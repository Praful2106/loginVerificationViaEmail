import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetapiService } from '../services/getapi.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent  {
  otpOutput:any;
  myItem: any;
constructor(private getApi:GetapiService , private router:Router){}
  otptake(data:any)
  {
    
    var body = { 
      // id:localStorage.getItem("id"), 
      userName:localStorage.getItem("userName"), 
      verificationotp:localStorage.getItem("verificationotp"), 
      userRole:"Provider",
      currentverificationotp:this.otpform.get("otp").value
     
   }; 
    console.log(this.otpform.value);
    this.getApi.saveOtp(body).subscribe((response)=>{
    console.log(response);
    this.otpOutput = response;
    if(this.otpform.valid && (this.otpOutput.success == 1)  ) 
    { 
      alert(`Email Id Register Successfully`);
      this.otpform.reset();
    }
    else{ 
      alert(`OTP Not match`);
      this.otpform.reset();
    }
    localStorage.setItem('currentverificationotp', JSON.stringify(data.otp));

  })
}
public otpform:any;
ngOnInit(): void {
  this.otpform = new FormGroup({
    "otp":new FormControl(null,[Validators.required])
  })
}
  get otp() {return this.otpform.get('otp');}

  
  

}

// ${this.registerForm.value.otp}
//  console.log(typeof(this.currentOtp));

  //  var currentOtp = localStorage.getItem('currentverificationotp');((currentOtp) == (verificationOtp)
  //  var verificationOtp = localStorage.getItem('verificationotp');