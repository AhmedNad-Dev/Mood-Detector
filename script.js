// Roast messages for each mood
const roastMessages = {
    hungry: {
        emoji: '🍔',
        messages: [
            "Oh wow, you're hungry? What a groundbreaking revelation! Did your stomach just discover gravity?",
            "Congratulations! You've unlocked the ancient human ability to feel hunger. Your ancestors would be so proud!",
            "Hungry again? At this rate, you should just set up a tent in the kitchen and call it home!",
            "Let me guess... you're thinking about food while reading this roast? I know you too well!",
            "You're not hungry, you're just bored. But nice try using your stomach as an excuse to snack!"
        ]
    },
    lazy: {
        emoji: '🛋️',
        messages: [
            "Lazy? You? I'm SHOCKED! Said no one ever. Even your couch is tired of you!",
            "Wow, you actually had enough energy to click a button? That's the most productive thing you've done all day!",
            "I'd roast you for being lazy, but honestly, you probably won't finish reading this sentence... still there?",
            "Your spirit animal is a sloth, but slower. And the sloth is offended by the comparison!",
            "Netflix called. They're concerned about your screen time. Even they think you need to move!"
        ]
    },
    angry: {
        emoji: '🌋',
        messages: [
            "Ooh, someone's angy! Did someone eat your leftovers? Or did reality just hit differently today?",
            "Take a deep breath, count to ten, and remember: being angry burns calories you probably can't afford to lose!",
            "Angry at the world or just angry that I'm calling you out right now? Either way, go punch a pillow!",
            "Fun fact: You look absolutely adorable when you're mad. Like a tiny chihuahua trying to be scary!",
            "Being angry is like drinking poison and expecting others to get sick. Also, you look funny when you frown!"
        ]
    },
    sleepy: {
        emoji: '🌙',
        messages: [
            "Sleepy? Let me guess, you stayed up scrolling through your phone 'for just 5 more minutes' for 3 hours?",
            "You're not sleepy, you're just allergic to productivity! But sure, blame it on your circadian rhythm!",
            "Coffee called. It wants to know why you betrayed it today. Also, your bed misses you!",
            "At this point, you're basically a professional napper. Put it on your resume, I dare you!",
            "Sleepy at this hour? Wow, what a unique and special snowflake you are! (Everyone is tired, buddy!)"
        ]
    },
    happy: {
        emoji: '🎉',
        messages: [
            "Happy? That's suspicious... What did you do? Who are you and what have you done with the real you?",
            "Aww, look at you being all happy and stuff! Don't worry, Monday will fix that real quick!",
            "Happy? In THIS economy? Teach me your ways, oh enlightened one! But seriously, that's awesome!",
            "Someone's happy! Did you finally find that missing sock? Or did you just remember you have no responsibilities today?",
            "Happiness looks good on you! Almost as good as that questionable outfit choice, but we'll let it slide today!"
        ]
    }
};

// Get DOM elements
const moodButtons = document.querySelectorAll('.mood-btn');
const resultCard = document.getElementById('resultCard');
const resultContainer = document.getElementById('resultContainer');
const roastEmoji = document.getElementById('roastEmoji');
const roastMessage = document.getElementById('roastMessage');
const resetBtn = document.getElementById('resetBtn');

// Function to get random message from array
function getRandomMessage(messagesArray) {
    const randomIndex = Math.floor(Math.random() * messagesArray.length);
    return messagesArray[randomIndex];
}

// Function to display roast
function displayRoast(mood) {
    const moodData = roastMessages[mood];
    const randomMessage = getRandomMessage(moodData.messages);
    
    // Set emoji and message
    roastEmoji.textContent = moodData.emoji;
    roastMessage.textContent = randomMessage;
    
    // Show result card with animation
    resultCard.classList.remove('show');
    
    // Small delay to reset animation
    setTimeout(() => {
        resultCard.classList.add('show');
        
        // Scroll to result on mobile
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                resultContainer.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }, 100);
        }
    }, 10);
}

// Function to reset/hide roast
function resetRoast() {
    resultCard.classList.remove('show');
    roastEmoji.textContent = '';
    roastMessage.textContent = '';
}

// Add click event listeners to mood buttons
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.getAttribute('data-mood');
        displayRoast(mood);
        
        // Add a little bounce effect to the clicked button
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 100);
    });
});

// Add click event listener to reset button
resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetRoast();
});

// Optional: Add keyboard support for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resultCard.classList.contains('show')) {
        resetRoast();
    }
});

// Add touch feedback for mobile
moodButtons.forEach(button => {
    button.addEventListener('touchstart', () => {
        button.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('touchend', () => {
        setTimeout(() => {
            button.style.transform = '';
        }, 100);
    });
});
