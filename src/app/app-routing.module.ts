import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeutralGameComponent } from './neutral-game/neutral-game.component';
import { BeginGameComponent } from './begin-game/begin-game.component';

const routes: Routes = [
  { path: 'game', component:NeutralGameComponent  },
  {path:'begin', component:BeginGameComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
