const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];


const ol = document.createElement("ol");
// console.log(ol);
users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.firstName + ' ' + user.lastName ;
    //3
    li.setAttribute("data-id", user.id);
    ol.appendChild(li);
}) 


//2
ol.style.listStyle = 'none';


document.body.appendChild(ol);