const start = document.querySelector('.start-here'),
select = document.querySelectorAll('ul'),
li = document.createElement('li'),
p = document.querySelector("p");


//1
start.innerHTML = "main title";
//2
li.appendChild(document.createTextNode("sub title 4"));
select[1].appendChild(li);
//3
select[0].removeChild(select[0].lastElementChild);
//4
document.title = 'Master Of The Dom';

//5
p.innerHTML = "Shir";

