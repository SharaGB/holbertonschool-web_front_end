function createElement (data) {
  const paragraph = document.createElement('p');
  const text = document.createTextNode(data);
  paragraph.appendChild(text);
  document.body.appendChild(paragraph);
}

function queryWikipedia (callback) {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      const response = JSON.parse(request.responseText);
      callback(response.query.pages['21721040'].extract);
    }
  };
  request.send();
}

queryWikipedia(createElement);
