import * as data from './data.json' assert {
    type: "json"
  };

const product_s = document.querySelector('.pro_sec .p_b');

function products(){

    data.default.forEach((e, i) => {
        console.log(i)

       

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

//   menu

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
  