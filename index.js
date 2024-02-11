var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname)
{
 for (tablink of tablinks)
 {
    tablink.classList.remove("active-link");
 }
 for (tabcontent of tabcontents)
 {
    tabcontent.classList.remove("active-tab");
 }
 
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}


const currentYear = new Date().getFullYear();; 
var curryear = document.getElementById("copy")
curryear.innerHTML = "Copyright  " + currentYear;


let data = "Guruprasad"
let output = '';
var title = document.getElementById("gudu")
console.log(title);
for(let i = 0; i < data.length; i++) {
  output = output.concat(data[i]);

  setTimeout(() => {
   
     title.innerHTML = output
  }, 1000);
}
 var sidemenu = document.getElementById("side-menu")
 function openmenu ()
 {
   sidemenu.style.right = "0";

 }
 function closeMenu ()
 {
   sidemenu.style.right = "-200px";

 }

 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz-nIuX_Jzg5Q36r0a7Lvv0DmKOv6tnMad-yd7BpF7wgkWwWyR9f3JyL3d_oszx4Vuf/exec'
  const form = document.forms['submit-to-google-sheet']
  const Msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         Msg.innerHTML = "Message Sent Successfully";
         setTimeout(function()
         {
            Msg.innerHTML= "";
         },4000)
         form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

