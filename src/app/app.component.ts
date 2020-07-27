import { Component, OnInit } from '@angular/core'
import { WebsocketService } from './websocket.service'
import { Ticket, TICKET_STATUS } from '../models/ticket.model'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sprint-board';
  public message: TICKET_STATUS

  tickets: Ticket[] = [
    {
      id: 1,
      title: 'Having iterative development',
      description: 'Having iterative development and useful product for users early and often',
      status: TICKET_STATUS.I_LIKE
    },
    {
      id: 2,
      title: 'Work really fast without thinking',
      description: 'Agile was re-branded/re-named so people don\'t assume it means "work really fast without thinking',
      status: TICKET_STATUS.I_WISH
    },
    {
      id: 3,
      title: 'We could make our board three dimensional?',
      description: 'We could make our agile board three dimensional? What other dimension would we add?',
      status: TICKET_STATUS.WHAT_IF
    }
  ];

  constructor(private webSocketService: WebsocketService) {}

  ngOnInit(): void {
    this.webSocketService.emit('msgToServer', TICKET_STATUS.I_LIKE)
    this.webSocketService.listen('msgToClient').subscribe((data: TICKET_STATUS) => {
      this.message = data
    })
  }

  drop(event: CdkDragDrop<Ticket[]>) {
    console.log(event.previousContainer === event.container)
  }

  getTicketsByStatus(status: TICKET_STATUS): Ticket[] {
    return this.tickets.filter(ticket => ticket.status === status)
  }

  get ticketStatus(): typeof TICKET_STATUS {
    return TICKET_STATUS
  }
}
