let btn=document.querySelector('#btn')
let content=document.querySelector('#content')
let voice=document.querySelector('#voice')

window.speechSynthesis.onvoiceschanged = () => {
    const voices = window.speechSynthesis.getVoices();
    console.log("Available voices:", voices);
};

function speak(text) {
    const voices = window.speechSynthesis.getVoices();
    let text_speak = new SpeechSynthesisUtterance(text);

    // Find a female voice
    const femaleVoice = voices.find(
        (voice) => voice.name.includes("Female") || voice.name.includes("Zira") || voice.name.includes("Salli")
    );

    // Set the language, voice, and other properties
    text_speak.lang = "hi-IN"; // Change to "en-US" if using English
    text_speak.voice = femaleVoice || voices[0]; // Use femaleVoice or fallback to first available
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0&&hours<12)
    {
        speak("GOOD MORNING");
    }
    else if(hours>=12 && hours<16)
        speak("GOOD AFTERNOON");
    else if(hours>=16 && hours<18)
    speak("GOOD EVENING")
else
speak("GOOD NIGHT");
}
window.addEventListener('load',()=>{
    wishMe();
})

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
  let currentIndex= event.resultIndex
 let transcript= event.results[currentIndex][0].transcript
 content.innerText=transcript;
 takeCommand(transcript.toLowerCase())
console.log(event);

}
btn.addEventListener('click',()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message)
{
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes('who are you'))
       {
           speak("I am cutie,created by vicky");
       }
    else if(message.includes('hello')||message.includes('hey'))
    {
        speak("hello how can i help you");
    }
    
        else if(message.includes('who created you'))
            {
                speak("I am cutie,created by vicky");
                window.open("https://github.com/Vimalnegi03","_blank")
            }
        else if(message.includes("open youtube"))
        {
            speak("opening youtube");
            window.open("https://www.youtube.com","_blank")
        }
        else if(message.includes("open insta"))
            {
                speak("opening instagram");
                window.open("https://www.instagram.com","_blank")
            }
            else if (message.includes("play")) {
                const songName = message.replace("play", "").trim();
                speak(`Playing ${songName} on Spotify`);
            
                // Open Spotify's search for the song
                window.open(`https://open.spotify.com/search/${encodeURIComponent(songName)}`, "_blank");
            }
            else if(message.includes("open facebook"))
                {
                    speak("opening facebook");
                    window.open("https://www.facebook.com","_blank")
                }
                else if(message.includes("open github"))
                    {
                        speak("opening github");
                        window.open("https://www.github.com","_blank")
                    }
                    else if(message.includes("open calculator"))
                        {
                            speak("opening calculator");
                            window.open("calculator://")
                        }
                        else if(message.includes("open wcc2"))
                            {
                                speak("opening world cricket championship 2");
                                window.open("world cricket championship 2://")
                            }
                    else
                    {
                   speak(`this is what i found on internet regarding ${message.replace("cutie","")}`);
                    window.open(`https://www.google.com/search?q=${message.replace("cutie","")||message}`,"_blank")
                    }
}