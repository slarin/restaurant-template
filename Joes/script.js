document.onscroll = function(){
  let rj = document.getElementById('server');
  if(document.documentElement.clientWidth < 768){
    if (/*document.body.scrollTop*/ window.pageYOffset > 1300){
      console.log('hippie'); 
      let select = rj.querySelectorAll('.dish') ;
      select[0].classList.add('contact');
      select[2].classList.add('contact');
    }
  }else if(document.documentElement.clientWidth > 768){
    if (window.pageYOffset > 800){
      console.log('hippie'); 
      let select = rj.querySelectorAll('.dish') ;
      select[0].classList.add('contact');
      select[2].classList.add('contact');
    }
  }
}

/*function pizaz(){
  let x = document.getElementById('nav-links');
  x.classList.toggle('active');
  /*if(!x.style.display || x.style.display==="none"){
    x.style.display="block";
  }else{
    x.style.display="none";
  //}
}*/

//date function
window.onload = function (){
  today = new Date();
  thisYear = today.getFullYear();
  let changer = document.getElementById('year');
  changer.innerHTML= thisYear;
}

/*window.onload = function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}*/