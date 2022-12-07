// Connection 
      
const message=document.getElementById('Message')
const numOfSMS=document.getElementById('num-of-sms')
const remainingChars=document.getElementById('remaining-chars')
const btnSend=document.getElementById('btn-send')

const blackList=['E-numberOne','E-numberTwo']

//remaining chars
 
message.addEventListener('input', ()=>{
    let smsCount=parseInt((message.value.length / 70) +1)
    numOfSMS.innerText=`(${smsCount} SMS)`
    remainingChars.innerText=(70*smsCount)-message.value.length
})


//send message

btnSend.addEventListener('click', () =>{
    const words=message.value.split(' ')
    for(let blackWord of blackList){
        if(words.includes(blackWord)){
            alert('You cannot send message using these words')
            return
        }
        alert('Sent')
    }
})

