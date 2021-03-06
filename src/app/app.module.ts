import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterByPipe } from '../app/filter-by.pipe'

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseAddComponent } from './expense-add/expense-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ExpensesComponent,
    ExpenseEditComponent,
    PageNotFoundComponent,
    ExpenseFormComponent,
    ExpenseAddComponent,
    FilterByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
