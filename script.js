const stories = [
  {
    category: "UGANDA",
    title: "Welcome to SJM Updates UG",
    text: "This is the first featured story on your new news platform.",
    date: "Today"
  },
  {
    category: "BUSINESS",
    title: "Business and entrepreneurship updates",
    text: "Important business stories, market developments and entrepreneurship news.",
    date: "Today"
  },
  {
    category: "SPORTS",
    title: "Sports updates from Uganda and beyond",
    text: "Sports results, match reports, interviews and verified sporting stories.",
    date: "Today"
  }
];

const grid = document.getElementById("newsGrid");

stories.forEach(story => {
  const card = document.createElement("article");
  card.className = "news-card";

  card.innerHTML = `
    <div class="news-image">SJM Updates UG</div>
    <div class="news-body">
      <span class="tag">${story.category}</span>
      <h3>${story.title}</h3>
      <p>${story.text}</p>
      <div class="date">${story.date}</div>
    </div>
  `;

  grid.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});
