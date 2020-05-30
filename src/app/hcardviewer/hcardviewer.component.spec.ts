import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcardviewerComponent } from './hcardviewer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HcardviewerComponent', () => {
  let component: HcardviewerComponent;
  let fixture: ComponentFixture<HcardviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HcardviewerComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcardviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the hCard givenname in an mat-card-title tag', () => {
    fixture.componentInstance.hCard = {
      givenName: 'Efron',
      surname: 'A',
      email: 'efronA@efronA.com',
      phone: '',
      houseno: '',
      street: '',
      suburb: '',
      state: '',
      postcode: 0,
      country: '',
      avatar: null,
    };
    fixture.detectChanges();
    let titleHolder = fixture.debugElement.query(By.css('mat-card-title'));
    expect(titleHolder.nativeElement.textContent).toContain('Efron A');
  });
});
