import { Component, HostListener, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  collection!: FormGroup;
  @ViewChild('collectiondialog') collectiondialog!: TemplateRef<any>;
  @HostListener('window:keydown', ['$event']) onKeyDown(e: any) {
    if (e.shiftKey && e.keyCode == 76) {
      sessionStorage.setItem('login', 'truewai');
      this.dialog.open(this.collectiondialog);
    }
  }
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.collection = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
}
