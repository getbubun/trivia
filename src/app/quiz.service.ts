import { Inject,Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


const STORAGE_KEY = 'local_user';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  allUser:any;
  message:string;
  
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  getAllUser(user){
    // if(JSON.parse(localStorage.getItem('user'))){
    //  return this.allUser = JSON.parse(localStorage.getItem('user'));
    //   console.log(this.allUser);
    // } else{
    //  return this.message = "No records found !"
    // }
     const allUser = this.storage.get(STORAGE_KEY) || [];

     allUser.push(user);

     this.storage.set(STORAGE_KEY, allUser)
    
     console.log(this.storage.get(STORAGE_KEY) || 'No Record Found')
    
  }

  getUsers(){
    return this.storage.get(STORAGE_KEY) || [];
  }
}
