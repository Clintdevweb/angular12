import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  public formData = new FormControl('');

  public profileForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  public profileForm2 = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    }),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public handleSubmid(): void {
    console.log('data', this.profileForm2.value);
  }
}
