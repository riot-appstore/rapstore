import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'ngx-avatar';


import {AppComponent} from './app.component';
import {AppBrowserComponent} from './app-browser/app-browser.component';
import {AppRoutingModule} from './app-routing.module';
import {AppDetailComponent} from './app-detail/app-detail.component';
import {AppService} from './appservice.service';
import {AppBuildComponent} from './app-build/app-build.component';
import {BoardService} from './board.service';
import {AuthService} from './auth.service';
import {DynFormService} from './dyn-form.service';
import {AuthGuard} from './auth-guard';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BoardSelectorComponent} from './board-selector/board-selector.component';
import {MissingComponentsLabelSectionComponent} from './missing-components-label-section/missing-components-label-section.component';
import {BrowserIntegrationService} from './browser-integration.service';
import {PageInstallInstructionBrowserIntegrationComponent} from './page-install-instruction-browser-integration/page-install-instruction-browser-integration.component';
import {AppUploaderComponent} from './app-uploader/app-uploader.component';
import {UserService} from './user.service';
import {DeveloperComponent} from './developer/developer.component';
import {SignupComponent} from './signup/signup.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {PageInstallInstructionDragAndDropComponent} from './page-install-instruction-drag-and-drop/page-install-instruction-drag-and-drop.component';
import {FeedbackService} from './feedback.service';
import { ImprintComponent } from './imprint/imprint.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { FormElementComponent } from './form-element/form-element.component';


@NgModule({
  declarations: [
    AppComponent,
    AppBrowserComponent,
    AppDetailComponent,
    AppBuildComponent,
    LoginComponent,
    NavbarComponent,
    BoardSelectorComponent,
    MissingComponentsLabelSectionComponent,
    PageInstallInstructionBrowserIntegrationComponent,
    AppUploaderComponent,
    DeveloperComponent,
    SignupComponent,
    UserprofileComponent,
    PageInstallInstructionDragAndDropComponent,
    ImprintComponent,
    AboutComponent,
    LogoutComponent,
    FormElementComponent,
    FeedbackComponent,
  ],
  imports: [
    AvatarModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [AppService, BoardService, AuthService, AuthGuard, BrowserIntegrationService, UserService, FeedbackService, DynFormService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
