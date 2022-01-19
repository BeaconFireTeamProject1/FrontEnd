import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {

  public profiles: Profile[] = [];
  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {
    this.httpService.getProfiles().subscribe(
      (data: any) => {
        this.profiles.push(JSON.parse(data));
      }
    );
  }

}
