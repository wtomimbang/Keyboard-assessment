/* In this activity you should only have a header and an empty <ol> tag in your HTML body. All of the other HTML on your page should 
be created with JavaScript.

To complete the activity, you will need to do the following:

Make an array of all 26 letters of the alphabet (lowercase).
Make a variable that will randomly pick one of the 26 letters as a secret letter.
Setup a keyboard event on the whole body.
If the key you pressed is the secret key, you should append "SECRET KEY PRESSED" to the body in a tag of your choice.
After the secret key is pressed, randomly pick another secret key and assign it to your secret key variable.
 */


const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let secretLetter = letters[Math.floor(Math.random() * letters.length)];

const lettersList = document.getElementById('letters-list');
letters.forEach(letter => {
  const li = document.createElement('li');
  li.textContent = letter;
  lettersList.appendChild(li);
});

document.body.addEventListener('keyup', event => {
  const keyPressed = event.key.toLowerCase();
  if (keyPressed === secretLetter) {
    const li = document.createElement('li');
    li.textContent = `SECRET KEY PRESSED is:   ${secretLetter}`;
    theletterlist.appendChild(li);
    secretLetter = letters[Math.floor(Math.random() * letters.length)];
  }
});
