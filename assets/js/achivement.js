const achievements = [
    {
      icon: "bi bi-emoji-smile",
      start: 0,
      end: 15,
      duration: 1,
      label: "Happy Clients",
    },
    {
      icon: "bi bi-journal-richtext",
      start: 0,
      end: 13,
      duration: 1,
      label: "Projects",
    },
    {
      icon: "bi bi-headset",
      start: 0,
      end: 999,
      duration: 10,
      label: "Assistance Hours",
    },
    {
      icon: "bi bi-award",
      start: 0,
      end: 10,
      duration: 1,
      label: "Awards",
    },
  ];

  const container = document.getElementById("achievements-container");

  achievements.forEach((achievement) => {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-6 mt-5 mt-lg-0";

    col.innerHTML = `
      <div class="count-box shadow rounded-pill">
        <i class="${achievement.icon}"></i>
        <span data-purecounter-start="${achievement.start}" data-purecounter-end="${achievement.end}" data-purecounter-duration="${achievement.duration}" class="purecounter"></span>
        <p>${achievement.label}</p>
      </div>
    `;

    container.appendChild(col);
  });

  // Reinitialize PureCounter for dynamic elements
  new PureCounter();