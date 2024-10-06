// Immediately apply saved theme before the DOM is fully loaded
(function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.classList.add(savedTheme); // Add to <html> to apply before body loads
  }
})();

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to toggle dark mode
function toggleDarkMode() {
  const isDarkMode = body.classList.toggle('dark-mode');
  
  // Update localStorage and toggle icon
  if (isDarkMode) {
    localStorage.setItem('theme', 'dark-mode');
    themeToggle.textContent = '🌞'; // Sun icon for light mode
  } else {
    localStorage.setItem('theme', 'light-mode');
    themeToggle.textContent = '🌙'; // Moon icon for dark mode
  }
}



// Add event listener for theme toggle button
themeToggle.addEventListener('click', toggleDarkMode);

// Apply correct icon state and dark mode after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-mode') {
    themeToggle.textContent = '🌞'; // Show sun icon for dark mode
    body.classList.add('dark-mode'); // Ensure dark mode is active
  } else {
    themeToggle.textContent = '🌙'; // Show moon icon for light mode
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const projects = document.querySelectorAll('.projects-section');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  let currentProject = 0;

  function showProject(index) {
    projects.forEach((project, i) => {
      if (i === index) {
        project.classList.add('active');
      } else {
        project.classList.remove('active');
      }
    });
  }

  prevButton.addEventListener('click', function () {
    currentProject = (currentProject === 0) ? projects.length - 1 : currentProject - 1;
    showProject(currentProject);
  });

  nextButton.addEventListener('click', function () {
    currentProject = (currentProject === projects.length - 1) ? 0 : currentProject + 1;
    showProject(currentProject);
  });

  // Initial display
  showProject(currentProject);
});

window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});


document.addEventListener("DOMContentLoaded", function () {
  const text = "Hello, I'm Shyam Kannan";
  let index = 0;
  const speed = 100; // Typing speed in milliseconds

  // Ensure the text starts empty
  document.querySelector(".typewriter").textContent = "";

  function typeWriter() {
    if (index < text.length) {
      document.querySelector(".typewriter").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    } else {
      // After the typing is done, remove the cursor after a delay
      setTimeout(() => {
        document.querySelector(".typewriter").classList.add("cursor-hidden");
      }, 1000); // Adjust delay for how long you want the cursor to stay after typing
    }
  }

  typeWriter(); // Start the typing effect
});

document.addEventListener('DOMContentLoaded', function () {
  const projects = document.querySelectorAll('.projects-section');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const progressDotsContainer = document.querySelector('.progress-dots');
  let currentProject = 0;

  // Dynamically create progress dots based on the number of projects
  projects.forEach((project, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === currentProject) dot.classList.add('active'); // Set first dot as active initially
    progressDotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function updateProgressDots(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index); // Only activate the current dot
    });
  }

  function showProject(index) {
    projects.forEach((project, i) => {
      project.classList.toggle('active', i === index);
    });
    updateProgressDots(index); // Update dots when the project changes
  }

  prevButton.addEventListener('click', function () {
    currentProject = (currentProject === 0) ? projects.length - 1 : currentProject - 1;
    showProject(currentProject);
  });

  nextButton.addEventListener('click', function () {
    currentProject = (currentProject === projects.length - 1) ? 0 : currentProject + 1;
    showProject(currentProject);
  });

  // Initial display
  showProject(currentProject);
});

document.getElementById('experience-tab').addEventListener('click', function() {
  const experienceSection = document.getElementById('experience-section');
  const educationSection = document.getElementById('education-section');
  
  experienceSection.classList.add('active'); // Add active class for animation
  educationSection.classList.remove('active'); // Remove active class
  
  experienceSection.style.display = 'block';
  educationSection.style.display = 'none';
  
  // Trigger animation for the experience timeline
  setTimeout(() => {
    experienceSection.querySelector('.timeline').classList.add('animate-line');
  }, 10);
  
  this.classList.add('active');
  document.getElementById('education-tab').classList.remove('active');
});

document.getElementById('education-tab').addEventListener('click', function() {
  const experienceSection = document.getElementById('experience-section');
  const educationSection = document.getElementById('education-section');
  
  educationSection.classList.add('active'); // Add active class for animation
  experienceSection.classList.remove('active'); // Remove active class
  
  educationSection.style.display = 'block';
  experienceSection.style.display = 'none';
  
  // Trigger animation for the education timeline
  setTimeout(() => {
    educationSection.querySelector('.timeline').classList.add('animate-line');
  }, 10);
  
  this.classList.add('active');
  document.getElementById('experience-tab').classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');

  menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
  });
});





