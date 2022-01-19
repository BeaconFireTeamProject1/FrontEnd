import { Component, ContentChildDecorator, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot
} from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Person } from 'src/app/interfaces/Person';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  constructor(private httpService: HttpServiceService, private route: ActivatedRouteSnapshot) { }

  private id = this.route.paramMap.get('id');
  public user!: User;
  public contactPerson!: Person;
  public age = 0;
  ngOnInit(): void {
    this.httpService.getProfile(this.id).subscribe(
      (data: any) => {
        this.user = JSON.parse(data);
      }
    );
    let dob = new Date(this.user.DOB);
    console.log(dob);
    let timeDiff = Math.abs(Date.now() - dob.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    console.log(this.age)
  }

}
