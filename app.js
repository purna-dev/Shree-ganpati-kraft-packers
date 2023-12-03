import * as data from './data.json' assert {
    type: "json"
  };
const sec_img = document.querySelector('section .sec_r');
const product_s = document.querySelector('.pro_sec .p_b');
console.log(product_s)

function show() {

    let ran = Math.floor(Math.random() * 9 + 1)
    sec_img.style.background = `url('./img/new/${ran}.webp')`;
    sec_img.style.backgroundPosition = `center`;
    sec_img.style.backgroundSize = `cover`;
    sec_img.style.backgroundRepeat = 'no-repeat';




    // console.log('show')
    setTimeout(show, 1500);

}
show()

const navbar = document.getElementById('navbar')
// $(document).ready(function () {
//     $(document).scroll(function () {
//         var st = $(this).scrollTop();
//         if (st > 200) {
//             $("navbar").addClass('fixed');
//         } else {
//             $("navbar").removeClass('fixed');
//         }
//     });
// });
window.onscroll=()=>{
    let y =  window.pageYOffset;
    if(y>80){
        navbar.classList.add('fixed')
    }else{
        navbar.classList.remove('fixed')

    }
}


function products(){

    data.default.forEach((e, i) => {
        console.log(i)

        if(i<12){

            const card = document.createElement('div');
            card.setAttribute('class', 'card')
            const img_p = document.createElement('img');
            const p = document.createElement('p');
            // const span = document.createElement('span');
            const span1 = document.createElement('p');
            span1.setAttribute('class', 'span_s')
          
          
          
            img_p.setAttribute('src', e.pro_img)
            p.textContent = e.pro_name + ' bag';
            // span.textContent = `₹ ${e.price}.00`;
            span1.textContent = e.category;
          
            card.append(img_p, p, span1)
            product_s.appendChild(card)
        }
      
})

}
products()



