const inputCardholder = document.querySelector('#cardholder')
const inputCardnumber = document.querySelector('#cardnumber')
const inputMonth = document.querySelector('#month')
const inputYear = document.querySelector('#year')
const inputDates = document.querySelectorAll('.dates')
const inputCvc = document.querySelector('#cvc')

const realName=document.querySelector('.left__cardName')
const realNumber=document.querySelector('.left__cardNumber')
const realMonth=document.querySelector('.date__month')
const realYear=document.querySelector('.date__year')
const realCvc=document.querySelector('.left__cvc')

const confirmBtn=document.querySelector('.form__submitbtn')
const thanksBtn=document.querySelector('.thanks__btn')
const rightSection=document.querySelector('.right__thanks')
const form=document.querySelector('form')

let inputs=[inputCardholder, inputCardnumber, inputCvc, inputMonth, inputYear]


//LIMITAR EL LENGHT DEL INPUT DEL USUARIO, BORRANDOLE LOS VALORES ADICIONALES
listeners()
function listeners(){
    inputCardholder.addEventListener('keyup', (event)=>{
        let userEntry=event.target.value.split('')
        if(userEntry.length>30){
            let finalEntry= userEntry.slice(0, 30)
            event.target.value=finalEntry.join('')
        }
        let finalname=event.target.value
        realName.innerHTML=finalname.toUpperCase()
    })
    inputDates.forEach((date)=>{
        date.addEventListener('keyup', (event)=>{
            let userEntry = event.target.value.split('')
            let number = event.target.value
            let finalMonth
            let finalYear
            if(event.target.id=='month'){
                if(number>12){
                    event.target.value='00'
                    finalMonth='00'
                }
                else{
                    if(userEntry.length>2){
                        let newEntry = userEntry.slice(0, 2)
                        event.target.value=newEntry.join('')
                        finalMonth=event.target.value
                    }
                    else{
                        finalMonth=event.target.value
                    }
                }
                realMonth.innerHTML=finalMonth
            }
            if (event.target.id=='year'){
                if(number>50){
                    event.target.value='00'
                    finalYear='00'
                }
                else{
                    if(userEntry.length>2){
                        let newEntry = userEntry.slice(0, 2)
                        event.target.value=newEntry.join('')
                        finalYear=event.target.value
                    }
                    else{
                        finalYear=event.target.value
                    }
                }
                realYear.innerHTML=finalYear
            }
            
        })
    })

    inputCvc.addEventListener('keyup', (event)=>{
        let userEntry = event.target.value.split('')
        let newEntry
        if(userEntry.length>3){
            newEntry=userEntry.slice(0, 3)
            event.target.value=newEntry.join('')
            realCvc.innerHTML=event.target.value
        }
        else{
            newEntry=userEntry
            while(userEntry.length<3){
                newEntry.push('0')
            }
            realCvc.innerHTML=newEntry.join('')
        }
        if(isNaN(event.target.value)){
            newEntry=userEntry.slice(0,0)
            event.target.value=newEntry.join('')
        }
    })
    inputCardnumber.addEventListener('keyup', (event)=>{
        let userEntry = event.target.value.split('')
        if(userEntry.length>16){
            let newEntry=userEntry.slice(0, 16)
            event.target.value=newEntry.join('')
        }
        //para no cambiar el userEntry con el splice debo cambiarlo a otra variable
        if(userEntry.length<=16){
            let filledArray=userEntry
            let space=4
            while(filledArray.length<16){
                filledArray.push('0')
            }
            //para agregar los espacios en la tarjeta
            for(let i=1; i<4; i++){
                let add =(filledArray.length)-16
                let index=(space*i)+add
                filledArray.splice(index, 0, ' ')
            }
            realNumber.innerHTML=filledArray.join('')
        }
        
    })
    //boton para continuar con la siguiente pantalla
    confirmBtn.addEventListener('click', ()=>{
        let correctos=0
        inputs.forEach((input)=>{
            if(!input.classList.contains('modified')){
                correctos+=1
            }
        })
        if(correctos==inputs.length){
            rightSection.classList.remove('inactive')
            form.classList.add('inactive')
            thanksBtn.addEventListener('click', resetPage)
        }
        else{alert('Correct all the fields')}
    })
}
errors()
function errors(){
    inputs.forEach((input)=>{
        input.addEventListener('blur', (blurEvent)=>{
            let isValid=blurEvent.target.validity.valid
            let spanId=blurEvent.target.getAttribute('aria-describedby')
            let errorContainer=document.getElementById(spanId)
            let inputId=blurEvent.target.id
            let inputSelected=document.getElementById(inputId)
            if(!isValid){
                errorContainer.classList.remove('inactive')
                inputSelected.classList.add('modified')
            }
            else{
                errorContainer.classList.add('inactive')
                inputSelected.classList.remove('modified')
            }
        })
    })

}
function resetPage(){
    window.location.reload()
}