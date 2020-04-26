import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatDividerModule,
  MatCardModule,
  MatIconModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatCheckboxModule,
} from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
