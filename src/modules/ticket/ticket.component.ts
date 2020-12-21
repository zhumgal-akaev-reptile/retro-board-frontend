import { Component, OnInit } from '@angular/core';
import { Ticket, TICKET_TYPES } from './ticket.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebsocketService } from '../websocket/websocket.service';
import { TicketService } from './ticket.service';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserverService } from '../breakpoint-observer/breakpoint-observer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { groupBy } from '../../utils';
import { TicketDialogComponent, TicketDialogData } from '../ticket-dialog/ticket-dialog.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  tickets: Ticket[] = [];
  private readonly ticketForm: FormGroup;

  constructor(
    private webSocketService: WebsocketService,
    private ticketService: TicketService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private breakpointObserverService: BreakpointObserverService,
    private snackBar: MatSnackBar,
  ) {
    this.ticketForm = formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      status: [null, Validators.required],
    })
  }

  ngOnInit(): void {
    this.updateTickets();
  }

  async drop({ previousContainer, container }: CdkDragDrop<Ticket[]>, status: TICKET_TYPES) {
    const [item] = previousContainer.data || [];
    if (item && previousContainer !== container) {
      await this.ticketService.changeStatus(item.id, status).toPromise();
      await this.updateTickets();
    }
  }

  get ticketStatus(): typeof TICKET_TYPES {
    return TICKET_TYPES
  }

  get ticketsGroupedByStatus() {
    return groupBy(this.tickets, 'status');
  }

  updateTickets() {
    this.ticketService.tickets().subscribe(data => {
      this.tickets = data;
    })
  }

  async saveTicket() {
    try {
      await this.ticketService.create(this.ticketForm.getRawValue()).toPromise();
      await this.updateTickets();
    } catch (e) {
      this.snackBar.open('Something got wrong during the request', null, {
        panelClass: ['snack-error'],
        // duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      })
    }
  }

  openDialog() {
    this.dialog.open<TicketDialogComponent, TicketDialogData>(TicketDialogComponent,
      {
        maxWidth: '100%',
        width: this.breakpointObserverService.isMobile ? '100%' : '350px',
        height: this.breakpointObserverService.isMobile ? '100%' : undefined,
        data: {
          save: () => this.saveTicket(),
          form: this.ticketForm
        }
      }
    );
  }
}
