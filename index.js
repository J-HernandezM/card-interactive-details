const inputCardholder = document.querySelector('#cardholder')
const inputCardnumber = document.querySelector('#cardnumber')
const inputMonth = document.querySelector('#month')
const inputYear = document.querySelector('#year')
const inputDates = document.querySelectorAll('.dates')
const inputCvc = document.querySelector('#cvc')


//LIMITAR EL LENGHT DEL INPUT DEL USUARIO, BORRANDOLE LOS VALORES ADICIONALES
listeners()
function listeners(){
    inputDates.forEach((date)=>{
        date.addEventListener('keyup', (event)=>{
            let userEntry = event.target.value.split('')
            let number = event.target.value
            if(number>12){
                event.target.value='00'
            }
            if(userEntry.length>2){
                userEntry.pop()
                event.target.value=userEntry.join('')
            }
        })
    })

    inputCvc.addEventListener('keyup', (event)=>{
        let userEntry = event.target.value.split('')
        if(userEntry.length>3){
            let newEntry=userEntry.slice(0, 3)
            event.target.value=newEntry.join('')
        }
    })
    inputCardnumber.addEventListener('keyup', (event)=>{
        let userEntry = event.target.value.split('')
        if(userEntry.length>16){
            let newEntry=userEntry.slice(0, 16)
            event.target.value=newEntry.join('')
        }
    })
}
