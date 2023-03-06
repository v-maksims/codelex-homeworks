import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { TMovie } from 'src/app/types/movie';

@Component({
    selector: 'app-movie-form',
    templateUrl: './movie-form.component.html',
    styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent {
    constructor (
        private modalService: ModalService,
    ) {}

    movieForm = new FormGroup({
        title: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
        ]),
        year: new FormControl(null, [
            Validators.required,
            Validators.min(1900),
            Validators.max(2023),
        ]),
        image: new FormControl('', [
            Validators.required,
            Validators.pattern(/https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/g),
        ]),
    });

    @Output() movieSubmit: EventEmitter<TMovie> = new EventEmitter();

    onSubmit () {
        this.modalService.close();
        this.movieSubmit.emit({
            image: String(this.movieForm.value.image),
            title: String(this.movieForm.value.title),
            year: Number(this.movieForm.value.year),
        });
        this.movieForm.reset();
    }
}
