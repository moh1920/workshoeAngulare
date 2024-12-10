import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './apartments/add-apartment/add-apartment.component';
import { AppRoutingModule } from './app-routing.module';
import { UpdateResidenceComponent } from './residences/update-residence/update-residence.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponentComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent,
    UpdateResidenceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResidencesComponent,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
