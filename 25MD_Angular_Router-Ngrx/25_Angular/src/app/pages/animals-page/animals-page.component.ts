import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AnimalsService, TAnimal } from 'src/app/services/animals.service';

@Component({
    selector: 'app-animals-page',
    templateUrl: './animals-page.component.html',
    styleUrls: ['./animals-page.component.scss'],
})
export class AnimalsPageComponent implements OnInit {
    constructor (private animalsService: AnimalsService) {}

    animals$: Observable<TAnimal[]>;

    loading = false;

    category = 'cat';

    ngOnInit () {
        this.loading = true;
        this.animals$ = this.animalsService.getAnimalByCategory(this.category).pipe(
            tap(() => this.loading = false),
        );
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
