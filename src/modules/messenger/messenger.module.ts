import { NgModule } from '@angular/core';
import { MessengerComponent } from './messenger.component';
import { NbCardModule, NbIconModule, NbInputModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [MessengerComponent],
  imports: [
    NbCardModule,
    NbInputModule,
    NbEvaIconsModule,
    NbIconModule,
    NbUserModule
  ],
  providers: [],
  exports: [
    MessengerComponent
  ],
  bootstrap: [MessengerComponent]
})
export class MessengerModule {}
