let theme = 'blue'
setTheme(theme)


const toggleButton = document.querySelector('.toggle-button');

    toggleButton.addEventListener('click', () => {
        if(theme==='blue'){
            theme='yellow'
            setTheme('yellow')
            toggleButton.style.left='14px'
        }
        else if(theme==='yellow'){
            theme='purple'
            setTheme('purple')
            toggleButton.style.left='28px';
        }
        else if(theme==='purple'){
            theme='blue'
            setTheme('blue')
            toggleButton.style.left='2px'
        }
    })
    



function setTheme(theme){
    if(theme === 'blue'){
        document.getElementById('style-theme').href='./css/theme1.css'
    }
    if(theme === 'yellow'){
       
        document.getElementById('style-theme').href='./css/theme2.css'
    }
    if(theme === 'purple'){
        
        document.getElementById('style-theme').href='./css/theme3.css'
    }
    
}

const numberOnScreen = document.querySelector('.number-on-screen')
const del = document.querySelector('.del')
const reset = document.querySelector('.reset')
const equal = document.querySelector('.equal')
const buttons = document.querySelector('.buttons')
const string = '0123456789'
buttons.addEventListener("click", function (e) {
    if (e.target.innerText === "RESET") {
      numberOnScreen.innerText = "";
    }
    if(e.target.innerText === 'DEL'){
     
      numberOnScreen.innerText=numberOnScreen.innerText.slice(0,numberOnScreen.innerText.length - 1);
    }

    if (
      !numberOnScreen.innerText ||
      string.indexOf(numberOnScreen.innerText[numberOnScreen.innerText.length - 1]) === -1
    ) {
      if (string.indexOf(e.target.innerText) === -1) {
        return;
      }
    }
    
    if (e.target.innerText === "=") {
       
      numberOnScreen.innerText = eval(numberOnScreen.innerText);
      return;
    }
    if(e.target.innerText!=='DEL' && e.target.innerText!=='RESET'){
      numberOnScreen.innerText += e.target.innerText;
    }
    
  });


/* const root = document.querySelector(':root');
const toggleButton= document.querySelector('.toggle-button')

        if(toggleButton.style.left='2px'){
            toggleButton.addEventListener('click',()=>{
                root.style.setProperty('--bg-color', 'hsl(0, 0%, 90%)')
                root.style.setProperty('--bg-icon-toggler-or-bg-buttons', 'hsl(0, 5%, 81%)')
                root.style.setProperty('--bg-toggle-button', 'hsl(25, 98%, 40%)')
                root.style.setProperty('--bg-screen', 'hsl(0, 0%, 93%)')
                root.style.setProperty('--bg-button', 'hsl(45, 7%, 89%)')
                root.style.setProperty('--color-button', 'hsl(60, 10%, 19%)')
                root.style.setProperty('--color-screen', 'hsl(60, 10%, 19%)');
                root.style.setProperty('--shadow-button', 'hsl(35, 11%, 61%)');
                root.style.setProperty('--hover-button', 'hsl(45, 7%, 100%)');
                root.style.setProperty('--color-eq', 'hsl(0, 0%, 90%)');
                root.style.setProperty('--bg-reset-or-del', 'hsl(185, 42%, 37%)');
                root.style.setProperty('--shadow-reset-or-del', 'hsl(185, 58%, 25%)');
                root.style.setProperty('--shadow-eq', 'hsl(25, 99%, 27%)');
                root.style.setProperty('--bg-eq', 'hsl(25, 98%, 40%)');
                root.style.setProperty('--hover-reset-or-del', 'hsl(185, 42%, 50%)');
                root.style.setProperty('--hover-eq', 'hsl(25, 98%, 50%)');
                root.style.setProperty('--logo-or-text-theme-numbers', 'hsl(60, 10%, 19%)');
                toggleButton.style.left='14px';
                if(toggleButton.style.left='14px'){
                    toggleButton.addEventListener('click', ()=> {
                        root.style.setProperty('--bg-color','hsl(268, 75%, 9%)');
                        root.style.setProperty('--bg-icon-toggler-or-bg-buttons', 'hsl(268, 71%, 12%)')
                        root.style.setProperty('--bg-toggle-button', 'hsl(176, 100%, 44%)')
                        root.style.setProperty('--bg-screen', 'hsl(268, 71%, 12%)')
                        root.style.setProperty('--bg-button', 'hsl(268, 47%, 21%)')
                        root.style.setProperty('--color-button', 'hsl(52, 100%, 62%)')
                        root.style.setProperty('--color-screen', 'hsl(52, 100%, 62%)')
                        root.style.setProperty('--shadow-button', 'hsl(290, 70%, 36%)')
                        root.style.setProperty('--hover-button', 'hsl(268, 47%, 30%)')
                        root.style.setProperty('--color-eq', 'black')
                        root.style.setProperty('--bg-reset-or-del', 'hsl(281, 89%, 26%)')
                        root.style.setProperty('--shadow-reset-or-del', 'hsl(285, 91%, 52%)')
                        root.style.setProperty('--shadow-eq', 'hsl(177, 92%, 70%)')
                        root.style.setProperty('--bg-eq', 'hsl(176, 100%, 44%)')
                        root.style.setProperty('--hover-reset-or-del', 'hsl(281, 89%, 40%)')
                        root.style.setProperty('--hover-eq', 'hsl(176, 100%, 60%)')
                        root.style.setProperty('--logo-or-text-theme-numbers', 'hsl(52, 100%, 62%)')
                        toggleButton.style.left='28px';   
                        if(toggleButton.style.left='28px'){
                            toggleButton.addEventListener('click', () => {
                                root.style.setProperty('--bg-color','hsl(222, 26%, 31%)')
                                root.style.setProperty('--bg-icon-toggler-or-bg-buttons','hsl(223, 31%, 20%)')
                                root.style.setProperty('--bg-toggle-button', 'hsl(6, 63%, 50%)')
                                root.style.setProperty('--bg-screen','hsl(224, 36%, 15%)')
                                root.style.setProperty( '--bg-button','hsl(30, 25%, 89%)')
                                root.style.setProperty('--color-button','hsl(221, 14%, 31%)')
                                root.style.setProperty('--color-screen','white')
                                root.style.setProperty('--shadow-button','hsl(28, 16%, 65%)')
                                root.style.setProperty('--hover-button','hsl(30, 25%, 100%)')
                                root.style.setProperty('--color-eq','white')
                                root.style.setProperty('--bg-reset-or-del','hsl(225, 21%, 49%)')
                                root.style.setProperty('--shadow-reset-or-del','hsl(224, 28%, 35%)')
                                root.style.setProperty('--shadow-eq','hsl(6, 70%, 34%)')
                                root.style.setProperty('--bg-eq','hsl(6, 63%, 50%)')
                                root.style.setProperty('--hover-reset-or-del','hsl(225, 21%,60%)')
                                root.style.setProperty('--hover-eq','hsl(6, 63%, 60%)')
                                root.style.setProperty('--logo-or-text-theme-numbers','white')
                               
   
                                toggleButton.style.left='2px'
                               
                            })
                           
                        }
                    })
                    }})
                   
              
                } */

    
    




/* toggleButton.addEventListener('click',(e) => {
    if(e.target.style.left=='2px'){
      
   
   
}else if(e.target.style.left=='14px'){
  
        root.style.setProperty('--bg-color', 'hsl(268, 75%, 9%)')
        toggleButton.style.left='28px';

}
}) */
  

 
    

