import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TICKET_TYPES } from '../models/ticket.model';
import { FormGroup } from '@angular/forms';

export interface TicketDialogData {
  save: () => Promise<void>
  form: FormGroup
}

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss']
})
export class TicketDialogComponent {

  typeOptions: { label: string, value: string }[] = [
    {
      label: 'I like',
      value: TICKET_TYPES.I_LIKE
    },
    {
      label: 'I wish',
      value: TICKET_TYPES.I_WISH
    },
    {
      label: 'What if',
      value: TICKET_TYPES.WHAT_IF
    }
  ]

  constructor(
    public dialogRef: MatDialogRef<TicketDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public ticketForm: TicketDialogData,
  ) { }

  close() {
    this.dialogRef.close();
  }

  async submit() {
    await this.ticketForm.save();
    this.close();
  }

  get form(): FormGroup {
    return this.ticketForm.form;
  }

}
