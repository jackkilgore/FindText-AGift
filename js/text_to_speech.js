

let msg = undefined
function init_speech(pitch=1.0) {
    msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    let index = 0
    let count = 0
    speechSynthesis.getVoices().forEach(function(voice) {
        if (voice.name === 'Victoria') {
            index = count
        }
        count += 1
        console.log(voice.name, voice.default ? voice.default :'');
      });
    console.log(count)
    msg.voice = voices[index]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 0.9; // From 0.1 to 10
    msg.pitch = pitch * 1.0; // From 0 to 2
    msg.lang = 'en';
    return msg

}
// https://dev.to/asaoluelijah/text-to-speech-in-3-lines-of-javascript-b8h
function play_speech(input_str) {
    // console.log(msg)
    // if(msg === undefined) {
    // }
    if ('speechSynthesis' in window) {
        msg_0 = init_speech(1.2)
        msg_1 = init_speech(0.75)
        msg_0.text = input_str;
        msg_1.text = input_str;

        const voice0 = async () => {
            window.speechSynthesis.speak(msg_0);
            
        }
        const voice1 = async () =>{
            window.speechSynthesis.speak(msg_1);
        }
        voice0()
        // voice1()
        

    } else {
        // Speech Synthesis Not Supported 😣
        alert("Sorry, your browser doesn't support text to speech!");
    }
}



