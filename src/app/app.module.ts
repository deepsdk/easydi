import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ClassificationComponent } from './classification/classification.component';
import { MenuComponent } from './menu/menu.component';
import { ResultRankComponent } from './result-rank/result-rank.component';

import { ModelService } from "./model.service";
import { DeepapiService } from "./deepapi.service";

const routes: Routes = [
  {
    path: "classification",
    component: ClassificationComponent, 
  },
];


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ClassificationComponent,
    MenuComponent,
    ResultRankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes),
    Ng2PageScrollModule.forRoot(),
  ],
  providers: [ModelService, DeepapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
