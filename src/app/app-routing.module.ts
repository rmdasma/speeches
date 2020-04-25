import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechesComponent } from './pages/speeches/speeches.component';
import { AddSpeechComponent } from './pages/add-speech/add-speech.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch: 'full'},
  { path: 'home', component: SpeechesComponent, data: { title: 'My Speeches', animState: 'home' } },
  { path: 'add', component: AddSpeechComponent, data: { title: 'Submit New Speech', animState: 'add' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Site', animState: 'error' } },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' , animState: 'error'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }