import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewCandidateComponent } from './new-candidate/new-candidate.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceComponent } from './service/service.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'login-form', component: LoginFormComponent},
  {path: 'candidates', component: CandidatesComponent},
  {path: 'new-candidate', component: NewCandidateComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
