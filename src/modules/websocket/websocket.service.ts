import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs'
import Socket = SocketIOClient.Socket
import * as io from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: Socket
  private readonly url: string = 'ws://localhost:3000'

  constructor() {
    this.socket = io(this.url)
  }

  listen(eventName: string) {
    return new Observable((obs) => {
      this.socket.on(eventName, (data) => {
        obs.next(data)
      })
    })
  }

  emit(eventName: string, data: any ) {
    this.socket.emit(eventName, data)
  }
}
