export function switchMode(){
    switchButton.addEventListener('click', ()=>{
    //     const bodyClasses = document.body.classList
    //     if(bodyClasses.contains('light')){
    //         bodyClasses.remove('light')
    //     } else {
    //         bodyClasses.add('light')
    //     }
    document.body.classList.toggle('light')
    })
}