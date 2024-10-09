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
  const text = "Hello, I'm Shyam Kannan!";
  let index = 0;
  const speed = 100; // Typing speed in milliseconds
  const cursor = '<span class="cursor">|</span>'; // Cursor element

  // Ensure the text starts empty
  document.querySelector(".typewriter").innerHTML = "";

  function typeWriter() {
    if (index < text.length) {
      // Append the current letter and cursor
      document.querySelector(".typewriter").innerHTML = text.substring(0, index + 1) + cursor;
      index++;
      setTimeout(typeWriter, speed);
    } else {
      // After typing is done, remove the cursor
      setTimeout(() => {
        document.querySelector(".cursor").style.display = "none";
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
document.addEventListener('DOMContentLoaded', function() {
  const experienceTab = document.getElementById('experience-tab');
  const educationTab = document.getElementById('education-tab');

  const experienceSection = document.getElementById('experience-list');
  const educationSection = document.getElementById('education-list');

  const experienceTimeline = document.getElementById('experience-section');
  const educationTimeline = document.getElementById('education-section');

  // Function to handle mobile view logic (list view)
  function activateMobileView() {
    // Initially hide both list views
    experienceSection.style.display = 'none';
    educationSection.style.display = 'none';

    // Default to showing the experience list and hiding the timeline
    experienceSection.style.display = 'block';
    experienceTimeline.style.display = 'none';

    // Switch to Experience tab (list view)
    experienceTab.addEventListener('click', function() {
      educationSection.style.display = 'none';
      educationTimeline.style.display = 'none';
      experienceTimeline.style.display = 'none';
      experienceSection.style.display = 'block';
      experienceTab.classList.add('active');
      educationTab.classList.remove('active');
    });

    // Switch to Education tab (list view)
    educationTab.addEventListener('click', function() {
      experienceSection.style.display = 'none';
      experienceTimeline.style.display = 'none';
      educationTimeline.style.display = 'none';
      educationSection.style.display = 'block';
      educationTab.classList.add('active');
      experienceTab.classList.remove('active');
    });
  }

  // Function to handle desktop view logic (timeline view)
  function activateDesktopView() {
    // Initially show the experience timeline and hide the list view
    experienceSection.style.display = 'none';
    educationSection.style.display = 'none';
    experienceTimeline.style.display = 'block';

    // Switch to Experience tab (timeline view)
    experienceTab.addEventListener('click', function() {
      educationSection.style.display = 'none';
      experienceSection.style.display = 'none';
      educationTimeline.style.display = 'none';
      experienceTimeline.style.display = 'block';
      experienceTab.classList.add('active');
      educationTab.classList.remove('active');
    });

    // Switch to Education tab (timeline view)
    educationTab.addEventListener('click', function() {
      experienceSection.style.display = 'none';
      educationSection.style.display = 'none';
      experienceTimeline.style.display = 'none';
      educationTimeline.style.display = 'block';
      educationTab.classList.add('active');
      experienceTab.classList.remove('active');
    });
  }

  // Check screen width to apply mobile or desktop logic
  if (window.innerWidth <= 768) {
    activateMobileView();  // Activate list view for mobile
  } else {
    activateDesktopView(); // Activate timeline view for desktop
  }

  // Recheck screen size on window resize to ensure correct view is applied
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
      activateMobileView();  // Switch to mobile view if resized to smaller screen
    } else {
      activateDesktopView(); // Switch to desktop view if resized to larger screen
    }
  });
});


