import * as data from './data.json' assert {
  type: "json"
};

function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();


}
smoothScroll();


const tl = gsap.timeline()

tl.from('#main header .icon', {
  width: '0px',
  opacity: 0,
  duration: .5,
  // translateY:'100%',
  ease: "elastic.out(1,0.3)",
}).to('#main header nav ul li', {
  color: 'rgba(0,0,0,0.7)',
  duration: .3,
  stagger: .1,
  // translateY:'50%',
  ease: Power4.inOut
}, 0.1).to('#main header .last_c', {

  opacity: 1,
  duration: .2,

  // translateY:'50%',
  ease: Power4.inOut

})

gsap.from('.page1 .p1 .img_s img', {
  translateX: '-100%',
  duration: .5,
  ease: Power4.inOut,
})

gsap.from('.page1 .p1 .p1_left h2', {
  opacity: 0,
  duration: 1,
  ease: Power4.inOut,
})

gsap.from('.page1 .p1 .p1_right p', {
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: Power4.inOut,
})
gsap.from('.page1 .p1 .p1_right button', {
  opacity: 0,
  duration: 1,
  delay: 0.4,
  ease: Power4.inOut,
})

gsap.from('.page1 .p1 .img_s img', {

  duration: .6,
  ease: Power4.inOut,
})
gsap.from('.page1 .p1 .box1', {
  width: '0px',
  height: '0px',
  duration: .8,
  ease: Power4.inOut,
})
gsap.from('.page1 .p1 .sec_p .h1 h3', {
      //  translateY:'200%',
      // translateY: '100%',
      opacity:0.7,
      delay:3,
      duration: 0.8,
      
      ease: Power2.inOut,
      // scrollTrigger: {
      //   trigger: '.page1 .p1 .sec_p .h1 h3',
      //   scroller: '#main',
      //   markers: true,
      //   start: 'top 50%',
      //   end: 'bottom 50%',
      //   scrub: 5,

      // }
    })

    // navbar scroll Animation

  //  window.onload = window.addEventListener('scroll',(e)=>{
  //     let header = document.querySelector('#main header');
  //     if (window.pageYOffset > 70) {
  //         header.style.position = "fixed";
  //         header.style.top = "0";
  //     } else {
  //         header.style.position = "";
  //         header.style.top = "";
  //     }
  //   })
    // document.querySelector('#main header')

gsap.from('footer .f_img',{
  top:'0.1%',

repeat:-1,
  duration:6,
  yoyo:true,
  ease:Power4.inOut
})



// document.querySelectorAll('.page1 .p1 .sec_p .h1 .comment').forEach((e,i)=>{
//   console.log(e)
 
// })

