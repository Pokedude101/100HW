//window.webkitSpeechRecognition is an API which will convert speech to text
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    //start() is pre-defined function of the web speech API which will convert text to speech
    recognition.start();

}

recognition.onresult = function(event){
    var content = event.results[0][0].transcript;
    console.log(content);

    if(content=="take my selfie"){
        speak()
    }
}






function speak(){
    //window.speechSynthesis is an API which is used to convert text to speech
    var synth = window.speechSynthesis;
    // speech_data contains the text which is taken from the textarea
    speech_data = "Taking next selfie in 5 seconds";
    document.getElementById("textbox").innerHTML = speech_data;

    //SpeechSynthesisUtterance function of the API which converts text to speech
    //a new keyword because, for every next text, we want to convert that text to speech
    var say_this = new SpeechSynthesisUtterance(speech_data);
    synth.speak(say_this);
    Webcam.attach(camera);
//setTimeout(function,delay)//it is used to call the function after a delay

setTimeout(function()
{ 
    img_id = "result1";
    take_snapshot(); 
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

  }, 5000);

setTimeout(function()
{ 
    img_id = "result2";
    take_snapshot(); 
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
}, 10000);

setTimeout(function()
{ 
    img_id = "result3";
    take_snapshot(); 

}, 15000);
    
}

//JSON-Javascript object notation
//JSON{key:value,key:value,key:value}
//-Webcam.set is a function of webcam.js to see the properties for the live view of the webcam.
//it accepts data in JSON format
Webcam.set({
    width:360,
    height: 250,
    image_format : 'jpeg',
    jpeg_quality:90
})
camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        if(img_id=="result1"){  
            document.getElementById("result_1").innerHTML = '<img id="result1" src="'+data_uri+'"/>';
            console.log("first photo taken");
        }
        if(img_id=="result2"){
            document.getElementById("result_2").innerHTML = '<img id="result2" src="'+data_uri+'"/>';
            console.log("second photo taken");
        }
        if(img_id=="result3"){
            document.getElementById("result_3").innerHTML = '<img id="result3" src="'+data_uri+'"/';
            console.log("third photo taken");
        }
    });
}
   