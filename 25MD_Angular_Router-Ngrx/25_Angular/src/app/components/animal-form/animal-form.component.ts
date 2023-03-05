import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TAnimal } from 'src/app/services/animals.service';

@Component({
    selector: 'app-animal-form',
    templateUrl: './animal-form.component.html',
    styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent {
    categories = ['cat', 'dog'];

    animalForm = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
        ]),
        category: new FormControl('', Validators.required),
    });

  @Output() animalSubmitted:EventEmitter<Omit<TAnimal, '_id'>> = new EventEmitter();

  submitForm () {
      this.animalSubmitted.emit({
          category: String(this.animalForm.value.category),
          name: String(this.animalForm.value.name),
      });
      this.animalForm.reset({ category: '' });
  }

  getControl (control: string) {
      return this.animalForm.get(control);
  }
}
