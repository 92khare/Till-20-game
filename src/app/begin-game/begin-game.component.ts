import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-begin-game',
  templateUrl: './begin-game.component.html',
  styleUrls: ['./begin-game.component.css']
})
export class BeginGameComponent  {

   constructor(private router:Router){

  }
  title = 'Till20';
  modalMsg="Till20 is a simple number game  in which you have to play against the computer "+
            ", After the computer has choosen a start digit, you have to choose a number amongst "+
            "the next 3 digits, computer does the same after you have choosen a number , \"the one who reaches the number 20 first is the winner !!!!\" "
  modalClose:string;
  sessionTrue:boolean=true;

 /*Modal Open and close logics*/
closeNav(){
  document.getElementById("myOverlay").style.width = "0%";
}

closeTab(){
  var conf=confirm("Are you sure, you want to close this tab?");
		if(conf==true){
			close();
		}
}

openNav(){
  document.getElementById("myOverlay").style.width = "100%";
}  

nav(){
 
this.router.navigate(['/','game'])
}

}
