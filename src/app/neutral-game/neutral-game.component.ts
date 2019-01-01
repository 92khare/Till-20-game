import { Component, OnInit } from '@angular/core';
import {GameUtility} from '.././gameUtility';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neutral-game',
  templateUrl: './neutral-game.component.html',
  styleUrls: ['./neutral-game.component.css']
})
export class NeutralGameComponent implements OnInit {

 
   constructor(private router:Router){

  }

  title = 'Till20';
  onLoad:boolean=false;
  loaderNumber:number=5;
  loadWatcher:boolean=true;
  loaderOver:boolean=false;
  randomNumberArray:number[]=[];
  nextNumberArray:number[]=[];
  startNumber:number=1;
  endNumber:number;
  systemNumber:number;
  modalMsg:string;
  tryAgainMsg:string;
  secondsleft:number;
  globalIntervalId:any;
  

  ngOnInit(){
   /* var checkSession=new GameUtility();
   if(!checkSession.checkSessionStorage()){
      this.openNav();
      this.modalMsg="Seems like you are over with the free attempts of today"
                    +",  Please try again tomorrow";
                 
    }*/
  }

  beginGame(){
    
    this.onLoad=true;
    
    let intervalId = setInterval(() => {
      this.loaderNumber = this.loaderNumber - 1;
      console.log(this.loaderNumber)
      if(this.loaderNumber ==0){ 
      clearInterval(intervalId)
      this.setRandonArray(1);
      this.logicStart(1);
      }
  }, 1000)
  
}


logicStart(startNum){
  
  this.loaderOver=true;
  
 var randomNumber=Math.random() * 3;
  var randomIndex=Math.floor(randomNumber) ;
   if(this.randomNumberArray.includes(20)){
    this.systemNumber=20;
    this.openNav();
    this.modalMsg="You Lost :( ...Try Again !!!!!"
    this.tryAgainMsg="Try Again ??";
  }
  else if(this.randomNumberArray.includes(16)){
   this.systemNumber=16;
  
  }else{
    this.systemNumber=this.randomNumberArray[randomIndex];
  }
  
  this.setNextnumberArray(this.systemNumber);
  this.timerStart();
}




setRandonArray(numberInput){
  if(numberInput==1){
    this.randomNumberArray=[1,2,3];
  }else{  
let start=numberInput+1;
let end=numberInput+3;
for(var i=start;i<=end;i++){
  this.randomNumberArray.push(i);
}  
}



}

setNextnumberArray( numInput){
  console.log(numInput);
let start=numInput+1;
let end=numInput+3;
for(var i=start;i<=end;i++){
  this.nextNumberArray.push(i);
} 
let shuffleArray=new GameUtility(); 
this.nextNumberArray=shuffleArray.shuffle(this.nextNumberArray);

}


selectNumber(selectedNumber){
  clearInterval(this.globalIntervalId);
  this.nextNumberArray=[];
  this.randomNumberArray=[];
if(selectedNumber==20){
  this.openNav();
  this.modalMsg="You Won Congrats!!!!!!" 
  this.tryAgainMsg="Play Again ?? "
  return false;
}if(selectedNumber>20){
  this.openNav();
  this.modalMsg="Oops you missed 20 there...you lost !!!!!"
  this.tryAgainMsg="Try Again ??";
  return false;
}
this.setRandonArray(selectedNumber);
this.logicStart(selectedNumber);


}


timerStart(){
  this.secondsleft=3;
  this.globalIntervalId = setInterval(() => {
    this.secondsleft = this.secondsleft - 1;
    
    if(this.secondsleft ==0){ 
    clearInterval(this.globalIntervalId);
    this.secondsleft=0;
    this.openNav();
  this.modalMsg="Oops you ran out of time :(  !!!!!"
  this.tryAgainMsg="Try Again ??";
  
    }
}, 1500)

}
  

/*Modal Open and close logics*/


openNav(){
  document.getElementById("resultOverlay").style.width = "100%";
}
tryAgain(){
  
  window.location.reload();
}
}
