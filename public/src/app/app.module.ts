import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmitComponent } from './components/submit/submit.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http-service/http.service';
import { FormsModule } from '@angular/forms';
import { DisplaycomponentComponent } from './components/displaycomponent/displaycomponent.component';
import { ReviewcomponentComponent } from './components/reviewcomponent/reviewcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent,
    DisplaycomponentComponent,
    ReviewcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
