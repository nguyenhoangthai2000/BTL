import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuestionComponent } from './question/question.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ModifyaccountComponent } from './modifyaccount/modifyaccount.component';
import { TestComponent } from './test/test.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    IntroduceComponent,
    ContactComponent,
    FeedbackComponent,
    QuestionComponent,
    SigninComponent,
    SignupComponent,
    ChangepasswordComponent,
    ModifyaccountComponent,
    TestComponent,
    ForgetpassComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:HomepageComponent},
      {path:'gioithieu',component:IntroduceComponent},
      {path:'lienhe',component:ContactComponent},
      {path:'gopy',component:FeedbackComponent},
      {path:'hoi',component:QuestionComponent},
      {path:'dangnhap',component:SigninComponent},
      {path:'dangky',component:SignupComponent},
      {path:'quenmatkhau',component:ForgetpassComponent},
      {path:'doimatkhau',component:ChangepasswordComponent},
      {path:'taikhoan',component:ModifyaccountComponent},
      {path:'thi',component:TestComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
