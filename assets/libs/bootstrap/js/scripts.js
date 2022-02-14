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

animaParagraph('“Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.”', 0)
}, 5700);



const freelaP = document.querySelector('.front-freela-p-2');

const animaParagraphSecond = (text, counter) => {



    if(counter < text.length) {

   
   setTimeout(() => {

    freelaP.textContent += text.charAt(counter);
            counter++;        
            animaParagraphSecond(text, counter);

        }, 180)
            
    }

}


setTimeout(function() {

animaParagraphSecond('– Thales Valentim', 0)
}, 23700);

