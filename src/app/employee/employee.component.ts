import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.employeeForm = this._fb.group({
      name: ['', Validators.required],
      address: this._fb.array([]),
      age: '',
    });
    const studentControls = <FormArray>this.employeeForm.controls['address'];
    studentControls.push(this.initAddress());
  }

  initAddress() {
    return this._fb.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      state: ['', Validators.required],
      city: ''
    });
  }

  addAddress() {
    const studentControls = <FormArray>this.employeeForm.controls['address'];
    studentControls.push(this.initAddress());
  }
}
