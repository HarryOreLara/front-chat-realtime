import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  text = ""
  chats: any[] =[];

  constructor(private chatService: ChatService){}

  ngOnInit(): void {
    this.chats = this.chatService.chats;
  }

  sendMessage(){
    let messageInfo = {
      text: this.text,
      messageType: 1
    };

    this.chatService.sendMessage(messageInfo);
    this.text = "";
  }
}
