import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { CardComponent } from './card/card.component';
import { EventComponent } from './event/event.component';
import { MissionComponent } from './mission/mission.component';
import { NewsComponent } from './news/news.component';
import { PresentationComponent } from './presentation/presentation.component';
import { StreamComponent } from './stream/stream.component';


const routes: Routes = [
  { path: '' , component: CardComponent},
  { path: 'presentation', component: PresentationComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'event' , component: EventComponent },
  { path: 'agenda', component:AgendaComponent  },
  { path: 'news', component: NewsComponent },
  { path: 'stream', component: StreamComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
