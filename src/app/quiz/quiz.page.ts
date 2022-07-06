import { Component, OnInit } from '@angular/core';
//import { GameService } from '../services/game.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  vector;

  question = "Question";
  option1 = "Option 1";
  option2 = "Option 2";
  option3 = "Option 3";
  option4 = "Option 4";

  total_questions = 15;
  round = 0;
  progress = 0.0; // shows the progress bar
  status = 0; // 0 - config / 1 - game / 2 - end-game

  pepperoni = false;
  dependencies = true;

  constructor(//private game: GameService
  ) { }

  ngOnInit() {
    //this.vector = this.game.vector()
  }

  

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  startGame() {
    this.status = 1;
  }

  endGame() {
    this.round = 0;
    this.progress = 0.0;
    this.status = 2;
  }

  choseOption(n) {
    console.log ("Option " + n);
    if(this.round < this.total_questions-1) {
      this.round++;
      this.progress = this.round / this.total_questions;
      //console.log(this.round + ' / ' + this.total_questions + ' = ' + this.progress);
      //this.question = this.vector[this.round].name;
    }
    else {
      this.endGame();
    }
  }

}
