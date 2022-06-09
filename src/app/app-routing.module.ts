import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from './otp/otp.component'
import { LogINComponent } from './log-in/log-in.component'
const routes: Routes = [
  {path:'otp', component: OtpComponent},
  {path:'log-in', component: LogINComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
