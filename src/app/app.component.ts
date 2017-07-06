import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { PopupComponent } from './popup/popup.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  time = { hour: 13, minute: 30 };
  meridian = true;
  constructor(private _modal: NgbModal) {

  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  open() {
    this._modal.open(PopupComponent);
  }

  openForm() {
    this._modal.open(EmployeeComponent);
  }
}
