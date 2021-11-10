import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../interfaces/dialog';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-add-dialog',
  templateUrl: './note-add-dialog.component.html',
  styleUrls: ['./note-add-dialog.component.css']
})
export class NoteAddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NoteAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private noteService: NoteService
    ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addNewItem(value: string){
    this.noteService.addNoteList(value).subscribe(data => {
      this.dialogRef.close();
    });
  }

}
