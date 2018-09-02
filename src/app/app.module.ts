import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatDividerModule, MatListModule} from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { FitnessInstitutesComponent } from './components/fitness-institutes/fitness-institutes.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'FitnessInstitutes', component: FitnessInstitutesComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FitnessInstitutesComponent,
    ContactComponent,
   
    
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    RouterModule.forRoot([
      {
        path:'components/home',
        component:HomeComponent
      },
      {
        path:'components/fitnessinstitutes',
        component:FitnessInstitutesComponent
      },
      
      {
        path:'components/contact',
        component:ContactComponent
      },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
