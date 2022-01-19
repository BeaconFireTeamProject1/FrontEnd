import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HireComponent } from './hire/hire.component';
import { HrComponent } from './hr/hr.component';
import { HrHomeComponent } from './hr-home/hr-home.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';
import { HrRoutingModule } from './hr-routing.module';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
@NgModule({
  declarations: [
    HireComponent,
    HrComponent,
    HrHomeComponent,
    PersonalProfileComponent,
    VisaStatusManagementComponent,
    ProfileDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HrRoutingModule
  ]
})
export class HrModule { }
