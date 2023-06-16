import { Filters } from "@/store/sequencer/tabsInfo";

function initAll(audioString:string, filtersData:Filters){
    var audioContext = new window.AudioContext ();

    var audioElement = new Audio(audioString);

    var audioSource = audioContext.createMediaElementSource(audioElement);
    panner(audioContext,audioSource, filtersData.pan.value);
    if(filtersData.reverb.toggled) reverb(audioContext,audioSource, filtersData.reverb.wet , filtersData.reverb.dry, filtersData.reverb.type);
    if(filtersData.delay.toggled) delay(audioContext,audioSource, filtersData.delay.value);
    
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

function delay(context:AudioContext,source:any, delay:number){
    var delayNode = context.createDelay();
    var delayTime = delay; // Delay time in seconds
    delayNode.delayTime.value = delayTime;

    // Create a GainNode for the decay effect
    var decayGain = context.createGain();
    var decayTime = 0; // Decay time in seconds
    var decayLevel = 0.5; // Decay level between 0 and 1
    decayGain.gain.setValueAtTime(decayLevel, context.currentTime);
    decayGain.gain.exponentialRampToValueAtTime(0.05, context.currentTime + decayTime);

    // Connect the nodes
    source.connect(delayNode);
    delayNode.connect(decayGain);
    decayGain.connect(context.destination);
}

function panner(context:AudioContext,source:any, pan:number){
    var panNode = context.createStereoPanner();

    // Set the initial pan position
    var panPosition = (pan - 50) / 100; // Adjust this value to control the pan position (-1.0 to 1.0)

    // Connect the nodes
    source.connect(panNode);
    panNode.connect(context.destination);

    // Set the pan position
    panNode.pan.setValueAtTime(panPosition, context.currentTime);
}

export default initAll;