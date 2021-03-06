import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject, Subject} from "rxjs/index";
import {AppRoutingService} from "./routing.service";
import {AuthService} from "./auth.service";

@Injectable()
export class CommonService {

  constructor(private router: Router,
              private activated: ActivatedRoute,
              private routingService: AppRoutingService) {
  }


  isLoading = new Subject<boolean>();

  onloadingStart() {
    this.isLoading.next(true);
  }

  onloadingEnd() {
    this.isLoading.next(false);
  }

}
