const translationDict = {
    'A': '🐸', 'B': '🐍', 'C': '🐢', 'D': '🐸🐢', 'E': '🐸🐍', 'F': '🐸🐸', 'G': '🐸🐍🐢', 'H': '🐍🐸', 'I': '🐢🐸',
    'J': '🐸🐍🐍', 'K': '🐢🐢', 'L': '🐍🐢', 'M': '🐢🐍', 'N': '🐍🐍', 'O': '🐸🐢🐢', 'P': '🐢🐢🐢', 'Q': '🐢🐢🐸',
    'R': '🐸🐢🐍', 'S': '🐍🐢🐍', 'T': '🐢🐸🐢', 'U': '🐸🐍🐸', 'V': '🐢🐍🐢', 'W': '🐍🐸🐍', 'X': '🐢🐍🐍🐢', 
    'Y': '🐍🐢🐸', 'Z': '🐸🐢🐍🐢',
    'a': '🐸', 'b': '🐍', 'c': '🐢', 'd': '🐸🐢', 'e': '🐸🐍', 'f': '🐸🐸', 'g': '🐸🐍🐢', 'h': '🐍🐸', 'i': '🐢🐸',
    'j': '🐸🐍🐍', 'k': '🐢🐢', 'l': '🐍🐢', 'm': '🐢🐍', 'n': '🐍🐍', 'o': '🐸🐢🐢', 'p': '🐢🐢🐢', 'q': '🐢🐢🐸',
    'r': '🐸🐢🐍', 's': '🐍🐢🐍', 't': '🐢🐸🐢', 'u': '🐸🐍🐸', 'v': '🐢🐍🐢', 'w': '🐍🐸🐍', 'x': '🐢🐍🐍🐢', 
    'y': '🐍🐢🐸', 'z': '🐸🐢🐍🐢'
};

const reverseTranslationDict = Object.fromEntries(
    Object.entries(translationDict).map(([key, value]) => [value, key])
);

function translateText() {
    const inputText = document.getElementById('inputText').value;
    let translatedText = '';
    for (let char of inputText) {
        translatedText += translationDict[char] || char;
    }
    document.getElementById('outputText').innerText = translatedText;
}

function reverseTranslateText() {
    const inputTranslatedText = document.getElementById('inputTranslatedText').value;
    let englishText = '';
    
    let buffer = '';
    for (let char of inputTranslatedText) {
        buffer += char;
        if (reverseTranslationDict[buffer] !== undefined) {
            englishText += reverseTranslationDict[buffer];
            buffer = '';
        }
    }
    // If there's any remaining buffer, just add it as is (handles cases where the buffer does not form a complete character)
    englishText += buffer;

    document.getElementById('outputEnglishText').innerText = englishText;
}

// Add floating phrases to the background
const phrases = [
    "You are beautiful", "You are amazing", "You are unique", "You are strong", 
    "You are loved", "You are special", "You are wonderful", "You are talented", 
    "You are appreciated", "You are brilliant", "You are fantastic", "You are incredible", 
    "You are extraordinary", "You are magnificent", "You are remarkable", "You are awesome",
    "You are inspiring", "You are exceptional", "You are marvelous", "You are phenomenal"
];

const background = document.querySelector('.background-phrases');

for (let i = 0; i < 100; i++) {
    const phraseElement = document.createElement('span');
    phraseElement.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    phraseElement.style.left = Math.random() * 100 + 'vw';
    phraseElement.style.top = Math.random() * 100 + 'vh';
    phraseElement.style.animationDelay = Math.random() * 5 + 's';
    phraseElement.style.opacity = 0.1 + Math.random() * 0.2;
    background.appendChild(phraseElement);
}
