import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [EmployeeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should be created', () => {
    console.log(component);
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.employeeForm.valid).toBeFalsy();
  });

  it('form invalid when filled', () => {
    component.employeeForm.controls['name'].setValue('Santosh');
    expect(component.employeeForm.valid).toBeFalsy();
  });

  it('Add new address', () => {
    component.addAddress();
    fixture.detectChanges();
    let form = component.employeeForm.controls['address'];
    console.log(form);
    console.log(component.employeeForm);
    expect(component.employeeForm.valid).toBeFalsy();
  });

});
