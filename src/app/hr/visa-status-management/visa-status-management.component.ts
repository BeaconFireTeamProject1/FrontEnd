import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { VisaProfileList } from '../visa-profile-list';
import { VisaDetailList } from '../visa-detail-list';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-visa-status-management',
  templateUrl: './visa-status-management.component.html',
  styleUrls: ['./visa-status-management.component.scss']
})
export class VisaStatusManagementComponent implements OnInit {

  constructor(private httpService: HttpServiceService, private fb: FormBuilder) { }
  public visaList: VisaProfileList[] = [];
  public visaDetailList: VisaDetailList[] = [];
  public message: boolean = false;

  ngOnInit(): void {
    this.httpService.getVisaProfile().subscribe(
      (data: any) => {
        let temp = <VisaProfileList[]> JSON.parse(data);
        temp.forEach(e => {
          this.visaList.push(e);
          this.httpService.getVisaDetails(e.ID).subscribe(
            (data: any) => {
              let det = <VisaDetailList> JSON.parse(data);
              this.visaDetailList.push(det);
            }
          );

        });
      }
    );
  }
  setRes(a: string, id: any) {
    this.httpService.sendReview('{\"review\":\"' + a + '\"}', id);
    this.message = true;
    setTimeout(() => {
      this.closeMessage();
    }, 1000);
  }

  closeMessage() {
    this.message = false;
  }
}
