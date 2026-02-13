import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OfferComponent } from './offer/offer.component';
import { IntegratorComponent } from './integrator/integrator.component';
import { ProductsComponent } from './products/products.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { OilGasComponent } from './oil-gas/oil-gas.component';
import { TaxiComponent } from './taxi/taxi.component';
import { SchoolBusComponent } from './school-bus/school-bus.component';
import { PublicBusComponent } from './public-bus/public-bus.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'offer', component: OfferComponent},
  { path: 'integrator', component: IntegratorComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'logistics', component: LogisticsComponent},
  { path: 'oil-gas', component: OilGasComponent},
  { path: 'taxi', component: TaxiComponent},
  { path: 'school-bus', component: SchoolBusComponent},
  { path: 'public-bus', component: PublicBusComponent},
  { path: 'car-rental', component: CarRentalComponent},
  { path: 'compliance', component: ComplianceComponent},
  { path: 'company', component: CompanyComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', 
      anchorScrolling: 'enabled', 
      scrollOffset: [0, 80] 
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
