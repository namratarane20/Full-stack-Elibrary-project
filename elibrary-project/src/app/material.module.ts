import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
imports: [],
exports: [
BrowserModule,
BrowserAnimationsModule,

MatSnackBarModule,

],
})
export class MaterialModule {}
