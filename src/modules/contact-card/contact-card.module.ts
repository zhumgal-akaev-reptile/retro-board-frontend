import { NgModule } from '@angular/core';
import { ContactCardComponent } from './contact-card.component';
import { NbCardModule, NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [ContactCardComponent],
  imports: [
    NbCardModule,
    NbUserModule
  ],
  providers: [],
  exports: [
    ContactCardComponent
  ],
  bootstrap: [ContactCardComponent]
})
export class ContactCardModule {}
