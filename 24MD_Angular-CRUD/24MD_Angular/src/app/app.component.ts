import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AnimalsService, TAnimal } from './services/animals.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
