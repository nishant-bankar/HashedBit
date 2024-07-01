function correctWord(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}


console.log(correctWord("This is a color.", "color", "colour"));

// Output: "This is a colour."
