// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links li a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Chatbot functionality
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotContainer = document.getElementById("chatbotContainer");
const chatbotClose = document.getElementById("chatbotClose");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotSend = document.getElementById("chatbotSend");
const chatbotMessages = document.getElementById("chatbotMessages");

// Toggle chatbot
chatbotToggle.addEventListener("click", () => {
  chatbotContainer.classList.toggle("active");
});

chatbotClose.addEventListener("click", () => {
  chatbotContainer.classList.remove("active");
});

// Chatbot responses
const chatbotResponses = {
  greeting: [
    "Hello! How can I help you today?",
    "Hi there! What would you like to know?",
    "Hey! Feel free to ask me anything!",
  ],
  about: [
    "Keepa is a Computer Science and Mathematics major at Caldwell University with a strong interest in problem solving and analytical thinking.",
    "Keepa is passionate about learning and exploring how theory and practice connect, especially in technical and quantitative fields.",
    "As an international student, Keepa has developed resilience, adaptability, and a strong work ethic.",
  ],
  projects: [
    "Keepa has worked on programming-based projects using HTML, CSS, and JavaScript to build responsive and interactive web applications.",
    "The projects have strengthened technical skills and understanding of front-end development.",
  ],
  skills: [
    "Technical skills include problem solving, logical reasoning, and programming with a strong foundation in computer science and mathematics.",
    "Soft skills include strong communication, teamwork, adaptability, and a disciplined work ethic.",
  ],
  contact: [
    "You can contact Keepa through the contact form on this website. Just fill out the form with your name, email, subject, and message!",
    "Feel free to use the contact form in the Contact tab to reach out.",
  ],
  default: [
    "I'm not sure how to answer that. Could you ask about Keepa's background, projects, skills, or how to contact?",
    "That's an interesting question! Try asking about Keepa's education, projects, or skills.",
    "I can help you learn more about Keepa's background, projects, technical skills, or how to get in touch!",
  ],
};

function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase();

  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey")
  ) {
    return chatbotResponses.greeting[
      Math.floor(Math.random() * chatbotResponses.greeting.length)
    ];
  } else if (
    message.includes("about") ||
    message.includes("who") ||
    message.includes("background") ||
    message.includes("education")
  ) {
    return chatbotResponses.about[
      Math.floor(Math.random() * chatbotResponses.about.length)
    ];
  } else if (
    message.includes("project") ||
    message.includes("work") ||
    message.includes("portfolio")
  ) {
    return chatbotResponses.projects[
      Math.floor(Math.random() * chatbotResponses.projects.length)
    ];
  } else if (
    message.includes("skill") ||
    message.includes("ability") ||
    message.includes("technical") ||
    message.includes("programming")
  ) {
    return chatbotResponses.skills[
      Math.floor(Math.random() * chatbotResponses.skills.length)
    ];
  } else if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("reach") ||
    message.includes("message")
  ) {
    return chatbotResponses.contact[
      Math.floor(Math.random() * chatbotResponses.contact.length)
    ];
  } else {
    return chatbotResponses.default[
      Math.floor(Math.random() * chatbotResponses.default.length)
    ];
  }
}

