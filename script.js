const EMAIL = "theethanerivers@gmail.com";
const PASSWORD = "Incredibleman";

let balanceVisible = true;

// fake account database (name lookup system)
const accounts = {
  "1234567890": "Solomon Clem Ene",
  "9876543210": "Divine Favour",
  "1112223333": "Trustlock Demo User"
};

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === EMAIL && password === PASSWORD) {
    localStorage.setItem("auth", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Access denied";
  }
}

function authCheck() {
  if (localStorage.getItem("auth") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("auth");
  window.location.href = "index.html";
}

function go(page) {
  window.location.href = page;
}

/* BALANCE TOGGLE */
function toggleBalance() {
  const b = document.getElementById("balance");

  if (balanceVisible) {
    b.innerText = "******";
  } else {
    b.innerText = "$250,000,000";
  }

  balanceVisible = !balanceVisible;
}

/* TRANSFER SYSTEM */
function transfer() {
  const acc = document.getElementById("accNum").value;
  const amt = document.getElementById("amount").value;

  const name = accounts[acc];

  const msg = document.getElementById("transferMsg");

  if (!acc || !amt) {
    msg.innerText = "Fill all fields";
    msg.style.color = "red";
    return;
  }

  if (!name) {
    msg.innerText = "Account not found";
    msg.style.color = "red";
    return;
  }

  msg.innerText = `Transfer to ${name} successful ✔`;
  msg.style.color = "#4ade80";
}