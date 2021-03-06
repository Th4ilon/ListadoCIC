import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CsvListComponent } from './Components/csv-list/csv-list.component';
// import { FilterByValuesComponent } from './Components/filter-by-values/filter-by-values.component';

const routes: Routes = [{ path: '', component: CsvListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
