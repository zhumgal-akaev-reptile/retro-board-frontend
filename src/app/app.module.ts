import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { BreakpointObserverService } from '../modules/breakpoint-observer/breakpoint-observer.service';
import { TicketModule } from '../modules/ticket/ticket.module';
import { BrowserModule } from '@angular/platform-browser';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ChatPageModule } from '../modules/chat-page/chat-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    TicketModule,
    ChatPageModule,
  ],
  providers: [BreakpointObserverService, NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
