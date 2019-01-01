export class GameUtility{


     shuffle(arra1) {
         console.log("Arra1 :"+arra1);
        let ctr = arra1.length, temp, index;
    
    // While there are elements in the array
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }

    checkSessionStorage(){
       if(sessionStorage.getItem("till20_date")==undefined &&
        sessionStorage.getItem("till20_date")==undefined){
            let date=new Date();
            sessionStorage.setItem("till20_date",date.toString());
            sessionStorage.setItem("till20_count","1");
            return true
        }else{
            let date=new Date(sessionStorage.getItem("till20_date"));
            let dateToday=new Date();
            let count=sessionStorage.getItem("till20_count");
            let countNumber=+count;
            if((dateToday>=date) && countNumber<=2 ){
                let UpdatedCount=countNumber+1;
                sessionStorage.setItem("till20_count",UpdatedCount.toString());
                return true;
            }else{
                return false;
            }
            
            
        }

 /*var cookie=this.getCookie("till20");
  if (cookie ==undefined) {
      alert(cookie)
    this.setCookie(1);
      return true;
  }else{
      let dateToday=new Date();
      console.log(cookie);
     let cookieObj=JSON.parse(cookie);
     let date=new Date(cookieObj.till20_date);
     let count=cookieObj.till20_count;
     if(dateToday<date || count>3){
         return false;
     }else{
         this.setCookie(count+1);
     }
  } */
  
       
    }

     setCookie(count) {

      let  cookievalue = "cokieObj";
               
        var date = new Date();
        let cookieObj={"till20_date":date.toString(),
                        "till20_count":count};
        alert(JSON.stringify(cookieObj));                
        document.cookie = "till20=" + JSON.stringify(cookieObj)+";path=/";
        alert("cookie set !!!");
      }
      

     getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
}