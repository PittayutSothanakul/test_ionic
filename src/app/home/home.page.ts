import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  $feedback;

  mDataArray:any[] = [];
  constructor(
    private http:HttpClient
  ) {}
  
  
  onSubmit(data){
    console.log('onSubmitt');
    this.$feedback = 'aa'
    this.http.post<any>('http://localhost:3000/api',data ).subscribe(result=>{
      // alert(JSON.stringify(result));
      this.getFeedback();
    })
  }


  getFeedback(){
    this.http.get<any>('http://localhost:3000/api').subscribe(result =>{
    this.mDataArray = result.data;
    });
  }
  // onClickMe(){
  //   console.log('onClickMee');
    
  // }

  ngOnInit():void{
    this.getFeedback();
  }
}

