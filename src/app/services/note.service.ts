import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { Observable, of } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  noteId: number = 0;

  private noteList: Note[] = [];

  constructor(private _snackBar: MatSnackBar) { }

  public getNoteList(): Observable<Note[]> {
    let localStorageItem = JSON.parse(localStorage.getItem('notes'));
    this.noteList = localStorageItem == null ? [] : localStorageItem.notes;
    const liste = of(this.noteList);
    return liste;
  }

  addNoteList(item): Observable<Note[]> {
    this.noteList.push({"id": this.noteList.length+1, "text": item});
    this.setLocalStorageNotes(this.noteList);
    this._snackBar.open('Note added!!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    const liste = of(this.noteList);
    return liste;
  }

  deleteNoteItem(noteId): Observable<Note[]> {
    this.noteList = this.noteList.filter(item => (item.id != noteId));
    this.setLocalStorageNotes(this.noteList);
    this._snackBar.open('Note deleted!!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    const liste = of(this.noteList);
    return liste;
  }

  getEditNoteId(id) {
    this.noteId = id;
  }

  editNoteList(text): Observable<Note[]> {
    this.noteList = this.noteList.filter(item => (item.id == this.noteId) ? item.text = text : item.text = item.text );
    this.setLocalStorageNotes(this.noteList);
    this._snackBar.open('Note edited!!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    const liste = of(this.noteList);
    return liste;
  }

  setLocalStorageNotes(notes: Note[]):void {
    localStorage.setItem('notes', JSON.stringify({notes: notes}));
  }

}
