import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'simple-angular-checkbox-component';

  checkedOutsideForm = false;

  checked = true;

  get reactiveFormValue() {
    return JSON.stringify(this.form.value);
  }

  get templateFormValue() {
    return this.checked;
  }

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      checkbox: [true]
    });
  }

  onChange(event: any) {
    this.checkedOutsideForm = event;
    console.log('Checkbox onChange', event);
  }

  onSubmit(event: any) {
    console.log('onSubmit', this.form.value);
  }
}
