import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import {
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatDatepickerModule,
  MatMenuModule,
  MatCardModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatTabsModule


} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatMenuModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatTabsModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatMenuModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatTabsModule
  ]
})
export class CustomMaterialModule {}
