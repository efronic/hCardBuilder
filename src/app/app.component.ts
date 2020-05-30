import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { takeWhile } from 'rxjs/operators';
import { HCard } from './_models/hCard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  hCardForm: FormGroup;
  selectedAvatar: File;
  hCard: HCard;
  formIsValid = false;
  componentActive = true;
  submitted = false;
  title = 'hCardBuilder';
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}
  ngOnInit() {
    this.createHCardbackForm();
    this.formValueChanged();
  }
  createHCardbackForm() {
    this.hCardForm = this.fb.group({
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
      avatar: [null, Validators.required],
    });
  }
  formValueChanged() {
    this.hCardForm.valueChanges
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((mode) => {
        if (mode) {
          this.submitted = false;
          this.hCard = { ...this.hCard, ...this.hCardForm.value };
        }
      });
  }
  onFileSelected(event) {
    if (
      event &&
      event.target.files.length > 0 &&
      event.target.files[0].size > 0
    ) {
      if (event.target.files[0].type.match('image/png') == null) {
        this.openSnackBar('Only PNG images are supported.', 'OK');
        return;
      }
      const reader = new FileReader();
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.hCardForm.get('avatar').setValue({
          avatarName: file.name,
          avatarType: file.type,
          target: reader.result,
        });
      };
    }
    this.selectedAvatar = event.target.files[0];
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
  submit() {
    this.submitted = true;
    if (this.hCardForm.valid) {
      this.formIsValid = true;
      console.log('hCard is submitted! ', this.hCard);

      this.openSnackBar(
        'Your hCard information is successfully submitted. Thank you!',
        'Ok'
      );
    } else {
      this.formIsValid = false;
      this.openSnackBar('Please enter all the required fields!', 'Ok');
    }
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
