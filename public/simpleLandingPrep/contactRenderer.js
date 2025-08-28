export async function renderContact() {
  const container = document.querySelector(".mainContainer");

  container.innerHTML = `
      <div class="contact-page">
        <h2>Our Users</h2>
        <div class="loading">Loading users...</div>
        <div class="usersContainer"></div>
        <div class="paginationControls">
          <button class="prevPageBtn">Previous</button>
          <span class="pageIndicator"></span>
          <button class="nextPageBtn">Next</button>
        </div>
      </div>
    `;

  const usersContainer = container.querySelector(".usersContainer");
  const loading = container.querySelector(".loading");
  const prevBtn = container.querySelector(".prevPageBtn");
  const nextBtn = container.querySelector(".nextPageBtn");
  const pageIndicator = container.querySelector(".pageIndicator");

  const USERS_PER_PAGE = 3;
  let currentPage = 1;
  let users = [];
  
  const renderUsers = () => {
    usersContainer.innerHTML = "";
    const start = (currentPage - 1) * USERS_PER_PAGE;
    const end = start + USERS_PER_PAGE;
    const paginatedUsers = users.slice(start, end);

    paginatedUsers.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.className = "userCard";
      userCard.innerHTML = `
          <h5>${user.name}: ${user.username}</h5>
          <p>${user.email}</p>
        `;
      usersContainer.appendChild(userCard);
    });

    pageIndicator.textContent = `Page ${currentPage} of ${Math.ceil(
      users.length / USERS_PER_PAGE
    )}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = end >= users.length;
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await response.json();
    loading.style.display = "none";
    renderUsers();
  } catch (error) {
    usersContainer.textContent = "Failed to load users.";
    console.error("Error fetching users:", error);
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderUsers();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(users.length / USERS_PER_PAGE)) {
      currentPage++;
      renderUsers();
    }
  });
}
