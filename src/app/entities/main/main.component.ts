import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AppRoutingService} from "../../common/services/routing.service";
import {GoogleSignInSuccess} from 'angular-google-signin';
import {Subscription} from "rxjs/index";
import {CommonService} from "../../common/services/common.service";
import signIn = gapi.auth.signIn;
import {AuthService} from "../../common/services/auth.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit,OnDestroy {

  activeMenuTab: string;
  signedInStatus = false;

  basicMenuIconsClicked = true;
  subscriptions: Subscription[] = [];

  constructor(public routingService: AppRoutingService,
              public authService: AuthService,
              public commonService: CommonService) {
  }

  ngOnInit() {
    this.subscriptions.push(this.authService.userSignedIn.subscribe(
      (data) => {
        this.signedInStatus = data;
        console.log("sign in stats" ,this.signedInStatus);
      }
    ));


  }

  ngOnDestroy() {
    this.subscriptions.forEach((value, index, array) => value.unsubscribe());
  }


  routeToEntity(entity) {
    this.activeMenuTab = entity;
    if (entity == "" || entity == "about" || entity == "contact") {
      this.basicMenuIconsClicked = true;
    } else {
      this.basicMenuIconsClicked = false;
    }
    this.routingService.routeToEntity(entity)
  }

  onSignOut() {
    console.log("sign out clicked");
    this.authService.signOutUser();
    this.routingService.routeToEntity("");
  }

}
