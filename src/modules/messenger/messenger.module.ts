import { NgModule } from '@angular/core';
import { MessengerComponent } from './messenger.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [MessengerComponent],
  imports: [
    NbCardModule,
    NbInputModule,
    NbEvaIconsModule,
    NbIconModule,
    NbUserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NbButtonModule
  ],
  providers: [],
  exports: [
    MessengerComponent
  ],
  bootstrap: [MessengerComponent]
})
export class MessengerModule {}
