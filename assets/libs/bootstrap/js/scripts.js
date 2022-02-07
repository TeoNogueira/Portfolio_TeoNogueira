window.sr = ScrollReveal({ reset: true});

sr.reveal('.eff-1', { duration: 1000});






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

