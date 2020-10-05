import { Component, OnInit } from '@angular/core'
import { WebsocketService } from './websocket.service'
import { Ticket, TICKET_STATUS } from '../models/ticket.model'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { groupBy } from '../utils'
import { tick } from '@angular/core/testing'
import { TicketService } from './ticket.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sprint-board';
  public message: TICKET_STATUS

  tickets: Ticket[] = [];

  constructor(
    private webSocketService: WebsocketService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.ticketService.tickets().subscribe(data => {
      this.tickets = data;
    })
    this.webSocketService.emit('msgToServer', TICKET_STATUS.I_LIKE)
    this.webSocketService.listen('msgToClient').subscribe((data: TICKET_STATUS) => {
      this.message = data
    })
  }

  drop({ currentIndex, previousIndex, previousContainer, container }: CdkDragDrop<Ticket[]>) {
    const [item] = previousContainer.data || []
    if (previousContainer === container) {
      moveItemInArray(container.data, previousIndex, currentIndex)
      if (item) previousContainer.data.forEach(ticket => ticket.status = item.status)
    } else {
      transferArrayItem(previousContainer.data, container.data, previousIndex, currentIndex)
    }
  }

  get ticketStatus(): typeof TICKET_STATUS {
    return TICKET_STATUS
  }

  get ticketsGroupedByStatus() {
    return groupBy(this.tickets, 'status');
  }
}
