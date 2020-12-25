import { NgModule } from '@angular/core';
import { ChatPageComponent } from './chat-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NbButtonModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { MessengerModule } from '../messenger/messenger.module';
import { ContactCardModule } from '../contact-card/contact-card.module';

@NgModule({
  declarations: [ChatPageComponent],
  imports: [
    BrowserModule,
    NbLayoutModule,
    NbButtonModule,
    MessengerModule,
    NbInputModule,
    NbIconModule,
    ContactCardModule
  ],
  providers: [],
  bootstrap: [ChatPageComponent]
})
export class ChatPageModule {}
