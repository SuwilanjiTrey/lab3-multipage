document.getElementById("themeToggle").addEventListener("click", () =>
{
document.body.classList.toggle("dark-theme");
});

document.getElementById("contactForm").addEventListener("submit", (e) 
=> {
  e.preventDefault();
  const name = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();


  if (name === "" || message === ""){
    alert("please fill out all field");
  } else {
    document.getElementById("Response").innerText = `Thanks, ${name}. we'll get back to you soon!`;

    e.target.reset();
    } 
  }
});

document.getElementById("loadUserBtn").addEventListener("click",
async () =>{
  try{
    const res = await
  fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name;
      userList.appendChild(li);
    });
  }catch (err) {
    console.error("failed to load users: ", err);
  }
  
  });
