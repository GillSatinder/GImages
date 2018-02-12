import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import {ImageService} from './image.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {
  MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatProgressBarModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, MatMenuModule, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule,
    MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatProgressBarModule
  ],
  bootstrap: [AppComponent],
  providers: [ImageService]
})
export class AppModule { }
