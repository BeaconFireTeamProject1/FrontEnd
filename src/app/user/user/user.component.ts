import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private loc: Location) { }

  ngOnInit(): void {
  }
  backClicked() {
    this.loc.back();
  }
}
