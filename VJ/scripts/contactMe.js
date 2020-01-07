

var msg = document.getElementById('msg');
var username = document.getElementById('username');
var email = document.getElementById('email');
var nextBtn = document.getElementById('nextBtn');
var submitBtn = document.getElementById('submitBtn');
submitBtn.style.display="none";
submitBtn.disabled=true;
email.style.display="none";
msg.style.display="none";
var counter = 0;


nextBtn.addEventListener("click",function(){
      
        if(counter===0)
      {
      	if (username.value.length!==0)  
      	{
      		email.style.display="inline-block";
            username.style.display="none";
            counter++;
      	}
      	   else
      	   {
                username.placeholder="You forgot me..";
      	   }
      	   
      }
      else
      if(counter===1) 
      {

         if (email.value.length!==0) 
         {
            email.style.display="none";
            msg.style.display="inline-block";
            // this.value="Submit";
            document.getElementById("nextBtn").style.display="none";
            submitBtn.disabled=false;
            submitBtn.style.display="inline-block";
            counter++;
         }
     
      else
      {
      	email.placeholder="You forgot me..";
      }
  }
     
});

submitBtn.addEventListener("click",function(){
       
      alert("Thanks for giving your precious time.I will get in touch with you soon");
});
		




