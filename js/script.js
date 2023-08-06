$(".default_option").click(function(){
    $(".dropdown ul").addClass("active");
  });
  
  $(".dropdown ul li").click(function(){
    var text = $(this).text();
    $(".default_option").text(text);
    $(".dropdown ul").removeClass("active");
  });
  //mega menu
  jQuery(document).ready(function(){
   

    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn(300);
        },
        function() { $('.dropdown-menu', this).fadeOut(300);
    });
   
 
   
});
window.onscroll = ()=>{
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    document.getElementById('nav-vertical').classList.add('d-none');
  } else {
    document.getElementById('nav-vertical').classList.remove('d-none');
  }
 }
 document.getElementById('toggler').addEventListener('click',() =>{
  document.getElementById('nav-vertical').classList.toggle('d-none');
 })
 $(document).ready(function(){
 $('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
});
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    
  });
});
document.getElementById("btn-two").addEventListener('click',()=>{
  document.getElementById('cat-one').classList.add('d-none');
  document.getElementById('btn-two').classList.add('clicked');
  document.getElementById('cat-two').classList.remove('d-none');
});
document.getElementById('box-cart').addEventListener('mouseover',() =>{
  document.getElementById('option').classList.remove('d-none');
  document.getElementById('box-img').classList.add('show-option');
})
document.getElementById('box-cart').addEventListener('mouseout',() =>{
  document.getElementById('option').classList.add('d-none');
  document.getElementById('box-img').classList.remove('show-option');
})
// $('.navbar-vertical .navbar-toggler').on('click', function(){
//   var $this = $(this)
//   var $isShow = $this.parent('.navbar-vertical').hasClass('show')
//   var $isHide = $this.parent('.navbar-vertical').hasClass('hidden')
//   if($isShow){
//     $('.navbar-vertical.show').removeClass('show')
//     $this.parent('.navbar-vertical').addClass('hidden')
//     //console.log($isShow)
//   }
//   else{
//     if($isHide){
//       $('.navbar-vertical.hidden').removeClass('hidden')
//     $this.parent('.navbar-vertical').addClass('show')
//     }
//   }
// #A19C9C
// })

// import React, { useState } from "react";
// function App() {
//   const [inpVal,setInput] = useState('');
//   const [items,setItem] = useState([]);
//   function handleChange(event){
//     const newValue = event.target.value;
//     setInput(newValue);
//   }
//   function handleClick(){
//     setItem(prevItems => {
//       return [...prevItems,inpVal];
//     });
//     setInput("");
//   };
//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input type="text" onChange={handleChange} value={inpVal} />
//         <button onClick={handleClick} >
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {items.map(todo => ( <li>{todo}</li>))};
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;