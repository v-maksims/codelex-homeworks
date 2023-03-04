import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsPageComponent } from './pages/animals-page/animals-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'animals', component: AnimalsPageComponent },
    { path: 'todos', component: TodoPageComponent },
    { path: 'movies', component: MoviePageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
