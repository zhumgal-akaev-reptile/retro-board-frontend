
export enum TICKET_STATUS {
  I_LIKE = 'I_LIKE',
  I_WISH = 'I_WISH',
  WHAT_IF = 'WHAT_IF'
}

export class Ticket {
  id: number
  title: string
  description: string
  status: TICKET_STATUS
}
