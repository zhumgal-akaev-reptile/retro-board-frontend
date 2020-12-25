import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from '../modules/ticket/ticket.component';
import { ChatPageComponent } from '../modules/chat-page/chat-page.component';


const routes: Routes = [
  {
    path: 'chat',
    component: ChatPageComponent
  },
  {
    path: 'board',
    component: TicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
