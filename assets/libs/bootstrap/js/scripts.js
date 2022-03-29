// D, afte, night // graph-text-icons

const colorsT = document.querySelector('#colors-t')

const date = new Date()

const hour = date.getHours()
//3c4eaa
//120f3d
if(hour == 24 || hour < 12) {

colorsT.style.background = 'linear-gradient(#3c4eaa, #120f3d)'

} else if(hour == 12 || hour < 18) {

    colorsT.style.background = 'linear-gradient(#332a9c, #4b3341)'
} else if(hour == 18 < 24) {

    
    colorsT.style.background = 'linear-gradient(#332a9c, #4b3341)'
}




// VIVIFY 

const vivifyAdd = () => {

 $('.graph-style').addClass('vivify ball')


}


const vivifyAddTwo = () => {

   
    $('.photo-style-one').addClass('vivify pulsate') 
   

   }

 

   const vivifySpin = () => {

    $('.terminal-cont').addClass('vivify spin')
   
   
   }


   const vivifyShake = () => {

    $('.text-tv').addClass('vivify shake')
   
   
   }
   

// 
// 



// 
// 


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

