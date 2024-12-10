import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { UpdateResidenceComponent } from './residences/update-residence/update-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './apartments/add-apartment/add-apartment.component';

const routes: Routes = [

  {path:'', pathMatch:'full', redirectTo: 'home' },
  {path:'home', component:HomeComponent},
  {path: 'product', component:ProductComponent},
  {path: 'residance', component:ResidencesComponent},
  {path:'detailsResidance/:id', component:ResidenceDetailsComponent},
  {path:'addResidence', component:AddResidenceComponent},
  {path:'updateResidence', component:UpdateResidenceComponent},
  {path:'afficherApartement', component:ApartmentsComponent},
  { path: 'afficherApartementDeResidence/:id', component: ApartmentsByResidenceComponent },
  {path:'addApartment',component: AddApartmentComponent},
  {path:'**' , component:NotFoundComponentComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
