import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserComponent } from './user/user.component';
import { VisaStatusComponent } from './visa-status/visa-status.component';

const userRoutes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      {
        path: '', component: UserHomeComponent
      },
      {
        path: 'personal-info', component: PersonalInfoComponent
      },
      {
        path: 'visa-status', component: VisaStatusComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
