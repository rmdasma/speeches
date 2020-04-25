import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { Speech } from "../models/Speech"

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  speeches: Array<Speech>;
  onSearchSpeeches: EventEmitter<string> = new EventEmitter();
  onSpeechesChanged: EventEmitter<boolean> = new EventEmitter();
  
  constructor(private datePipe: DatePipe) 
  { 
    this.speeches = [
      new Speech(1, "A man is really alive only when he delights in the good-will of others.", "Jeffery A. Hawkins", "know, how, man, come, never, thinking, try, duty, worth", new Date(this.datePipe.transform(Date.now(), 'yyyy/MM/dd'))),
      new Speech(2, "Generosity wins favor for every one, especially when it is accompanied by modesty.", "Janina J. Ashe", "tell, know, associate, business, made", new Date(this.datePipe.transform(Date.now(), 'yyyy/MM/dd'))),
      new Speech(3, "Certain minds must be allowed their peculiarities.", "Rebekah W. Remley", "only, men, practical, ability, knowing, powers, using, them, moderation, prudence", new Date(this.datePipe.transform(Date.now(), 'yyyy/MM/dd'))),
      new Speech(4, "So obstinately contradictory is man that you cannot compel him to his advantage, yet he yields before everything that forces him to his hurt.", "Jeanette J. Rios", "great, error, take, oneself, less, worth", new Date(this.datePipe.transform(Date.now(), 'yyyy/MM/dd'))),
      new Speech(5, "One need only grow old to become gentler in one’s judgments. I see no fault committed which I could not have committed myself.", "Suzette C. Garibay", "everything, frees, spirit, giving, control, ourselves, ruinous", new Date(this.datePipe.transform(Date.now(), 'yyyy/MM/dd'))),
    ];
  }

  getSpeeches():Array<Speech> {
    return this.speeches;
  }

  addSpeech(speech: Speech) {
    this.speeches.push(speech);
    this.onSpeechesChanged.emit(true);
  }

  editSpeech(speech: Speech) {
    const index: number = this.speeches.indexOf(speech);
    this.speeches[index] = speech;
    this.onSpeechesChanged.emit(true);
  }

  deleteSpeech(speech: Speech) {
    const index: number = this.speeches.indexOf(speech);
    if (index !== -1) {
        this.speeches.splice(index, 1);
    }
    this.onSpeechesChanged.emit(true);
  }
}