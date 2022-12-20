import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
