const themeToggleBtn = document.getElementById("themeToggle");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    if (name === "" || message === "") {
      alert("please fill out all fields");
    } else {
      document.getElementById("response").innerText = `Thanks, ${name}. we'll get back to you soon!`;
      e.target.reset();
    }
  });
}

 //console.log("change pages");
const loadUserBtn = document.getElementById("loadUserBtn");
if (loadUserBtn) {
  console.log("change pages");
  loadUserBtn.addEventListener("click", async () => {
    //alert("button clicked");
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      console.log("users are: ", users);
      const userList = document.getElementById("userList");
      userList.innerHTML = "";
      users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
      });
    } catch (err) {
      console.error("failed to load users: ", err);
    }
  });
}

// FAQ question toggle (for index.html or wherever the FAQ section is)
const questions = document.querySelectorAll(".question");
if (questions.length > 0) {
  questions.forEach((q) => {
    q.addEventListener("click", () => {
      q.nextElementSibling.classList.toggle("visible");
    });
  });
}


const backToTopBtn = document.getElementById("backToTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const time = now.toLocaleTimeString();
    clock.textContent = `Current Time: ${time}`;
  }

  setInterval(updateClock, 1000);
  updateClock(); // Initial call