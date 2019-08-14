import { Component, OnInit, ElementRef } from '@angular/core';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { User } from '../user';
import { QuizService } from '../quiz.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  data:any;
  user;
  name;
  intro:boolean;
  quiz1:boolean;
  quiz2 :boolean;
  hidden = false;
  allUser:any=[] ;
  checkedIndex:number;
  checked:boolean;
  target: boolean=false;
  //arr =[ {id:'customCheck1',checked:false},{id:'customCheck2',checked:false},{id:'customCheck3',checked:false},{id:'customCheck4',checked:false}]
  idArr=[];
  constructor(private quiz: QuizService) { 
    this.user=new User();
  }
  

  ngOnInit() {
    this.intro= true;
  }

 getIntro(){
   
  this.intro = false;
  this.quiz1 = true;
  this.user.name=this.name;
  this.user.quiz={};

  
}

getAnswer(e){
  this.checkedIndex=e.target.id;
    this.user.quiz['quiz1']=e.target.form[0].labels[0].innerText;
}

/* isChecked(e){
  let index=null;
  // for(let i=0;i<this.arr.length;i++){
    
  //   if(this.arr[i].id==e.target.id)
  // {
  //   index=i;
  //   break;
  // }
  // }
  this.arr.forEach((value,i)=>{
    if(value.id === e.target.id){
      index = i;
    }
  })
  this.arr[index].checked=e.target.checked;
  if(this.checkChecked(this.arr,e.target))
  this.checked = true;
  else
  this.checked = false;

}
checkChecked(arr,target){
  let len=0;
  arr.forEach(e => {
    if(e.checked)
    len++;
    
  });
  return len>0;
} */

isChecked(e){
  if(e.target.checked === true){
    this.idArr.push(e.target.id)
  }else{
    this.idArr.pop();
  }

}
getQuiz1(){
  this.quiz1 = false;
  this.quiz2 = true;
}

onSubmit(form:any){
    this.user.quiz['quiz2']=[];
    for(let key in form.form.controls){
      if(form.form.controls[key].valid)
      this.user.quiz['quiz2'].push(key); 
    }
    this.user.date = new Date();
    
     this.quiz.getAllUser(this.user);
    //if(res !== "No records found !")
      // this.allUser.push(res);
      // this.allUser.push(this.user)
      // console.log(this.allUser)
      // this.localStoreUser(this.allUser)

      
    
    

    

     setTimeout(()=>{
      location.reload();
    },1000)
  
}

// localStoreUser(allUser){
//   const x=JSON.stringify(allUser)
//   localStorage.setItem('user', x);
//   }
}
