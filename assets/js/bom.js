const reloadIcon = document.querySelector('.fa');   

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);


// Reload Page Function 
function reloadPage() {
    location.reload();
}







/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 


Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
let Href = document.querySelector('.Href');
let Protocol = document.querySelector('.Protocol');
let Host = document.querySelector('.Host');
let Port = document.querySelector('.Port');
let Hostname = document.querySelector('.Hostname');



let Appname = document.querySelector('.Appname');
let Appversion = document.querySelector('.Appversion');
let Platform = document.querySelector('.Platform');
let Language = document.querySelector('.Language');
let CookieEnabled = document.querySelector('.CookieEnabled');

let Height = document.querySelector('.Height');
let Width = document.querySelector('.Width');
let PixelDepth = document.querySelector('.PixelDepth');

let Length = document.querySelector('.Length');
let State = document.querySelector('.State');



Href.innerText = location.href;
Protocol.innerText = location.protocol;
Host.innerText = location.host;
Port.innerText = location.port;
Hostname.innerText = location.hostname;


Appname.innerText = location.appname;
Appversion.innerText = location.appversion;
Platform.innerText = location.platform;
Language.innerText = location.language;
CookieEnabled.innerText = location.cookieEnabled;

Height.innerText = screen.height;
Width.innerText = screen.width;
PixelDepth.innerText = screen.pixelDepth;

Length.innerText = window.history.length;
State.innerText = window.history.state;






// Display the BOM Information on the innerHTML of the elements