import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule} from '@angular/common/http';
import { OtpComponent } from './otp/otp.component'
import { RouterModule } from '@angular/router';
import { LogINComponent } from './log-in/log-in.component';
import { GetapiService } from './services/getapi.service';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    OtpComponent,
    LogINComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [GetapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
