let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let  text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon sir")
    }
    else{
        speak("Good Evening sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
    
let speakRecognition= window.speakRecognition || window.webkitSpeechRecognition
let recognition = new speakRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
     btn.style.display="flex"
     voice.style.display="none"
    if(message.includes("hello") || message.includes("hey")){
        speak("Hello sir,what can i help you?")
    }
    else if(message.includes("how are you?")){
        speak("I am fine sir, What can i help you")
    }
    else if(message.includes("who are you?")){
        speak("i am helena your virtual assisstant, created by yasar ")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/?gl=IN","_blank")
    }
    else if(message.includes("open graphic era website")){
        speak("opening graphic era website")
        window.open("https://geu.ac.in/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.co.in/","_blank");
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening Whatsapp..")
        window.open("whatsapp://")
    }
     else if (message.includes("open image generator")) {
        speak("Opening image generator");
        window.open("../image generator/index.html", "_blank");
    }
    else if(message.includes("time")){
        let time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
            let date= new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
            speak(date)
    }
    else{
        let finaltext="this is what i found on google regarding" + message.replace("helena","") || message.replace("helina","") 
        speak(finaltext)
        window.open(`https://www.bing.com/opaluqu?q=${message.replace("helena","")}`,"_blank")
    }
    
}

