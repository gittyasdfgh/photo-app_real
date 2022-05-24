var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie")
    {
        console.log("taking selfie in 5 seconds");
    speak();
    }
}

function speak()
{
    var Synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
 var UtterThis=new SpeechSynthesisUtterance(speak_data);
 Synth.speak(UtterThis);
 Webcam.attach(camera);

 setTimeout(function()
 {
     take_snapshot();
     save();
 },5000);
}

Webcam.set({
width:360,
height:250,
image_format:"png",
png_quality:90

});
camera=document.getElementById("camera");
