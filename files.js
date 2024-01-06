// Question-1
    document.getElementById("btn1").addEventListener('click',function(){
    document.getElementById('colorselect').removeChild(document.getElementById('colorselect').lastElementChild);
});

// Question-2 
function changetextcolor(){
    let textcolor = document.getElementById('colorSelect').value;
    document.getElementById('para1').style.color=textcolor;
}

// Question-3
function getvalues(){
    const firstName = document.getElementById('fname').value
    const lastName = document.getElementById('lname').value
    console.log('First name : ', firstName);
    console.log('Last name  : ', lastName);
}

//Question-4
function sphere(){
    var volume;
    var radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
    return false;
   }
   window.onload = document.getElementById('Form1').onsubmit = sphere;

   //Question-5
   document.getElementById('imgbtn').addEventListener('click',changeImage)

   function changeImage(){
       document.getElementById('imgs').src="http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
   }

   //Question-6
   function tap(){
    window.open('https://www.robotics-world-fze.com/');
  }

  //Question-7
  function redirect(){
    window.location.href='https://stackoverflow.com/';
 }

 //Question-8
 function extract(){
    const protocol = window.location.protocol; 
    const host = window.location.hostname;
    const para = new URLSearchParams(window.location.search);
    console.log("Protocol is " + protocol,"Host name is " + host, "parameter is " + para);
 }

 //Questioin-9
 function reload(){
    location.reload();
}

//Question-10 
function screensize () {
    document.getElementById("height&width").innerHTML="Screen width is "+screen.width + " Screen height is "+screen.height
 };

 //Question-10
 const counter=()=>{
    let counter =10;
    let interval = setInterval(counting,1000)
    function counting(){
        if(counter==0){
        clearInterval(interval);
          alert("counter ends")
        }else{
            counter--;
            counting_value.innerText = counter;
        }
    }
}