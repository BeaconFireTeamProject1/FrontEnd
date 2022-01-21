import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Address } from 'src/app/interfaces/Address';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { User } from '../user';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  public user: User = {
    ID: 0,
    firstName: 'Chin-Wei',
    lastName: 'Hu',
    middleName: null,
    preferredName: 'Jerry Hu',
    avatar: 'https://i.imgur.com/oYiTqum.jpg',
    DOB: '1999-04-06',
    gender: 'male',
    ssn: '1938209812',
    driverLicense: "#DL",
	  driverLicense_ExpirationDate: "02-02-2077",
    addresses: [
      {
        ID: 2,
        addressline1: '5000 eiwfoewji ave',
        addressline2: 'apt 23094',
        city: 'seattle',
        state: 'WA',
        zipcode: '98104'
      },
      {
        ID: 3,
        addressline1: '4324 hhoiho ave',
        addressline2: 'apt 241',
        city: 'new york',
        state: 'NY',
        zipcode: '10191'
      }
    ],
    email: 'jerryhu920@gmail.com',
    cellphone: '0239203943',
    alternatePhone: '394802956',
    employment: {
      workAuthorization: 'f1',
      authorizationStartDate: '12-31-2021',
      authorizationEndDate: '12-31-2023',
      employmentStartDate: '12-31-2041',
      employmentEndDate: '95-87-9333',
      title: 'intern'
    },
    contact:{
      personID: 3,
      name: "Adrian",
      phone: "567892385",
      address: "adfasgdagea",
      relationship: "cousin",
      title: "",
      ID: 8,
      isReferrence: false,
      isEmergency: true,
    },
    documents: [
      {
        name: 'i20',
        icon: 'random'
      }
    ]
  }
  // public user!: User;
  public em = this.user.contact;
  public doc = this.user.documents;
  public age = 0;
  constructor(private httpService: HttpServiceService, private fb: FormBuilder) { }
  // addressForm = new FormGroup({
  //   personId:
  // })
  basicForm = new FormGroup({
    ID: new FormControl(this.user.ID),
    firstName: new FormControl(this.user.firstName),
    lastName: new FormControl(this.user.lastName),
    middleName: new FormControl(this.user.middleName),
    preferredName: new FormControl(this.user.preferredName),
    avatar: new FormControl(this.user.avatar),
    DOB: new FormControl(this.user.DOB),
    gender: new FormControl(this.user.gender),
    ssn: new FormControl(this.user.ssn),
    driverLicense: new FormControl(this.user.driverLicense),
    driverLicense_ExpirationDate: new FormControl(this.user.driverLicense_ExpirationDate),
  });

  addressForm = this.fb.group({
    addresses: this.fb.array(this.user.addresses.map(
      address => this.createAddress(address)))
  });

  contactForm = this.fb.group({
    ID: [this.user.ID],
    email:[this.user.email],
    cellphone: [this.user.cellphone],
    alternatePhone: [this.user.alternatePhone]
  });

  employmentForm = this.fb.group({
    ID: [this.user.ID],
    workAuthorization: [this.user.employment.workAuthorization],
    authorizationStartDate: [this.user.employment.authorizationStartDate],
    authorizationEndDate: [this.user.employment.authorizationEndDate],
    title: [this.user.employment.title],
    employmentStartDate: [this.user.employment.employmentStartDate],
    employmentEndDate: [this.user.employment.employmentEndDate]
  });

  emergencyForm = this.fb.group({
    personID: [this.user.contact.personID],
    name: [this.user.contact.name],
    phone: [this.user.contact.phone],
    address: [this.user.contact.address],
    relationship: [this.user.contact.relationship],
    title: [this.user.employment.title],
    ID: [this.user.contact.ID],
    isReferrence: false,
    isEmergency: true
  });

  ngOnInit(): void {
    // this.httpService.getProfile(id).subscribe(
    //   (data: any) => {
    //     this.user = <User> JSON.parse(data);
    //   }
    // );
    let dob = new Date(this.user.DOB);
    let timeDiff = Math.abs(Date.now() - dob.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
  }

  //Basic Form util
  submitBasic(form: any): void {
    console.log(form);
  }

  //Address form util
  submitAddress(form: any): void {
    console.log(form);
  }

  createAddress(address: any): FormGroup {
    return this.fb.group({
      ID: [address.ID],
      addressline1: [address.addressline1],
      addressline2: [address.addressline2],
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
      ID: null,
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