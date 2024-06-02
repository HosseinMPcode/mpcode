document.addEventListener("DOMContentLoaded", function() {
    const exampleText = ['I can write a whole sentence.'];
    const exampleTyping = new AutoTyping('.example-selector', exampleText, {
        typeSpeed: 50,
        deleteSpeed: 50,
        waitBeforeDelete: 2000,
        waitBetweenWords: 500,
    });
    exampleTyping.start()
});