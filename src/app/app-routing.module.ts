import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestRoutingComponent } from './test-routing/test-routing.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'test', // child route path
        component: TestRoutingComponent, // child route component that the router renders
      },
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'test', component: TestRoutingComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
