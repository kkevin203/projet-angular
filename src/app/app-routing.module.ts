import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MissionComponent } from './mission/mission.component';
import { PresentationComponent } from './presentation/presentation.component';


const routes: Routes = [
  { path: '' , component: CardComponent},
  { path: 'presentation', component: PresentationComponent },
  { path: 'mission', component: MissionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
