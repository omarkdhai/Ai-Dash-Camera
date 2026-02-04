import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OfferComponent } from './offer/offer.component';
import { IntegratorComponent } from './integrator/integrator.component';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';
import { ProductsComponent } from './products/products.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { OilGasComponent } from './oil-gas/oil-gas.component';
import { TaxiComponent } from './taxi/taxi.component';
import { SchoolBusComponent } from './school-bus/school-bus.component';
import { PublicBusComponent } from './public-bus/public-bus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    SolutionsComponent,
    AboutUsComponent,
    OfferComponent,
    IntegratorComponent,
    ScrollRevealDirective,
    ProductsComponent,
    LogisticsComponent,
    OilGasComponent,
    TaxiComponent,
    SchoolBusComponent,
    PublicBusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr'
    })
  ],
  providers: [
    ...provideTranslateHttpLoader({ prefix: './assets/i18n/', suffix: '.json' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
