import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HireComponent } from './hire/hire.component';
import { HrHomeComponent } from './hr-home/hr-home.component';
import { HrComponent } from './hr/hr.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';

const routes: Routes = [
  {
    path: '', component: HrComponent,
    children: [
      {
        path: '', component: HrHomeComponent
      },
      {
        path: 'personal-profile', component: PersonalProfileComponent,
        children: [
          {
            path: ':id',
            component: ProfileDetailComponent
          }
        ]
      },
      {
        path: 'visa-status-management', component: VisaStatusManagementComponent
      },
      {
        path: 'hire', component: HireComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HrRoutingModule { }