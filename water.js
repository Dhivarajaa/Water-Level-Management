// Page Elements
const loginPage = document.getElementById("loginPage");
const signupPage = document.getElementById("signupPage");
const mainPage = document.getElementById("mainPage");

const toSignup = document.getElementById("toSignup");
const toLogin = document.getElementById("toLogin");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const logoutLink = document.getElementById("logoutLink");
const currentUserName = document.getElementById("currentUserName");
const currentUserEmail = document.getElementById("currentUserEmail");

// Show Signup Page
toSignup.addEventListener("click", () => {
  loginPage.classList.remove("active");
  signupPage.classList.add("active");
});

// Show Login Page
toLogin.addEventListener("click", () => {
  signupPage.classList.remove("active");
  loginPage.classList.add("active");
});

// Signup
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const username = document.getElementById("signupUsername").value.trim();
  const email = username + "@gmail.com";
  const password = document.getElementById("signupPass").value;

  // Save user in localStorage (demo)
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find(u => u.email === email)) {
    alert("User already exists!");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful! Please login.");
  signupForm.reset();
  signupPage.classList.remove("active");
  loginPage.classList.add("active");
});

// Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const email = username + "@gmail.com";
  const password = document.getElementById("loginPass").value;

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid credentials!");
    return;
  }

  // Show dashboard
  currentUserName.textContent = user.name;
  currentUserEmail.textContent = user.email;
  loginPage.classList.remove("active");
  mainPage.classList.add("active");
});

// Logout
logoutLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainPage.classList.remove("active");
  loginPage.classList.add("active");
});
