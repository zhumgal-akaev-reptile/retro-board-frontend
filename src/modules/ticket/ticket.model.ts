
export enum TICKET_TYPES {
  I_LIKE = 'I_LIKE',
  I_WISH = 'I_WISH',
  WHAT_IF = 'WHAT_IF'
}

export class Ticket {
  id: number
  title: string
  description: string
  status: TICKET_TYPES
}

export class TicketForm {
  title: string
  description: string
  status: TICKET_TYPES
}
