let input = document.getElementById("textInput");
let wordcount = document.getElementById("wordcount");
let sentenceCount = document.getElementById("sentenceCount");

const getWordCount = (text) => text.trim().split(/\s+/).filter(word => word).length;
const getSentenceCount = (text) => text.split(/[.!?]/).filter(sentence => sentence.trim()).length;

input.addEventListener("input", () => {
    const text = input.value;
    wordcount.textContent = `Words: ${getWordCount(text)}`;
    sentenceCount.textContent = `Sentences: ${getSentenceCount(text)}`;
});