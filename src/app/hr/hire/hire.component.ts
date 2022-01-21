import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {

  constructor() { }

  singUpform = new FormGroup({
    email: new FormControl('')
  })

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    console.log(form);
  }

}
