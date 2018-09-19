//     THIS IS LAZY LOADING 
// HERE WE ARE CREATING THE NEW MODULE.TS FILE AND IMPORTING THE SERVICES AND ITS CHILDS

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ServicesComponent } from './services.component';
import { TallyGoldComponent } from '../tally-gold/tally-gold.component';
import { TallySilverComponent } from '../tally-silver/tally-silver.component';
import { TallyTDLComponent } from '../tally-tdl/tally-tdl.component';



const Childrouter: Routes = [
  { path : '', component : ServicesComponent, pathMatch:'full'},
      { path: 'tally-silver', component: TallySilverComponent },
      { path: 'tally-gold', component: TallyGoldComponent },
      { path: 'tally-TDL', component: TallyTDLComponent},
       
    
]

@NgModule({
  declarations: [
    ServicesComponent,
    TallySilverComponent,
    TallyGoldComponent,
    TallyTDLComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Childrouter),//router is aliasing name

  ],
  providers: [],
})
export class Servicesmodule { }//dont import servicemodule in to appmodule.ts 
