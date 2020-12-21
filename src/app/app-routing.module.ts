import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from '../modules/chat/chat.component';
import { TicketComponent } from '../modules/ticket/ticket.component';


const routes: Routes = [
  {
    path: 'chat',
    component: ChatComponent
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
