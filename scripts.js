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

    // Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
