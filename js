document.addEventListener('DOMContentLoaded', (event) => {
    // Countdown Timer
    function countdown() {
        const birthday = new Date('2024-07-01T00:00:00'); // Set your partner's birthday here
        const now = new Date();
        const diff = birthday - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('countdown-timer').innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (diff < 0) {
            clearInterval(timer);
            document.getElementById('countdown-timer').innerHTML = "Happy Birthday!";
        }
    }

    const timer = setInterval(countdown, 1000);

    // Adding Wishes (for demo purposes)
    const wishesList = document.getElementById('wishes-list');
    const wishes = [
        "Happy Birthday! Have an amazing day!",
        "Wishing you all the best on your special day!",
        "May your birthday be filled with joy and love!"
    ];

    wishes.forEach(wish => {
        let li = document.createElement('li');
        li.textContent = wish;
        wishesList.appendChild(li);
    });
});
