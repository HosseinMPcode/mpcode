document.addEventListener("DOMContentLoaded", function() {
    const exampleText = ['MPcode compony is a fictitious company that I create it for a practice project :)'];
    const exampleTyping = new AutoTyping('.example-selector', exampleText, {
        typeSpeed: 50,
        deleteSpeed: 10,
        waitBeforeDelete: 7000,
        waitBetweenWords: 500,
    });
    exampleTyping.start()
});