import { Component, OnInit } from '@angular/core';
import { OnlinetestService } from '../onlinetest.service';
import { Quiz } from '../quiz.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  quizzes: Quiz[] = [];

  currentQuiz = 0
  answerSelected = false;
  correctAnswer = 0;
  incorrectAnswer = 0;

  randomize!: number;

  results = false;



  constructor(private quizService: OnlinetestService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
  }

  onAnswer(option: boolean){
    this.answerSelected = true;
    setTimeout(() => {
      this.currentQuiz++;
      // this.randomize = Math.floor(Math.random() * this.quizzes.length)
      this.answerSelected = false;
    }, 1000);

    if(option){
      this.correctAnswer++;
    }
    else{
      this.incorrectAnswer++;
    }
  }

  showResults(){
    this.results = true;
  }

}


