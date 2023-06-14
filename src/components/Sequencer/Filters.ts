import { Filters } from "@/store/sequencer/tabsInfo";


    function initAll(audioString:string, filtersData:Filters){
        var audioContext = new window.AudioContext ();

        var audioElement = new Audio(audioString);
        var audioSource = audioContext.createMediaElementSource(audioElement);
        if(filtersData.reverb.toggled) reverb(audioContext,audioSource, filtersData.reverb.wet , filtersData.reverb.dry);
        return audioElement;
    }

    function reverb(context:AudioContext,source:any, wet:number, dry:number){
        // Create a ConvolverNode for the reverb effect
        var convolver = context.createConvolver();

        // Load the impulse response audio file
        var impulseResponseRequest = new XMLHttpRequest();
        impulseResponseRequest.open('GET', 'sequencer/FX/Reverb/gen-concert.wav', true);
        impulseResponseRequest.responseType = 'arraybuffer';

        impulseResponseRequest.onload = function() {
        var audioData = impulseResponseRequest.response;

        context.decodeAudioData(audioData, function(buffer) {
            convolver.buffer = buffer;
        });
        };

        impulseResponseRequest.send();

        // Create GainNodes for dry and wet signals
        var dryGainNode = context.createGain();
        var wetGainNode = context.createGain();

        // Set initial dry/wet mix value
        var dryMix = dry; // Adjust this value to control the dry signal mix (0.0 to 1.0)
        var wetMix = wet; // Adjust this value to control the wet signal mix (0.0 to 1.0)

        // Connect the nodes
        source.connect(dryGainNode);
        source.connect(convolver);
        convolver.connect(wetGainNode);
        dryGainNode.connect(context.destination);
        wetGainNode.connect(context.destination);

        // Set the initial gain values for dry and wet signals
        dryGainNode.gain.value = dryMix;
        wetGainNode.gain.value = wetMix;
    }

export default initAll;