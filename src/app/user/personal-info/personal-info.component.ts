import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/interfaces/Address';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { User } from '../user';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  public user! : User;
  // public user: User = {
  //   ID: 0,
  //   firstName: 'Chin-Wei',
  //   lastName: 'Hu',
  //   middleName: null,
  //   preferredName: 'Jerry Hu',
  //   avatar: 'https://i.imgur.com/oYiTqum.jpg',
  //   DOB: '1999-04-06',
  //   gender: 'male',
  //   ssn: '1938209812',
  //   driverLicense: "#DL",
	//   driverLicense_ExpirationDate: "02-02-2077",
  //   addresses: [
  //     {
  //       ID: 2,
  //       addressline1: '5000 eiwfoewji ave',
  //       addressline2: 'apt 23094',
  //       city: 'seattle',
  //       state: 'WA',
  //       zipcode: '98104'
  //     },
  //     {
  //       ID: 3,
  //       addressline1: '4324 hhoiho ave',
  //       addressline2: 'apt 241',
  //       city: 'new york',
  //       state: 'NY',
  //       zipcode: '10191'
  //     }
  //   ],
  //   email: 'jerryhu920@gmail.com',
  //   cellphone: '0239203943',
  //   alternatePhone: '394802956',
  //   employment: {
  //     workAuthorization: 'f1',
  //     authorizationStartDate: '12-31-2021',
  //     authorizationEndDate: '12-31-2023',
  //     employmentStartDate: '12-31-2041',
  //     employmentEndDate: '95-87-9333',
  //     title: 'intern'
  //   },
  //   contact:{
  //     personID: 3,
  //     name: "Adrian",
  //     phone: "567892385",
  //     address: "adfasgdagea",
  //     relationship: "cousin",
  //     title: "",
  //     ID: 8,
  //     isReferrence: false,
  //     isEmergency: true,
  //   },
  //   documents: [
  //     {
  //       name: 'i20',
  //       icon: 'random'
  //     }
  //   ]
  // }
  public id: number = 0;
  public age = 0;
  public basicForm: any;
  public addressForm: any;
  public contactForm: any;
  public employmentForm: any;
  public emergencyForm: any;
  constructor(private httpService: HttpServiceService, private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.httpService.getProfile(this.id).subscribe(
      (data: any) => {
        this.user = <User> JSON.parse(data);
        let dob = new Date(this.user.dob);
        let timeDiff = Math.abs(Date.now() - dob.getTime());
        this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        this.basicForm = new FormGroup({
          ID: new FormControl(this.user.id),
          firstName: new FormControl(this.user.firstName),
          lastName: new FormControl(this.user.lastName),
          middleName: new FormControl(this.user.middleName),
          preferredName: new FormControl('user1'),
          avatar: new FormControl(this.user.avatar),
          dob: new FormControl(this.user.dob),
          gender: new FormControl(this.user.gender),
          ssn: new FormControl(this.user.ssn),
          driverLicense: new FormControl(this.user.driverLicense),
          driverLicense_ExpirationDate: new FormControl(this.user.driverLicenseExpirationDate),
        });
        this.addressForm = this.fb.group({
          addresses: this.fb.array(this.user.addressList.map(
            address => this.createAddress(address)))
        });
        this.contactForm = this.fb.group({
          email:[this.user.email],
          cellphone: [this.user.cellphone],
          alternatePhone: [this.user.alternatePhone]
        });
        this.employmentForm = this.fb.group({
          visaType: [this.user.employment.visaType],
          startDate: [this.user.employment.startDate],
          endDate: [this.user.employment.endDate],
          visaStartDate: [this.user.employment.visaStartDate],
          visaEndDate: [this.user.employment.visaEndDate],
          title: [this.user.employment.title]
        });
        this.emergencyForm = this.fb.group({
          personId: [this.user.contact[0].personId],
          name: [this.user.contact[0].name],
          phone: [this.user.contact[0].phone],
          address: [this.user.contact[0].address],
          relationship: [this.user.contact[0].relationship],
          title: [this.user.contact[0].title],
          id: [this.user.contact[0].id],
        });
      }
    );
  }

  //Basic Form util
  submitBasic(form: any): void {
    this.httpService.updateProfile(this.user.id, form);
    window.location.reload();
  }

  //Address form util
  submitAddress(form: any): void {
    console.log(form);
  }

  createAddress(address: any): FormGroup {
    return this.fb.group({
      addressline1: [address.addressLine1],
      addressline2: [address.addressLine2],
      city: [address.city],
      state: [address.state],
      zipcode: [address.zipcode]
    });
  }

  getAddresses(): FormArray {
    return this.addressForm.get('addresses') as FormArray;
  }

  addAddresses() {
    this.getAddresses().push(this.fb.group({
      addressline1: [''],
      addressline2: [''],
      city: [''],
      state: [''],
      zipcode: ['']
    }));
  }

  submitContact(form: any): void {
    console.log(form);
  }
  submitEmployment(form: any): void {
    console.log(form);
  }
  submitEmergency(form: any): void {
    console.log(form);
  }
}