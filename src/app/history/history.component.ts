import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  allUser:any=[];
  user:any;
  
  constructor(private quiz: QuizService) { }

  ngOnInit() {
    this.allUser = this.quiz.getUsers();
    console.log(this.allUser)
    
  }

  

}
