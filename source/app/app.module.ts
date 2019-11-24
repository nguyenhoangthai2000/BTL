import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { HomepageComponent } from './homepage/homepage.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ModifyaccountComponent } from './modifyaccount/modifyaccount.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ExamComponent } from './exam/exam.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { BannerComponent } from './banner/banner.component';
import { ViewpointComponent } from './viewpoint/viewpoint.component';
import { ViewsubjectComponent } from './viewsubject/viewsubject.component'
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    IntroduceComponent,
    ContactComponent,
    FeedbackComponent,
    SigninComponent,
    SignupComponent,
    ChangepasswordComponent,
    ModifyaccountComponent,
    ForgetpassComponent,
    ExamComponent,
    HeaderComponent,
    FooterComponent,
    AccountComponent,
    BannerComponent,
    QuestionComponent,
    ViewpointComponent,
    ViewsubjectComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      { path: 'gioithieu', component: IntroduceComponent },
      { path: 'lienhe', component: ContactComponent },
      { path: 'gopy', component: FeedbackComponent },
      { path: 'hoidap', component: QuestionComponent },
      { path: 'xemdiem',component:ViewpointComponent},
      { path: 'dangnhap', component: SigninComponent },
      { path: 'dangky', component: SignupComponent },
      { path: 'quenmatkhau', component: ForgetpassComponent },
      { path: 'doimatkhau', component: ChangepasswordComponent },
      { path: 'taikhoan', component: ModifyaccountComponent },
      { path: 'exam/:Id', component: ExamComponent },
      { path: 'xemmonhoc/:Id', component: ViewsubjectComponent },
      { path: '**', redirectTo:'', pathMatch:'full'}
    ])
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
