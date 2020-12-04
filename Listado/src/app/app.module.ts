import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { CsvListComponent } from './Components/csv-list/csv-list.component'; // TODO need to be a module
// Materrial Modules
import { MaterialModule } from '../Shared/Modules/material.module';
import { DatePipe } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FilterByValuesComponent } from './Components/filter-by-values/filter-by-values.component';


@NgModule({
  declarations: [
    AppComponent,
    CsvListComponent,
    FilterByValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
