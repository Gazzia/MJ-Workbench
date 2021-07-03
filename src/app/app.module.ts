import { NgModule } from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAnalyticsModule} from "@angular/fire/analytics";
import {AngularFirestoreModule} from "@angular/fire/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/auth";
import { MenuComponent } from './components/menu/menu.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipDirective } from './shared/directives/tooltip.directive';
import { ShouldBeMJDirective } from './shared/directives/should-be-mj.directive';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    MenuComponent,
    LoginComponent,
    TooltipDirective,
    ShouldBeMJDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule,
    AngularFireModule.initializeApp({
      apiKey: environment.apiKey,
      authDomain: "mj-workbench.firebaseapp.com",
      projectId: "mj-workbench",
      storageBucket: "mj-workbench.appspot.com",
      messagingSenderId: "568236736349",
      appId: "1:568236736349:web:333618316103565c7672b4",
      measurementId: "G-6JYN8LRX2R"
    }),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