let x =0;
show()
function show(){

  let i;
  for (i = 0; i < document.querySelectorAll('.page1 .p1 .sec_p .h1 .comment').length; i++) {
    document.querySelectorAll('.page1 .p1 .sec_p .h1 .comment')[i].style.display = "none";  
  }
  x++;
  if (x > document.querySelectorAll('.page1 .p1 .sec_p .h1 .comment').length) {x = 1}
  document.querySelectorAll('.page1 .p1 .sec_p .h1 .comment')[x-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
  setTimeout(show, 3000); // Change image every 2 seconds
}
   



   

const menu_btn = document.querySelector('#main header .menu_icon_m');
const menu_close = document.querySelector('#main header .menu_mobile .btn_close');
    function mobile_menu(){

      menu_btn.addEventListener('click',(e)=>{
        console.log('heelo')
        if(e){
          // document.querySelector('#main header .menu_mobile').classList.toggle('menu_mobile')
          document.querySelector('#main header .menu_mobile').style.display = 'flex';
          gsap.from('#main header .menu_mobile ul li span', {
            //  translateY:'200%',
            transform: 'translateY(100%)',
            opacity:0,
            delay:0.1,
            duration: 0.8,
            stagger:0.2,
            
            ease: Power4.inOut,
            // scrollTrigger: {
            //   trigger: '.page1 .p1 .sec_p .h1 h3',
            //   scroller: '#main',
            //   markers: true,
            //   start: 'top 50%',
            //   end: 'bottom 50%',
            //   scrub: 5,
      
            // }
          })

        }
      })


      menu_close.addEventListener('click',(e)=>{
        console.log('heelo')
        if(e){
          // document.querySelector('#main header .menu_mobile').classList.toggle('menu_mobile')
          document.querySelector('#main header .menu_mobile').style.display = 'none';
          

        }
      })



    }
    mobile_menu();


function mobile() {
  if (window.innerWidth <= 650) {
    console.log('hello')
    // gsap.to('.page1 #paper_bag1', {
    //   //  translateY:'200%',
    //   // translateY: '100%',
    //   scale: '0.3',
    //   rotate: '-13deg',
    //   duration: 0.8,
    //   delay: 0.1,
    //   ease: Power2.inOut,
    //   scrollTrigger: {
    //     trigger: '.page1 #paper_bag1',
    //     scroller: '#main',
    //     markers: true,
    //     start: 'top 5%',
    //     end: 'bottom -100%',
    //     scrub: 5,
    //     pin: true,
    //     pinSpacing: false,

    //   }
    // })
    document.querySelector('.page1 #paper_bag1').style.display = 'none';
  } else {
    gsap.to('.page1 #paper_bag1', {
      //  translateY:'200%',
      translateY: '125%',
      scale: '0.5',
      rotate: '-13deg',
      duration: 1.2,
      delay: .2,
      ease: Power4.inOut,
      scrollTrigger: {
        trigger: '.page1 #paper_bag1',
        scroller: '#main',
        markers: true,
        start: 'top -20%',
        end: 'bottom 120%',
        scrub: 4,
        pin: true



      }
    })
  }
}
mobile();

const catogery = document.querySelectorAll('.page2 .sec_p2 .sec_product div span');
console.log(catogery)


const arrow_btn = document.querySelector('.page2 .sec_p2 .btn_right');
arrow_btn.addEventListener('click', (e) => {
  console.log(e)
  document.querySelector('.page2 .sec_p2 .sec_product').scrollTo(500, 0);
})
const arrow_btn_l = document.querySelector('.page2 .btn_left');
const arrow_btn_r = document.querySelector('.page2 .btn_left1');


let i=0;

arrow_btn_l.addEventListener('click', (e) => {
  // console.log(arrow_btn_l.scrollWidth)

  if(e)
  {
    i=i+250;
    console.log(i)
      if(i>200){
      document.querySelector('.page2 .products_s').scrollTo(i, 0);

        arrow_btn_r.style.display = 'flex'
        arrow_btn_r.addEventListener('click',()=>{
          if(e){
      document.querySelector('.page2 .products_s').scrollTo(-i, 0);

          }else{
            i=100;
          }

        })
      }

  }
  

  // gsap.to('.page2 .products_s', {
  //   duration:0.8,
  //   ease:Power4.in,
  //   onStart:()=>{
  //     document.querySelector('.page2 .products_s').scrollTo(300, 0);

  //   }

  // })

})


// data json 

console.log(data.default)

const product_div = document.querySelector('.page2 .products_s');

data.default.forEach((e, i) => {
  console.log(e)

  const card = document.createElement('div');
  card.setAttribute('class', 'card')
  const img_p = document.createElement('img');
  const p = document.createElement('p');
  const span = document.createElement('span');
  const span1 = document.createElement('p');
  span1.setAttribute('class', 'span_s')



  img_p.setAttribute('src', e.pro_img)
  p.textContent = e.pro_name + ' bag';
  span.textContent = `₹ ${e.price}.00`;
  span1.textContent = e.category;

  card.append(img_p, p, span, span1)
  product_div.appendChild(card)


})




function myFilter() {
  catogery.forEach((e, i) => {
    // e.parentElement.classList.add('active')

    e.addEventListener('click', () => {

      catogery.forEach((e,i)=>{
        console.log(e.parentElement)
        e.parentElement.classList.remove('active_sec')

      })

      if (e.textContent === 'All categories') {
        console.log(e.parentElement)

        e.parentElement.classList.add('active_sec')
       

        data.default.forEach((e, i) => {
          console.log(document.querySelectorAll('.page2 .products_s .card .span_s')[i].textContent)
          document.querySelectorAll('.page2 .products_s .card')[i].style.display = 'block';
          gsap.from(document.querySelectorAll('.page2 .products_s .card')[i], {
            opacity:0,
            translateX:'5%',
            duration: .8,
            stagger:0.5,
            ease: Power4.inOut,
          })

        })



      } else if (e.textContent === 'Non woven') {
        console.log(e)
        // catogery.forEach((ele,index)=>{
        //   if(ele.textContent === 'Non woven'){
        //     e.parentElement.classList.remove('active_sec')

        //   }
        // })
        e.parentElement.classList.add('active_sec')
       
       


        data.default.forEach((e, i) => {
          console.log(document.querySelectorAll('.page2 .products_s .card .span_s')[i].textContent)

          if (document.querySelectorAll('.page2 .products_s .card .span_s')[i].textContent === 'non woven bag') {
            document.querySelectorAll('.page2 .products_s .card')[i].style.display = 'block';
            gsap.from(document.querySelectorAll('.page2 .products_s .card')[i], {
              opacity:0,
              translateX:'5%',
              duration: .8,
              stagger:0.5,
              ease: Power4.inOut,
            })
          } else {
            document.querySelectorAll('.page2 .products_s .card')[i].style.display = 'none';

          }

        })


      } else if (e.textContent === 'Cotton') {
        console.log('cotton')
        e.parentElement.classList.add('active_sec')

        data.default.forEach((e, i) => {
          console.log(document.querySelectorAll('.page2 .products_s .card .span_s')[i].textContent)

          if (document.querySelectorAll('.page2 .products_s .card .span_s')[i].textContent === 'cotton bag') {
           
            
            document.querySelectorAll('.page2 .products_s .card')[i].style.display = 'block';
            gsap.from(document.querySelectorAll('.page2 .products_s .card')[i], {
              opacity:0,
              translateX:'5%',
              duration: .8,
              stagger:0.5,
              ease: Power4.inOut,
            })
          } else {
            document.querySelectorAll('.page2 .products_s .card')[i].style.display = 'none';

          }

        })



      } else if (e.textContent === 'Paper') {
        console.log('paper')
        
        e.parentElement.classList.add('active_sec')

        data.default.forEach((e, i) => {
          console.log(document.querySelectorAll('.page2 .products_s .card .span_s')[i].textContent)

          if (document.querySelectorAll('.page2 .products_s .card .span_s')[i].textContent === 'paper bag') {
            document.querySelectorAll('.page2 .products_s .card')[i].style.display = 'block';
            gsap.from(document.querySelectorAll('.page2 .products_s .card')[i], {
              opacity:0,
              translateX:'5%',
              duration: .8,
              stagger:0.5,
              ease: Power4.inOut,
            })
          } else {
            document.querySelectorAll('.page2 .products_s .card')[i].style.display = 'none';

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