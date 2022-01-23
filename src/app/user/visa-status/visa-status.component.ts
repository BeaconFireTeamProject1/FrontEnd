import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visa-status',
  templateUrl: './visa-status.component.html',
  styleUrls: ['./visa-status.component.css']
})
export class VisaStatusComponent implements OnInit {
  public id: number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
    });
  }

}
