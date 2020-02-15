import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: [];
  chatInputMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
