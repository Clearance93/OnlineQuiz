import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class OnlinetestService {

  quizzes: Quiz[] = [
    {
      question: 'HTML stand for Hyper Text Makeup Language?',
      answer: [
        {option: 'False', correct: true},
        {option: 'True', correct: false},
        
      ]
    },
    {
      question: 'Hard work and determination is one of the best skill needed to a full stack web dev?',
      answer: [
        {option: 'True', correct: true},
        {option: 'False', correct: false},
      ]
    },
    {
      question: 'SQL, Mongodb are one of the fron-end languages?',
      answer: [
        {option: 'True', correct: false},
        {option: 'False', correct: true},
      ]
    },
    {
      question: ' Full Stack Web Developers work with a multitude of languages',
      answer: [
        {option: 'True', correct: true},
        {option: 'false', correct: false},
      ]
    },
    {
      question: 'What does XML stand for?',
      answer: [
        {option: 'eXtensible Multiple Langauge', correct: false},
        {option: 'eXtensible Markup langauge', correct: true},
      ]
    },
    {
      question: 'HTML is one of the the front-end languages language?',
      answer: [
        {option: 'true', correct: true},
        {option: 'false', correct: false},
      ]
    },
    {
      question: 'What is the main primary role of Data Base To store data in the background',
      answer: [
        {option: 'false', correct: false},
        {option: 'true', correct: true},
      ]
    },
    {
      question: "Full stack web development doesn't have to know the hardware of the computer?",
      answer: [
        {option: 'true', correct: false},
        {option: 'False', correct: true},
      ]
    },
    {
      question: 'A full stack developer is also known as an amalgation of langauges?', 
      answer: [
        {option: 'True', correct: true},
        {option: 'False', correct: false}
      ]
    },
    {
      question: 'Pair Programming is one of the core elements of extreme programming which involves two developers to work on the same terminal', 
      answer: [
        {option: 'True', correct: true},
        {option: 'False', correct: false}
      ]
    }
  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}
