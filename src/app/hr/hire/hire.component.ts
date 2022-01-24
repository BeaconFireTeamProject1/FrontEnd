import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {

  constructor(private httpService: HttpServiceService) { }

  singUpform = new FormGroup({
    email: new FormControl('')
  })

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    this.httpService.sendEmail(form);
  }

}