function addMessage(text, isUser) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${isUser ? "user-message" : "bot-message"}`;
  const p = document.createElement("p");
  p.textContent = text;
  messageDiv.appendChild(p);
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function sendMessage() {
  const message = chatbotInput.value.trim();
  if (message === "") return;

  addMessage(message, true);
  chatbotInput.value = "";

  // Simulate bot thinking
  setTimeout(() => {
    const response = getBotResponse(message);
    addMessage(response, false);
  }, 500);
}

chatbotSend.addEventListener("click", sendMessage);
chatbotInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Weather App Functionality
async function getWeather() {
  const cityInput = document.getElementById("cityInput");
  const weatherInfo = document.getElementById("weather-info");
  const city = cityInput.value.trim();

  if (!city) {
    weatherInfo.innerHTML =
      '<p style="color: rgba(220, 53, 69, 0.9);">Please enter a city name</p>';
    return;
  }

  weatherInfo.innerHTML =
    '<p style="color: rgba(255, 255, 255, 0.7);">Loading weather data...</p>';

  // Using OpenWeatherMap API (demo - you'll need to replace with your own API key)
  // For demo purposes, we'll use a mock response
  try {
    // Note: Replace 'YOUR_API_KEY' with an actual OpenWeatherMap API key for real functionality
    // const apiKey = 'YOUR_API_KEY';
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    // const data = await response.json();

    // Demo response (simulated)
    setTimeout(() => {
      const demoData = {
        name: city,
        main: {
          temp: Math.floor(Math.random() * 30) + 10,
          humidity: Math.floor(Math.random() * 40) + 40,
        },
        weather: [{ description: "Partly cloudy", main: "Clouds" }],
        wind: { speed: (Math.random() * 10 + 5).toFixed(1) },
      };

      weatherInfo.innerHTML = `
        <div class="weather-result">
          <h3>${demoData.name}</h3>
          <p class="temp">${demoData.main.temp}°C</p>
          <p style="text-transform: capitalize;">${demoData.weather[0].description}</p>
          <p>Humidity: ${demoData.main.humidity}%</p>
          <p>Wind Speed: ${demoData.wind.speed} m/s</p>
          <p style="margin-top: 15px; font-size: 12px; color: rgba(255, 255, 255, 0.5);">* This is a demo. For real weather data, integrate with OpenWeatherMap API.</p>
        </div>
      `;
    }, 500);
  } catch (error) {
    weatherInfo.innerHTML =
      '<p style="color: rgba(220, 53, 69, 0.9);">Error fetching weather data. Please try again.</p>';
  }
}

// Get weather by user's current location
async function getWeatherByLocation() {
  const weatherInfo = document.getElementById("weather-info");
  const cityInput = document.getElementById("cityInput");

  if (!navigator.geolocation) {
    weatherInfo.innerHTML =
      '<p style="color: rgba(220, 53, 69, 0.9);">Geolocation is not supported by your browser</p>';
    return;
  }

  weatherInfo.innerHTML =
    '<p style="color: rgba(255, 255, 255, 0.7);">Getting your location...</p>';

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      weatherInfo.innerHTML =
        '<p style="color: rgba(255, 255, 255, 0.7);">Loading weather data for your location...</p>';

      try {
        // For demo purposes, we'll use a mock response
        // In production, you would use:
        // const apiKey = 'YOUR_API_KEY';
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        // const data = await response.json();

        setTimeout(() => {
          const demoData = {
            name: "Your Location",
            main: {
              temp: Math.floor(Math.random() * 30) + 10,
              humidity: Math.floor(Math.random() * 40) + 40,
            },
            weather: [{ description: "Sunny", main: "Clear" }],
            wind: { speed: (Math.random() * 10 + 5).toFixed(1) },
            coord: { lat: lat.toFixed(4), lon: lon.toFixed(4) },
          };

          weatherInfo.innerHTML = `
            <div class="weather-result">
              <h3>${demoData.name}</h3>
              <p style="font-size: 12px; color: rgba(255, 255, 255, 0.6); margin-bottom: 10px;">📍 Coordinates: ${demoData.coord.lat}, ${demoData.coord.lon}</p>
              <p class="temp">${demoData.main.temp}°C</p>
              <p style="text-transform: capitalize;">${demoData.weather[0].description}</p>
              <p>Humidity: ${demoData.main.humidity}%</p>
              <p>Wind Speed: ${demoData.wind.speed} m/s</p>
              <p style="margin-top: 15px; font-size: 12px; color: rgba(255, 255, 255, 0.5);">* This is a demo. For real weather data, integrate with OpenWeatherMap API.</p>
            </div>
          `;

          // Update city input with approximate location
          cityInput.value = "Current Location";
        }, 500);
      } catch (error) {
        weatherInfo.innerHTML =
          '<p style="color: rgba(220, 53, 69, 0.9);">Error fetching weather data. Please try again.</p>';
      }
    },
    (error) => {
      let errorMsg = "Unable to retrieve your location. ";
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMsg += "Location access denied by user.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMsg += "Location information unavailable.";
          break;
        case error.TIMEOUT:
          errorMsg += "Location request timed out.";
          break;
        default:
          errorMsg += "An unknown error occurred.";
          break;
      }
      weatherInfo.innerHTML = `<p style="color: rgba(220, 53, 69, 0.9);">${errorMsg}</p>`;
    },
  );
}

// Allow Enter key to trigger weather search
document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("cityInput");
  if (cityInput) {
    cityInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        getWeather();
      }
    });
  }
});

// Map Location Functionality
function showMyLocation() {
  const locationInfo = document.getElementById("location-info");
  const mapFrame = document.getElementById("mapFrame");

  if (!navigator.geolocation) {
    locationInfo.innerHTML =
      '<p style="color: rgba(220, 53, 69, 0.9);">Geolocation is not supported by your browser</p>';
    return;
  }

  locationInfo.innerHTML =
    '<p style="color: rgba(255, 255, 255, 0.7);">📍 Getting your location...</p>';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Update map iframe with user's location
      // Using Google Maps embed with coordinates
      const embedUrl = `https://maps.google.com/maps?q=${lat},${lon}&hl=en&z=15&output=embed`;

      mapFrame.src = embedUrl;

      locationInfo.innerHTML = `
        <p style="color: rgba(220, 38, 38, 0.9);">
          ✅ Location found!<br>
          <span style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">
            Latitude: ${lat.toFixed(6)}, Longitude: ${lon.toFixed(6)}
          </span>
        </p>
      `;
    },
    (error) => {
      let errorMsg = "Unable to retrieve your location. ";
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMsg +=
            "Location access denied. Please allow location access and try again.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMsg += "Location information unavailable.";
          break;
        case error.TIMEOUT:
          errorMsg += "Location request timed out. Please try again.";
          break;
        default:
          errorMsg += "An unknown error occurred.";
          break;
      }
      locationInfo.innerHTML = `<p style="color: rgba(220, 53, 69, 0.9);">${errorMsg}</p>`;
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    },
  );
}

