import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalsService, TAnimal } from 'src/app/services/animals.service';

@Component({
    selector: 'app-animals-page',
    templateUrl: './animals-page.component.html',
    styleUrls: ['./animals-page.component.scss'],
})
export class AnimalsPageComponent implements OnInit {
    constructor (private animalsService: AnimalsService) {}

    animals$: Observable<TAnimal[]>;

    category = 'cat';

    ngOnInit () {
        this.animals$ = this.animalsService.getAnimalByCategory(this.category);
    }

    deleteAnimal (id: string) {
        this.animalsService.deleteAnimal(id).subscribe(() => this.ngOnInit());
    }

    postAnimal (data:Omit<TAnimal, '_id'>) {
        this.animalsService.postAnimal(data).subscribe(() => this.ngOnInit());
    }

    categoryHandler (switchValue: boolean) {
        this.category = switchValue ? 'cat' : 'dog';
        this.ngOnInit();
    }
}
