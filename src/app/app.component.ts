import { Component } from '@angular/core';
import { NoteService } from './services/note.service';
import { Note } from './interfaces/note';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteAddDialogComponent } from './note-add-dialog/note-add-dialog.component';
import { NoteEditDialogComponent } from './note-edit-dialog/note-edit-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Note List';
  notes: Note[] = [];

  constructor(
    private noteService: NoteService,
    public dialog: MatDialog
    ) {}
  
  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNoteList().subscribe(data => {
      this.notes = data;
    });
  }

  addNote() {
    const dialogRef = this.dialog.open(NoteAddDialogComponent, {
      width: '750px'
    });;
  }

  deleteNote(id) {
    this.noteService.deleteNoteItem(id).subscribe((data) => {
      this.getNotes();
    });
  }

  editNote(id) {
    const dialogRef = this.dialog.open(NoteEditDialogComponent, {
      width: '750px'
    });

    this.noteService.getEditNoteId(id);
    // this.noteService.editNoteItem(id, '').subscribe((data) => {
    //   this.getNotes();
    // });
  }

 
}
