import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {

  public profiles: Profile[] = [];
  public ind: number = 0;
  public selected: number = 2;
  public search: string = "";
  constructor(private httpService: HttpServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.ind = params['index'];
      this.selected = params['selected'];
      console.log(this.ind);
      console.log(this.selected);
    });
    this.httpService.getProfiles().subscribe(
      (data: any) => {
        let temp = <Profile[]> JSON.parse(data);
        temp.forEach(e => {
          this.profiles.push(e);
        })
      }
    );
  }

  createRange() : number[]{
    let temp = Math.ceil((this.profiles.length) / this.selected);
    return new Array(temp);
  }

}
