const buttons=document.querySelectorAll('button');
const spanvalue= document.querySelector('span');

let acc=0;
spanvalue.textContent=0;
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
    const currentButton=e.currentTarget.classList

    if (currentButton.contains('decrease')){
        acc--
        if(acc<0){
            spanvalue.style.color = 'red'
        } 
    }
    else if (currentButton.contains('increase')){
        acc++
        if(acc>0){
            spanvalue.style.color = 'green'
        } 
    }
    else if (currentButton.contains('reset')){
        acc = 0;
        if(acc===0){
            spanvalue.style.color = 'black'
        } 
    }
    spanvalue.textContent=acc
        });
    })


