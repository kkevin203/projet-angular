import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule  } from '@angular/material/datepicker';
import { MatFormFieldModule  } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    ListProductComponent,
    SubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatDatepickerModule,
    MatFormFieldModule,
  ],
  providers: [],
  exports: [ProductComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
