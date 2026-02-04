
const backgrounds={
 home:'img/main.jpg',
 implants:'img/ripper.jpg',
 facts:'img/street.jpg',
 secrets:'img/alley.jpg',
 gallery:'img/arasaka.jpg'
};

function setBackground(p){
 document.body.style.background=
 `linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.85)),url(${backgrounds[p]||backgrounds.home}) center/cover fixed`;
}

function toggleMusic(){
 let m=document.getElementById('bgm');
 let b=document.getElementById('musicBtn');
 if(m.paused){m.play();b.innerText='🔊 Lizzy Radio';}
 else{m.pause();b.innerText='🔇 Muted';}
}
