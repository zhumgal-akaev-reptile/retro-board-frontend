import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { TicketService } from './ticket.service'
import { HttpClientModule } from '@angular/common/http'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TicketDialogModule } from '../ticket-dialog/ticket-dialog.module';
import { BreakpointObserverService } from './breakpoint-observer.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    TicketDialogModule,
    MatSnackBarModule,
  ],
  providers: [TicketService, BreakpointObserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
