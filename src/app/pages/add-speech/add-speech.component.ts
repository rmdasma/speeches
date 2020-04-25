import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Speech } from "src/app/models/Speech";
import { SpeechService } from "src/app/services/speech.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-speech',
  templateUrl: './add-speech.component.html',
  styleUrls: ['./add-speech.component.css']
})
export class AddSpeechComponent implements OnInit {
  speech: Speech;
  constructor(private speechService: SpeechService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    this.speech = new Speech(-1, "Speech content shown here", "Author", "Subject area keywords", new Date(this.datePipe.transform(Date.now(), 'yyyy/MM/dd')));
  }

  saveSpeech(speech: Speech) {
    let nextIndex = Math.max.apply(Math, this.speechService.getSpeeches().map(function(o) { return o.id; }));
    speech.id = nextIndex + 1;
    console.log(speech.id);
    this.speechService.addSpeech(speech);
    this.router.navigateByUrl('/home');
  }
}