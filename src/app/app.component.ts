import { Component, OnInit } from '@angular/core'
import { WebsocketService } from './websocket.service'
import { Ticket, TICKET_TYPES, TicketForm } from '../models/ticket.model';
import { CdkDragDrop } from '@angular/cdk/drag-drop'
import { groupBy } from '../utils'
import { TicketService } from './ticket.service'
import { MatDialog } from '@angular/material/dialog';
import { TicketDialogComponent, TicketDialogData } from '../ticket-dialog/ticket-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserverService } from './breakpoint-observer.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
