import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchComponent } from './components/switch/switch.component';
import { AnimalItemComponent } from './components/animal-item/animal-item.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AnimalsPageComponent } from './pages/animals-page/animals-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { todoReducer } from './store/todo/todo.reducer';
import { ListComponent } from './components/list/list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { movieReducer } from './store/movie/movie.reducer';
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
    declarations: [
        AppComponent,
        SwitchComponent,
        AnimalItemComponent,
        GlobalErrorComponent,
        HomePageComponent,
        AnimalsPageComponent,
        TodoPageComponent,
        MoviePageComponent,
        NavigationComponent,
        AnimalFormComponent,
        ListComponent,
        TodoItemComponent,
        TodoFormComponent,
        MovieListComponent,
        MovieItemComponent,
        MovieFormComponent,
        ModalComponent,
        InputComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
            todo: todoReducer,
            movie: movieReducer,
        }),
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
