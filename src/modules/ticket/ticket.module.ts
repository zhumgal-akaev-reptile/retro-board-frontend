import { NgModule } from '@angular/core';
import { TicketComponent } from './ticket.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TicketDialogModule } from '../ticket-dialog/ticket-dialog.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TicketService } from './ticket.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TicketComponent],
  imports: [
    BrowserModule,
    DragDropModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    TicketDialogModule,
    MatSnackBarModule,
  ],
  providers: [TicketService],
  bootstrap: [TicketComponent]
})
export class TicketModule {}
