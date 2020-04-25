import { Component, OnInit } from '@angular/core';
import { SpeechService } from "src/app/services/speech.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private speechService: SpeechService) { }

  ngOnInit(): void {
  }

  onSearchChange(event){
    this.speechService.onSearchSpeeches.emit(event);
  }
}