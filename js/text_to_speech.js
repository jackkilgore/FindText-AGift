

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
    msg.rate = 1.0; // 0.4 From 0.1 to 10
    msg.pitch = pitch * 1.0; // From 0 to 2
    msg.lang = 'en';
    return msg

}
// https://dev.to/asaoluelijah/text-to-speech-in-3-lines-of-javascript-b8h
let voice_0 = undefined
function play_speech(input_str) {

    if ('speechSynthesis' in window) {
        voice_0 = init_speech(0.4)
        voice_0.text = input_str;
        window.speechSynthesis.speak(voice_0);
        

    } else {
        // Speech Synthesis Not Supported 😣
        alert("Sorry, your browser doesn't support text to speech!");
    }
}

function cancel_speech() {
    if ('speechSynthesis' in window && voice_0 !== undefined) {
        window.speechSynthesis.cancel();
    }
}



