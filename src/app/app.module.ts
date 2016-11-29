import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ModelComponent } from './model/model.component';
import { ImagenetComponent } from './imagenet/imagenet.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: "imagenet",
    component: ImagenetComponent, 
  },
];


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ModelComponent,
    ImagenetComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
