function changeMode (size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main () {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  const spookyBtn = document.createElement('button');
  spookyBtn.innerHTML = 'Spooky';
  spookyBtn.onclick = spooky;
  document.body.appendChild(spookyBtn);

  const darkBtn = document.createElement('button');
  darkBtn.innerHTML = 'Dark mode';
  darkBtn.onclick = darkMode;
  document.body.appendChild(darkBtn);

  const screamBtn = document.createElement('button');
  screamBtn.innerHTML = 'Scream mode';
  screamBtn.onclick = screamMode;
  document.body.appendChild(screamBtn);
}

main();
