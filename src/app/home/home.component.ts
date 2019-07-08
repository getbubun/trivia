import { Component, OnInit } from '@angular/core';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any;
  intro:boolean;
  quiz1:boolean;
  quiz2 :boolean;
  hidden = false;
  allData:any =[];

  constructor() { }
  

  ngOnInit() {
    this.intro= true;
  }

 getIntro(){
   this.intro = false;
  this.quiz1 = true;

  let userData = new User();
  
}


getQuiz1(){
  this.quiz1 = false;
  this.quiz2 = true;
}

onSubmit(){

  

  location.reload();
}
}
