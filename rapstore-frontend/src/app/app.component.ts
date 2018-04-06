import {Component, OnDestroy, OnInit} from '@angular/core';
import {BrowserIntegrationService} from './browser-integration.service';
import {Subscription} from 'rxjs/Subscription';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  private user: User;

  private $subscriptionExtension: Subscription;
  private $subscriptionHost: Subscription;

  protected extensionAvailable = true;
  protected nativeMessagingHostAvailable = true;

  constructor(protected authService: AuthService, private router: Router, private browserIntegrationService: BrowserIntegrationService, private userService: UserService) {}

  ngOnInit(): void {

    this.$subscriptionExtension = this.browserIntegrationService.isExtensionAvailable()
      .subscribe(updatedBool => { this.extensionAvailable = updatedBool; });

    this.$subscriptionHost = this.browserIntegrationService.isNativeMessagingHostAvailable()
      .subscribe(updatedBool => { this.nativeMessagingHostAvailable = updatedBool; });

      this.fetch_user();

      this.authService.userChangeEvent.subscribe(value => {
        this.fetch_user();
      });
  }

  fetch_user() {
    if(this.authService.get_token()) {
        this.userService.get()
          .subscribe(user => this.user = user);
      }
      else {
        this.user = null;
      }
  }
  get_username() {
    return this.user.username;
  }
  is_developer() {
    return this.user.is_dev;
  }
  ngOnDestroy(): void {
    this.$subscriptionExtension.unsubscribe();
    this.$subscriptionHost.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
