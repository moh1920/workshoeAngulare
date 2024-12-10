import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apartment } from '../../core/models/Apartment.model';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.scss']
})
export class AddApartmentComponent {
  addApartmentForm = new FormGroup({
    apartNum: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'), // Nombres uniquement
    ]),
    floorNum: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+$')]),
    surface: new FormControl('', Validators.required),
    terrace: new FormControl(false, Validators.required), // Default value is 'false'
    surfaceterrace: new FormControl('', [Validators.required]), // Will be conditionally required
    category: new FormControl('', [Validators.required]),
    ResidenceId: new FormControl('', [Validators.required]),
  });

  // Cette méthode est utilisée pour vérifier si le champ "terrace" est 'Yes' ou 'No'
  get terrace() {
    return this.addApartmentForm.get('terrace');
  }

  get surfaceterrace() {
    return this.addApartmentForm.get('surfaceterrace');
  }

  onSubmit(): void {
    if (this.addApartmentForm.valid) {
      console.log(this.addApartmentForm.value);
    } else {
      console.log("Form is invalid");
    }
  }


}
