import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HCard } from './_models/hCard';
import { MatDividerModule } from '@angular/material/divider';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  const formBuilder: FormBuilder = new FormBuilder();
  const mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
  let hCard: HCard = {
    givenName: '',
    surname: '',
    email: '',
    phone: '',
    houseno: '',
    street: '',
    suburb: '',
    state: '',
    postcode: 0,
    country: '',
    avatar: null,
  };

  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatDividerModule,
      ],
      declarations: [AppComponent],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: MatSnackBar, useValue: mockSnackBar },
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    // pass in the form dynamically
    component.hCardForm = formBuilder.group({
      givenName: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      houseno: ['', Validators.required],
      street: ['', Validators.required],
      suburb: ['', Validators.required],
      state: ['', Validators.required],
      postcode: ['', Validators.required],
      country: ['', Validators.required],
      avatar: null,
    });
    fixture.detectChanges();
  });
  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);

    // const app = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'hCardBuilder'`, () => {
    fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;

    expect(component.title).toEqual('hCardBuilder');
  });

  it('givenname should be empty', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let el = fixture.debugElement.query(By.css('#givenNameInput')).nativeElement
      .value;
    expect(el).toEqual('');
  });
  it('givenname should be empty', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let el = fixture.debugElement.query(By.css('#givenNameInput')).nativeElement
      .value;
    expect(el).toEqual('');
  });
  describe('submit', () => {
    it('should not submit if form is not valid', () => {
      component.hCardForm = formBuilder.group({
        givenName: ['test', Validators.required],
        surname: ['test', Validators.required],
        email: ['test', Validators.required],
        phone: ['test', Validators.required],
        houseno: ['test', Validators.required],
        street: ['test', Validators.required],
        suburb: ['test', Validators.required],
        state: ['test', Validators.required],
        postcode: ['test', Validators.required],
        country: ['', Validators.required],
        avatar: null,
      });

      component.submit();

      expect(component.formIsValid).toBeFalse();
      expect(component.submitted).toBeTrue();
    });
  });
});
