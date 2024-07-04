import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';
import { CreationContratComponent } from './creation-contrat/creation-contrat.component';
import { 
	IgxStepperModule,
	IgxMaskModule,
	IgxInputGroupModule,
	IgxButtonModule,
	IgxRadioModule,
	IgxCardModule,
	IgxCheckboxModule,
	IgxSelectModule,
	IgxIconModule,
	IgxBadgeModule,
	IgxComboModule,
	IgxAccordionModule,
	IgxSwitchModule,
  IgxDatePickerModule,
  IgxDialogModule,
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CreationContratComponent
  ],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxStepperModule,
	IgxMaskModule,
	IgxInputGroupModule,
	IgxButtonModule,
	IgxDialogModule,
	IgxRadioModule,
	IgxCardModule,
	IgxCheckboxModule,
	IgxSelectModule,
	IgxIconModule,
	IgxBadgeModule,
	IgxComboModule,
	IgxAccordionModule,
	IgxSwitchModule,
  IgxDatePickerModule,
  AppRoutingModule,
  ReactiveFormsModule,
  HttpClientModule
],
  providers: [],
  schemas: []
})
export class AppModule {}