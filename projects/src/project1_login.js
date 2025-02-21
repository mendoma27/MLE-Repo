// main.js

const users = [
    { id: 1, username: "mendoma", password: "password1", userType: "admin" },
    { id: 2, username: "myohan", password: "password2", userType: "standard" },
    { id: 3, username: "mjonah", password: "password3", userType: "standard" }
];

document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        const errorMessage = document.getElementById("errorMessage");
        if (errorMessage) errorMessage.textContent = "The username and password does not match. Please try again.";
        return;
    }

    displayUserData(user);
});

function displayUserData(user) {
    const loginSection = document.getElementById("loginSection");
    const dataSection = document.getElementById("dataSection");
    if (loginSection) loginSection.style.display = "none";
    if (dataSection) dataSection.style.display = "block";

    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = "";

    let filteredUsers;
    if (user.userType === "admin") {
        filteredUsers = users;
    } else {
        filteredUsers = users.filter(u => u.username === user.username);
    }
    
    filteredUsers.forEach(u => {
        let row = `<tr><td>${u.id}</td><td>${u.username}</td><td>${u.userType}</td></tr>`;
        tableBody.innerHTML += row;
    });
}
