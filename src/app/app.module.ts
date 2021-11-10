import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { BasicPipe } from './pipes/basic/basic.pipe';
import { KeysPipe } from './pipes/basic/keys.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoteAddDialogComponent } from './note-add-dialog/note-add-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoteEditDialogComponent } from './note-edit-dialog/note-edit-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicPipe,
    KeysPipe,
    NoteAddDialogComponent,
    NoteEditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
