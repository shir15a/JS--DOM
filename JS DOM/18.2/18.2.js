const myDiv = document.createElement('div');
const text = document.createElement('p');
const img = document.createElement("IMG");
img.src  = 'https://comps.canstockphoto.co.il/%D7%A9%D7%99%D7%A8-%D7%9C%D7%91-%D7%A7%D7%9C%D7%99%D7%A4-%D7%90%D7%A8%D7%98-%D7%95%D7%A7%D7%98%D7%95%D7%A8%D7%99_csp34967012.jpg'
img.setAttribute("width", "400");
img.setAttribute("height", "300");
text.textContent = 'Hello Everyone My Name is shir!';
text.style.color = 'red';
text.style.fontSize='20px'
document.body.insertAdjacentElement('afterbegin', myDiv);
myDiv.appendChild(text);
myDiv.appendChild(img);

  
