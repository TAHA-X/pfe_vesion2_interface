// responsive navbar
var for_responsive_navbar = document.getElementById("for_responsive_navbar");
var close_navbar = document.getElementById("close_navbar");
var list_navbar = document.getElementById("list_navbar"); 
var logo = document.getElementById("logo");
list_navbar.addEventListener("click",()=>{
    for_responsive_navbar.style.transform = "translateY(0px)";
    list_navbar.style.display = "none";
    close_navbar.style.display = "block";
    logo.style.color="black";
})
close_navbar.addEventListener("click",()=>{
    for_responsive_navbar.style.transform = "translateY(-100%)";
    close_navbar.style.display = "none";
    list_navbar.style.display = "block";
    logo.style.color="white";
})


window.onload = ()=>{
    changeBackgroundHomePage();
}
window.onscroll = ()=>{
    var header = document.getElementsByTagName("header");
    var logo = document.getElementById("logo");
    var links_nav = document.querySelectorAll(".link_nav");
    if(window.scrollY > 200){
        header[0].style.backgroundColor = "white";
        header[0].style.padding = "0px 80px";
        logo.style.color="black";
        links_nav.forEach(l=>{
            l.style.color="black";
        })
   }
   if(window.scrollY <= 200){
    header[0].style.backgroundColor = "transparent";
    header[0].style.padding = "25px";
    logo.style.color = "white";
    links_nav.forEach(l=>{
        l.style.color="white";
    })
    
}
}
function changeBackgroundHomePage(){
    var section1_contents = document.querySelectorAll(".section1_content");
    var i =0;
    section1_contents[i].classList.add("active");
    setInterval(()=>{
       if(section1_contents.length==i){
          i=0;
       }  
       section1_contents.forEach(s=>{
           s.classList.remove("active")
       })  
       section1_contents[i].classList.add("active");
       i++;
    },4000);
}
if(window.scrollY > 100){
    console.log("test")
}
// section 3 (video)
var youtube_video = document.getElementById("youtube_video");
var video = document.getElementById("video");
var close_video = document.getElementById("close_video");
youtube_video.addEventListener("click",()=>{
    video.style.display="block";
    close_video.style.display="block";
})
close_video.addEventListener("click",()=>{
    video.style.display="none";
    close_video.style.display="none";
})