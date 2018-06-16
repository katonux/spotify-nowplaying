import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthComponent } from './auth/auth.component';
import { GetNowplayingService } from './get-nowplaying.service';

@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, CallbackComponent, AuthComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GetNowplayingService]
})
export class AppModule { }