const catogery = document.querySelectorAll('.pro_sec .p_h .p_c div span')
function myFilter() {
    catogery.forEach((e, i) => {
      // e.parentElement.classList.add('active')
  
      e.parentElement.addEventListener('click', () => {
  
        catogery.forEach((e,i)=>{
          console.log(e)
          e.parentElement.classList.remove('active_sec')
  
        })
  
        if (e.textContent === 'All Categories') {
          console.log(e.parentElement)
          console.log('true')
          e.parentElement.classList.add('active_sec');
         
  
          data.default.forEach((e, i) => {
            // console.log(document.querySelectorAll('.pro_sec .p_b .card .span_s')[i].textContent)
            document.querySelectorAll('.pro_sec .p_b .card')[i].style.display = 'block';
            gsap.from(document.querySelectorAll('.pro_sec .p_b .card')[i], {
              opacity:0,
              translateX:'5%',
              duration: .8,
              stagger:0.5,
              ease: Power4.inOut,
            })
  
          })
  
  
  
        } else if (e.textContent === 'Non Woven') {
          console.log(e)
          // catogery.forEach((ele,index)=>{
          //   if(ele.textContent === 'Non woven'){
          //     e.parentElement.classList.remove('active_sec')
  
          //   }
          // })
          e.parentElement.classList.add('active_sec')
         
         
  
  
          data.default.forEach((e, i) => {
            // console.log(document.querySelectorAll('.page2 .products_s .card .span_s')[i].textContent)
  
            if (document.querySelectorAll('.pro_sec .p_b .card .span_s')[i].textContent === 'non woven bag') {
              document.querySelectorAll('.pro_sec .p_b .card')[i].style.display = 'block';
              gsap.from(document.querySelectorAll('.pro_sec .p_b .card')[i], {
                opacity:0,
                translateX:'5%',
                duration: .8,
                stagger:0.5,
                ease: Power4.inOut,
              })
            } else {
              document.querySelectorAll('.pro_sec .p_b .card')[i].style.display = 'none';
  
            }
  
          })
  
  
        } else if (e.textContent === 'Cotton') {
          console.log('cotton')
          e.parentElement.classList.add('active_sec')
  
          data.default.forEach((e, i) => {
            // console.log(document.querySelectorAll('.page2 .products_s .card .span_s')[i].textContent)
  
            if (document.querySelectorAll('.pro_sec .p_b .card .span_s')[i].textContent === 'cotton bag') {
             
              
              document.querySelectorAll('.pro_sec .p_b .card')[i].style.display = 'block';
              gsap.from(document.querySelectorAll('.pro_sec .p_b .card')[i], {
                opacity:0,
                translateX:'5%',
                duration: .8,
                stagger:0.5,
                ease: Power4.inOut,
              })
            } else {
              document.querySelectorAll('.pro_sec .p_b .card')[i].style.display = 'none';
  
            }
  
          })
  
  
  
        } else if (e.textContent === 'Paper') {
          console.log('paper')
          
          e.parentElement.classList.add('active_sec')
  
          data.default.forEach((e, i) => {
            // console.log(document.querySelectorAll('.page2 .products_s .card .span_s')[i].textContent)
  
            if (document.querySelectorAll('.pro_sec .p_b .card .span_s')[i].textContent === 'paper bag') {
              document.querySelectorAll('.pro_sec .p_b .card')[i].style.display = 'block';
              gsap.from(document.querySelectorAll('.pro_sec .p_b .card')[i], {
                opacity:0,
                translateX:'5%',
                duration: .8,
                stagger:0.5,
                ease: Power4.inOut,
              })
            } else {
              document.querySelectorAll('.pro_sec .p_b .card')[i].style.display = 'none';
  
            }
  
          })
  
        }
        else{
          e.parentElement.classList.remove('active_sec')
  
        }
      })
    })
  }
  myFilter();


  gsap.from('.pro_sec .p_h h1',{
    opacity:0,
    duration:0.5,
    ease:Power4.inOut,
    scrollTrigger:{
     trigger:'.pro_sec .p_h h1',
     scroller:'body',
    //  markers:true,
     start:'top 80%',
     end :'bottom 15%',
     scrub: true,

    }
 })

  gsap.from('.pro_sec .p_h h1 .line',{
     width:'2%',
     duration:0.5,
     ease:Expo.in,
     scrollTrigger:{
      trigger:'.pro_sec .p_h h1 .line',
      scroller:'body',
      // markers:true,
      start:'top 49%',
      end :'bottom 10%',
      scrub: true,

     }
  })

  gsap.to('#float',{
    top:'126',
    translateX:'150%',
    scale:'1',
    transform : 'rotate(-15deg)',
    duration:2,
    ease:Expo.inOut,
    // repeat:-1
 })



 

//  menu

document.getElementById('menu').onclick = ()=>{
  // document.querySelector('.mobile_menu')
  gsap.to('.mobile_menu',{
    display:'flex',
     duration:0.5,
     ease:Power4.in
  })
  gsap.to('.mobile_menu ul li span',{
    opacity:1,
    bottom:'0%',
    duration:0.5,
    ease:Power4.inOut,
    stagger:0.3
   })
}

document.getElementById('close').onclick = ()=>{
  gsap.to('.mobile_menu',{
    display:'none',
     duration:0.5,
     ease:Power4.in
  })
  gsap.to('.mobile_menu ul li span',{
    opacity:0,
    bottom:'-110%',
    duration:0.5,
    ease:Power4.inOut,
    stagger:0.3
   })
}

// call me 
//buttons events
document.querySelector('.call_me').onclick =()=>{
 
  window.location.href = 'tel:+918709641365'
}
document.getElementById('whatsapp').onclick = ()=>{
  window.location.href = 'https://api.whatsapp.com/send?phone=+918709641365"'

}

document.getElementById('products_me').onclick = ()=>{
  location.href = '#products'
}
document.querySelector('.more_p button').onclick = ()=>{
  location.href = 'bags.html'
}
