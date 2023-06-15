import { Filters } from "@/store/sequencer/tabsInfo";

function noFXCheck(filtersData:Filters){
    let noFiltersFound = true;
    if(filtersData.reverb.toggled) noFiltersFound = false;
    
    return noFiltersFound;
}


function initAll(audioString:string, filtersData:Filters){
    var audioContext = new window.AudioContext ();

    var audioElement = new Audio(audioString);
    if(noFXCheck(filtersData)) return audioElement;

    var audioSource = audioContext.createMediaElementSource(audioElement);
    if(filtersData.reverb.toggled) reverb(audioContext,audioSource, filtersData.reverb.wet , filtersData.reverb.dry, filtersData.reverb.type);
    return audioElement;
}

export const reverbArray = ["concert.wav", "dream.wav", "museum.wav", "nonlinear.wav", "pan-hall.wav", "pump-verb.wav", "rhall.wav", "tidal-hall.wav", "utilit-verb.wav"];

function reverb(context:AudioContext,source:any, wet:number, dry:number,type:number){
    var convolver = context.createConvolver();

    var impulseResponseRequest = new XMLHttpRequest();
    impulseResponseRequest.open('GET', 'sequencer/FX/Reverb/'+reverbArray[type], true);
    impulseResponseRequest.responseType = 'arraybuffer';

    impulseResponseRequest.onload = function() {
    var audioData = impulseResponseRequest.response;

    context.decodeAudioData(audioData, function(buffer) {
        convolver.buffer = buffer;
    });
    };

    impulseResponseRequest.send();

    var dryGainNode = context.createGain();
    var wetGainNode = context.createGain();

    var dryMix = dry; 
    var wetMix = wet; 


    source.connect(dryGainNode);
    source.connect(convolver);
    convolver.connect(wetGainNode);
    dryGainNode.connect(context.destination);
    wetGainNode.connect(context.destination);

    dryGainNode.gain.value = dryMix;
    wetGainNode.gain.value = wetMix;
}

export default initAll;