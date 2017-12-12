import { Injectable } from '@angular/core';
import { EmployeeType } from '../models/Employee-type';


//@Injectable()
export class EmployeeDropDownService {

  empType: EmployeeType[] = [];

  /** Get the EMPLOYEE Type */
  getEmployeeType() {
    return this.empType = [{
      id: 1,
      type: 'Mr.'
    },
    {
      id: 1,
      type: 'Mrs.'
    }
    ];
  }

}
