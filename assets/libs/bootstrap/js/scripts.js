// const target = document.querySelectorAll('[data-ast]');

// const ptClass = 'anima';


// function scrollingShow() {

// const winShowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

// target.forEach(function(e) {

//     if((winShowTop) > e.offsetTop) {

//         e.classList.add(ptClass);

//     }
//     console.log(e.offsetTop)

// })

// }

// // alternative window
// window.addEventListener('scroll', function() {
   
// scrollingShow();

// })


// 


// TEXT WRITE
const frontFreela = document.querySelector('.front-freela');

const animationWords = (text, counter) => {



    if(counter < text.length) {

   
   setTimeout(() => {

            frontFreela.textContent += text.charAt(counter);
            counter++;

            
            animationWords(text, counter);

        }, 280)
            
    }

    
  

}
animationWords('Frontend Freelancer', 0)
// SETTIMEOUT




const frontFreelaP = document.querySelector('.front-freela-p');

const animaParagraph = (text, counter) => {



    if(counter < text.length) {

   
   setTimeout(() => {

            frontFreelaP.textContent += text.charAt(counter);
            counter++;

            
            animaParagraph(text, counter);

        }, 180)
            
    }

}

setTimeout(function() {

animaParagraph('Uma maneira prática para alavancar os seus projetos', 0)
}, 5500);