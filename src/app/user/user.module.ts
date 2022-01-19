import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserComponent } from './user/user.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { VisaStatusComponent } from './visa-status/visa-status.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserComponent,
    PersonalInfoComponent,
    VisaStatusComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule {}
