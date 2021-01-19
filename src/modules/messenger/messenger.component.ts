import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket/websocket.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  messageControl = new FormControl('', Validators.required)
  wsMessage: string = ''

  constructor(private wsService: WebsocketService) { }

  ngOnInit(): void {
    this.wsService.listen('msgToClient').subscribe(value => {
      this.wsMessage = value.toString()
    })
  }

  handleMessage() {
    this.wsService.emit<string>('msgToServer', this.messageControl.value)
    this.messageControl.setValue('')
  }

}
