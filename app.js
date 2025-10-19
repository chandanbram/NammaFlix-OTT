document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('languageSelect');

  // -----------------------------
  // Populate movie cards
  // -----------------------------
  function populateMovies() {
    for (const categoryId in movies) {
      const container = document.getElementById(categoryId);
      if (!container) continue;
      container.innerHTML = "";

      movies[categoryId].forEach(movie => {
        const card = document.createElement("div");
        card.className = "card";

        // Store data attributes for language switching
        card.dataset.titleEn = movie.nameEn;
        card.dataset.titleKn = movie.nameKn;
        card.dataset.descEn = movie.desEn;
        card.dataset.descKn = movie.desKn;

        const img = document.createElement("img");
        img.className = "card-img";
        img.src = movie.image;

        const body = document.createElement("div");
        body.className = "card-body";

        const title = document.createElement("h2");
        title.className = "name";
        title.textContent = movie.nameEn;

        const desc = document.createElement("h6");
        desc.className = "des";
        desc.textContent = movie.desEn;

        body.appendChild(title);
        body.appendChild(desc);
        card.appendChild(img);
        card.appendChild(body);
        container.appendChild(card);

        // 🟢 Click to open modal
        card.addEventListener("click", () => openModal(movie));
      });
    }
  }

  populateMovies();

  // -----------------------------
  // Language Switch
  // -----------------------------
  function applyLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      const kn = el.dataset.kn;
      el.textContent = (lang === 'kn' && kn) ? kn : el.dataset.en;
    });

    document.querySelectorAll('.card').forEach(card => {
      const titleEl = card.querySelector('.name');
      const descEl = card.querySelector('.des');
      const enTitle = card.dataset.titleEn;
      const knTitle = card.dataset.titleKn;
      const enDesc = card.dataset.descEn;
      const knDesc = card.dataset.descKn;

      if (titleEl) titleEl.textContent = (lang === 'kn' && knTitle) ? knTitle : enTitle;
      if (descEl) descEl.textContent = (lang === 'kn' && knDesc) ? knDesc : enDesc;
    });
  }

  langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
  applyLanguage(langSelect.value || 'en');

  // -----------------------------
  // Watchlist toggle
  // -----------------------------
  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('watchlist-btn')) {
      const btn = e.target;
      const pressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!pressed));
      btn.textContent = pressed ? 'Add to watchlist' : '✓ Added';
      btn.style.color = pressed ? 'rgba(255,255,255,0.5)' : '#1f80e0';
    }
  });

  // -----------------------------
  // Card sliders
  // -----------------------------
  const cardContainers = document.querySelectorAll('.card-container');
  const preBtns = document.querySelectorAll('.pre-btn');
  const nxtBtns = document.querySelectorAll('.nxt-btn');

  cardContainers.forEach((container, i) => {
    const containerWidth = container.getBoundingClientRect().width;
    nxtBtns[i].addEventListener('click', () => container.scrollLeft += containerWidth - 200);
    preBtns[i].addEventListener('click', () => container.scrollLeft -= containerWidth - 200);
  });

  // -----------------------------
  // Menu toggle
  // -----------------------------
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
  window.addEventListener('resize', () => { if (window.innerWidth > 768) navLinks.classList.remove('active'); });
});

// -----------------------------
// Light/Dark mode toggle
// -----------------------------
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
});

// -----------------------------
// Filter functionality
// -----------------------------
const filterButtons = document.querySelectorAll('.filter-btn');
const movieRows = document.querySelectorAll('.movie-row');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    movieRows.forEach(row => {
      const rowId = row.querySelector('.card-container').id;
      row.style.display = (filter === 'all' || rowId === filter) ? 'block' : 'none';
    });
  });
});

// -----------------------------
// Modal Logic 
// -----------------------------
const modal = document.getElementById("movieModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");
const modalVideo = document.getElementById("modalVideo");
const fullscreenBtn = document.getElementById("fullscreenBtn");

function openModal(movie) {
  modalImg.src = movie.image || movie.img;
  modalTitle.textContent = movie.nameEn || movie.name || "Untitled";
  modalDesc.textContent = movie.desEn || movie.des || "";
  modal.classList.add("active");
  modalVideo.currentTime = 0;
  modalVideo.play();
}

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  modalVideo.pause();
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    modalVideo.pause();
  }
});

// Fullscreen toggle
fullscreenBtn.addEventListener("click", () => {
  if (modalVideo.requestFullscreen) modalVideo.requestFullscreen();
});

