import { NgModule } from '@angular/core';
import { MessengerComponent } from './messenger.component';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [MessengerComponent],
  imports: [
    NbCardModule
  ],
  providers: [],
  exports: [
    MessengerComponent
  ],
  bootstrap: [MessengerComponent]
})
export class MessengerModule {}
