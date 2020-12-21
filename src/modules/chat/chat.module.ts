import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { NbButtonModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { MessengerModule } from '../messenger/messenger.module';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    NbLayoutModule,
    NbInputModule,
    NbButtonModule,
    MessengerModule
  ],
  providers: [],
  bootstrap: [ChatComponent]
})
export class ChatModule {}
