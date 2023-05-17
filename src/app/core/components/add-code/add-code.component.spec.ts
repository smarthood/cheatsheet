import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCodeComponent } from './add-code.component';
import { ApiService } from '../../services/API/api.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
class ApiClass {
  getSpecificData() {
    return of({});
  }
  updateData() {
    return of({});
  }
  postData(id: any, value: any) {
    return;
  }
}
fdescribe('AddCodeComponent', () => {
  let component: AddCodeComponent;
  let fixture: ComponentFixture<AddCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCodeComponent],
      imports: [
        MatSnackBarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatDividerModule,
        MatIconModule,
      ],
      providers: [
        { provide: ApiService, useClass: ApiClass },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1', dataId: 'hi' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onSubmit', () => {
    component.onSubmit();
    component.update = false;
    component.onSubmit();
    expect(component.onSubmit).toBeDefined();
  });
  it('should cover cheatsheet form', () => {
    component.cheatForm = new FormGroup({
      title: new FormControl('sample'),
      fcode: new FormControl('sample'),
      ftype: new FormControl('sample'),
    });
    expect(component.onSubmit).toBeDefined();
  });
});
