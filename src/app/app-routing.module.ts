import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "user",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    data: {preload: true}},
  { path: "hr",
    loadChildren: () => import('./hr/hr.module').then(m => m.HrModule),
    data: {preload: true}},
  { path: '', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