// Music Player Functionality
const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("playPauseBtn");
const volumeControl = document.getElementById("volumeControl");
const volumeValue = document.getElementById("volumeValue");

function playPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
    playPauseBtn.style.background =
      "linear-gradient(135deg, rgba(220, 38, 38, 1), rgba(185, 28, 28, 1))";
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "Play";
    playPauseBtn.style.background =
      "linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(185, 28, 28, 0.9))";
  }
}

function stopMusic() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  playPauseBtn.textContent = "Play";
  playPauseBtn.style.background =
    "linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(185, 28, 28, 0.9))";
}

function setVolume(value) {
  audioPlayer.volume = value / 100;
  volumeValue.textContent = value + "%";
}

// Update button when audio ends
if (audioPlayer) {
  audioPlayer.addEventListener("ended", () => {
    playPauseBtn.textContent = "Play";
    playPauseBtn.style.background =
      "linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(185, 28, 28, 0.9))";
  });

  // Initialize volume
  audioPlayer.volume = 0.5;
  volumeControl.value = 50;
}

// Carousel Functionality
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const slides = Array.from(track.children);
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (!track || slides.length === 0) return;

  let currentIndex = 0;

  function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function moveToSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    updateSlidePosition();
  }

  nextBtn.addEventListener("click", () => {
    moveToSlide(currentIndex + 1);
  });

  prevBtn.addEventListener("click", () => {
    moveToSlide(currentIndex - 1);
  });

  // Optional: Auto advance
  // setInterval(() => {
  //   moveToSlide(currentIndex + 1);
  // }, 5000);
});

// 3D Tilt Effect
document.addEventListener("DOMContentLoaded", () => {
  const tiltCards = document.querySelectorAll(".tilt-card");

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
  });
});
