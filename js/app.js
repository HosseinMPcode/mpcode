document.addEventListener("DOMContentLoaded", function() {
    const exampleText = ['I can write a whole sentence.'];
    const exampleTyping = new AutoTyping('.example-selector', exampleText, {
        typeSpeed: 50,
        deleteSpeed: 10,
        waitBeforeDelete: 7000,
        waitBetweenWords: 500,
    });
    exampleTyping.start()
});

// const bulb = document.getElementById('bulb');
// let isShadowOn = true; 
// const turnOnshadow= function(){
//     // bulb.style.boxShadow = 'none';
//     // bulb.style.boxShadow = '#b19c7b 0px 10px 90px';
//     isShadowOn = !isShadowOn;
//     bulb.style.boxShadow = isShadowOn ? bulb.style.boxShadow = '#b19c7b 0px 10px 90px' : bulb.style.boxShadow = 'none';
// }
// setInterval(turnOnshadow, 2700);