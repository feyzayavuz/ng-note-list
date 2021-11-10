import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAddDialogComponent } from './note-add-dialog.component';

describe('NoteAddDialogComponent', () => {
  let component: NoteAddDialogComponent;
  let fixture: ComponentFixture<NoteAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
