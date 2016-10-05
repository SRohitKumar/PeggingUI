import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeggingReviewComponent } from './pegging-review/pegging-review.component';
import { PeggingResultsTable } from './pegging-review/PeggingResultsTable';

@NgModule({
  declarations: [
    AppComponent,
    PeggingReviewComponent,
    PeggingResultsTable,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
