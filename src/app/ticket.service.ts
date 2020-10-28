import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Ticket, TICKET_TYPES, TicketForm } from '../models/ticket.model';
import { Observable } from 'rxjs';

@Injectable()
export class TicketService {
  private baseURL = 'http://localhost:3000/tickets'
  constructor(private http: HttpClient) {}

  tickets() {
    return this.http.get<Ticket[]>(this.baseURL);
  }

  changeStatus(id: number, status: TICKET_TYPES) {
    return this.http.put(`${this.baseURL}/changeStatus/${id}`, { status });
  }

  create(ticket: TicketForm): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.baseURL}/create`, ticket);
  }
}
