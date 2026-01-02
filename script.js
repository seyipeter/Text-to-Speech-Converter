const synth = window.speechSynthesis;

const triggerButton = document.querySelector('button');
const inputText = document.querySelector('textarea');
const voiceSelect = document.querySelector('select');

let voices = [];

function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = "";

    const domchanges = document.createDocumentFragment();        
    for (const voice of voices) {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        
        if (voice.default) {
            option.textContent += " — DEFAULT";
        }
        option.setAttribute("data-lang", voice.lang);
        option.setAttribute("data-name", voice.name);
        dom-changes.appendChild(option);        
    }
    voiceSelect.appendChild(domchanges);    
}
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
}
populateVoiceList();

function preventingIntSubmit(event) {
    event.preventDefault();

    if(!inputText.value){return;}

    const utterThis = new SpeechSynthesisUtterance(inputText.value);
    const selectedVoiceOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const selectedLangOption = voiceSelect.selectedOptions[0].getAttribute('data-lang');
    const chosenVoice = voices.find(v => v.name === selectedVoiceOption);
    if(chosenVoice){
    utterThis.voice = chosenVoice;
    utterThis.lang =  selectedLangOption;
    }    
    synth.cancel();
    synth.speak(utterThis);
    inputText.blur();
};
triggerButton.addEventListener('click', preventingIntSubmit);














