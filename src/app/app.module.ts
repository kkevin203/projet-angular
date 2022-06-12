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
import {HttpClientModule} from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component'
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MissionComponent } from './mission/mission.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    ListProductComponent,
    SubscriptionComponent,
    HeaderComponent,
    NavComponent,
    CardComponent,
    FooterComponent,
    ContactComponent,
    PresentationComponent,
    MissionComponent,
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
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
