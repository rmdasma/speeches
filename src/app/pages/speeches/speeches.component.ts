import { Component, OnInit } from '@angular/core';
import { Speech } from "src/app/models/Speech";
import { SpeechService } from "src/app/services/speech.service"

@Component({
  selector: 'app-speeches',
  templateUrl: './speeches.component.html',
  styleUrls: ['./speeches.component.css']
})
export class SpeechesComponent implements OnInit {
  speeches: Array<Speech>;
  selectedSpeech: Speech;

  constructor(private speechService: SpeechService) { }

  ngOnInit(): void {
    this.speeches = this.speechService.getSpeeches();
    this.selectedSpeech = this.speeches[0];
    this.speechService.onSearchSpeeches.subscribe((data) => {
      if (data != null) {
        this.searchValues(data, this.speeches);
      }
    });
    this.speechService.onSpeechesChanged.subscribe((data) => {
      if (data === true) {
        this.speeches = this.speechService.getSpeeches();
      }
    });
  }

  searchValues(term: string, source: Array<Speech>) {
    source.forEach(element => {
      for (let i = 0; i < Object.values(element).length; i++) {
        if (String(Object.values(element)[i]).toUpperCase().includes(term.toUpperCase())) {
          element.visible = true;
          break;
        }
        else {
          element.visible = false;
        }
        console.log(element);
      }
    });
  }

  selectSpeech(speech: Speech) {
    this.selectedSpeech = speech;
  }

  editSpeech(speech: Speech) {
    this.speechService.editSpeech(speech);
  }

  deleteSpeech(speech: Speech) {
    this.speechService.deleteSpeech(speech);
    if (this.speeches.length > 0) {
      this.selectedSpeech = this.speeches[0];
    }
    else {
      this.selectedSpeech = null;
    }
  }
}