import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AngularFireModule} from 'angularfire2';
import {AngularFirestore} from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './entities/main/main.component';
import {AboutUsComponent} from './entities/about-us/about-us.component';
import {FooterComponent} from './entities/footer/footer.component';
import {AppRoutingService} from "./common/services/routing.service";
import {HomeComponent} from './entities/home/home.component';
import {ContactComponent} from './entities/contact/contact.component';
import {SigninComponent} from './entities/signin/signin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonService} from "./common/services/common.service";
import {UserDashboardComponent} from './entities/user-dashboard/user-dashboard.component';
import {AuthGuard} from "./common/services/auth-guard.service";
import {ApiService} from "./common/services/api.service";
import {AuthService} from "./common/services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {DataService} from "./common/services/data.service";
import { SignupComponent } from './entities/signup/signup.component';
import {environment} from "../environments/environment";
import {FirebaseService} from "./common/services/firebase.service";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutUsComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    SigninComponent,
    UserDashboardComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'fcc-book-trading'),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (getAccessToken),
        headerName: 'token',
        authScheme: '',
        whitelistedDomains: ['localhost:5000' , 'localhost:8080'],
        throwNoTokenError: false,
        skipWhenExpired: true,
      }
    })
  ],
  providers: [
    AppRoutingService,
    CommonService,
    AuthGuard,
    ApiService,
    AuthService,
    DataService,
    FirebaseService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function getAccessToken() {
  return localStorage.getItem('token');
}
