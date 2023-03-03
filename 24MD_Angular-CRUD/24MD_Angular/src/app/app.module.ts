import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchComponent } from './components/switch/switch.component';
import { AnimalItemComponent } from './components/animal-item/animal-item.component';
import { FormComponent } from './components/form/form.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';

@NgModule({
    declarations: [
        AppComponent,
        SwitchComponent,
        AnimalItemComponent,
        FormComponent,
        GlobalErrorComponent,
        AnimalListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
