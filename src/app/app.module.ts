import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppServices } from './app.service';
import { HttpModule } from '@angular/http';
import { Servicesmodule } from './services/service.module';
//dont add servicemodule here which is from the servicemodule.ts 
import { FiltersComponent } from './filters/filters.component';
import { filterPipe } from './filter.pipe';







const router: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', loadChildren: './services/service.module#Servicesmodule' },//
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'filters', component: FiltersComponent },


]

// here we can write using child routing also but we are using the lazy loading concept for fast loading
// { path: 'services', component : ServicesComponent,children:[
  //   { path : 'Tally-silver' , component : tally-silverComponent },
  //   { path : 'Tally-Gold' , component : tally-goldComponent }
  //   { path : 'Tally-TDL' , component : tally-TDLComponent }]}





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AboutusComponent,
    ContactComponent,
    RegisterComponent,
    FiltersComponent,
    filterPipe

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [AppServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
