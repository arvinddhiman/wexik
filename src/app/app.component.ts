import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showLoader: boolean;

  constructor(
      private loaderService: LoaderService,
      private _chatService: ChatService
  ){}

  ngOnInit()
  {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
}
