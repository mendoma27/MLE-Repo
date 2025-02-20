type User = {
    id: number;
    username: string;
    password: string;
    userType: "admin" | "standard";
};

const users: User[] = [
    { id: 1, username: "mendoma", password: "password1", userType: "admin" },
    { id: 2, username: "myohan", password: "password2", userType: "standard" },
    { id: 3, username: "mjonah", password: "password3", userType: "standard" }
];

document.getElementById("loginForm")?.addEventListener("submit", function(event: Event) {
    event.preventDefault();

    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        const errorMessage = document.getElementById("errorMessage");
        if (errorMessage) errorMessage.textContent = "The username and password does not match. Please try again.";
        return;
    }

    displayUserData(user);
});

function displayUserData(user: User): void {
    const loginSection = document.getElementById("loginSection");
    const dataSection = document.getElementById("dataSection");
    if (loginSection) loginSection.style.display = "none";
    if (dataSection) dataSection.style.display = "block";

    const tableBody = document.getElementById("userTableBody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";

    const filteredUsers = user.userType === "admin" ? users : users.filter(u => u.userType === "standard");
    
    filteredUsers.forEach(u => {
        let row = `<tr><td>${u.id}</td><td>${u.username}</td><td>${u.userType}</td></tr>`;
        tableBody.innerHTML += row;
    });
}
