import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { User } from '../user';

@Component({
  selector: 'app-visa-status',
  templateUrl: './visa-status.component.html',
  styleUrls: ['./visa-status.component.css']
})
export class VisaStatusComponent implements OnInit {
  public id: number = 0;
  public user: any;
  constructor(private route: ActivatedRoute, private httpService: HttpServiceService, private fb: FormBuilder) {}
  public uploadFileForm: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.httpService.getProfile(this.id).subscribe(
      (data: any) => {
        this.user = <User> JSON.parse(data);
        this.uploadFileForm = this.fb.group({
          file: ['']
        });
        console.log(this.user);
      }
    );
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadFileForm.get('file').setValue(file);
    }
  }

  upload() {
    const formData = new FormData();
    formData.append('file', this.uploadFileForm.get('file').value);
    this.httpService.uploadFile(formData);
    //window.location.reload();
  }

}
