import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Ticket } from '../models/ticket.model'

@Injectable()
export class TicketService {
  constructor(private http: HttpClient) {}

  tickets() {
    return this.http.get<Ticket[]>('http://localhost:3000/tickets');
  }
}
