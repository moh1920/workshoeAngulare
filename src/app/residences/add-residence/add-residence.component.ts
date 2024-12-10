import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.scss']
})
export class AddResidenceComponent {
  addResidenceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addResidenceForm = this.fb.group({
      id: [null], // Champ caché
      name: ['', [Validators.required, Validators.minLength(3)]], // Minimum 3 caractères
      address: ['', [Validators.required]], // Champ obligatoire
      image: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(https?:\\/\\/)?' + // http ou https
              '([\\da-z.-]+)\\.([a-z.]{2,6})' + // domaine
              '([\\/\\w .-]*)*\\/?$' // chemin
          )
        ]
      ], // URL valide
      status: ['Disponible', Validators.required] // Par défaut "Disponible"
    });
  }

  onSubmit(): void {
    if (this.addResidenceForm.valid) {
      console.log(this.addResidenceForm.value); // Simule l'envoi des données
      alert('Residence added successfully!');
    } else {
      alert('Form is invalid. Please check the fields.');
    }
  }
}
