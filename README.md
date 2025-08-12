# 🌐 Personal Portfolio Website - Sreenitha S

## 📌 Overview
This is my personal portfolio website hosted on **GitHub Pages**:  
**[https://Sreenitha-S.github.io](https://<yourusername>.github.io)**  

It showcases:
- My profile and biography  
- Education, skills, and certifications  
- Projects with a **jQuery gallery**  
- **Weather API** integration  
- **Dev.to AI blog feed**  

---

## 🗂 Website Content & Structure
The website is organized into multiple HTML pages, all linked via a navigation bar.

**Folder Structure:**
```
index.html
pages/
  ├── profile.html
  ├── projects.html
  ├── education.html
  ├── contact.html
  ├── test.html
styles/
  └── style.css
js/
  ├── weather.js
  └── devto.js
images/
  ├── project1.png
  ├── project2.png
```

**Pages:**
- **Home (`index.html`)**  
  Introduction, biography snippet, Dev.to feed, and weather search.
- **Profile (`pages/profile.html`)**  
  Biography, career goals, personal interests.
- **Projects (`pages/projects.html`)**  
  Descriptions of projects and an image gallery using jQuery.
- **Education (`pages/education.html`)**  
  Academic qualifications, skills, certifications.
- **Contact (`pages/contact.html`)**  
  Contact info with a Google Maps embed (social links commented out).

---

## ⚙️ Implemented Features

### 1️⃣ **Dev.to AI Blog Feed**
- **File:** `js/devto.js`
- Uses **Dev.to API** to fetch the latest articles tagged with `"ai"`.
- Displays the top 3 posts with titles, short descriptions, and links.
- Integrated in `index.html` under `<section id="devto-section">`.

**Code Snippet:**
```javascript
let tag = "ai";
let apiUrl = `https://dev.to/api/articles?tag=${tag}`;
```

---

### 2️⃣ **Weather API Integration**
- **File:** `js/weather.js`
- Uses **OpenWeatherMap API** to get live weather for any entered city.
- Displays:
  - City name
  - Temperature (°C)
  - Weather description
  - Humidity
  - Wind speed
- Integrated in `index.html` under `<section id="weather-section">`.

**Code Snippet:**
```javascript
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
```

⚠ **Important:** API key should **NOT** be public. Keep it private or set it locally.

---

### 3️⃣ **jQuery Project Gallery**
- Implemented in `pages/projects.html`.
- Clicking a thumbnail changes the main image dynamically.
- Allows easy browsing of project screenshots.

**Code Snippet:**
```javascript
$(".thumbnails img").click(function(){
  $("#main-image").attr("src", $(this).attr("src"));
});
```

---

## 🚀 Running the Website Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/<yourusername>/<yourusername>.github.io
   ```
2. Open `index.html` in your browser.
3. For **Weather API** to work:
   - Get a free API key from [OpenWeatherMap](https://openweathermap.org/api).
   - Replace `YOUR_OPENWEATHERMAP_API_KEY` in `js/weather.js` with your key.

---

## 🌐 Live Demo
Visit the live portfolio at:  
**[https://Sreenitha-S.github.io](https://<yourusername>.github.io)**

---

## 📄 License
This project is for **educational purposes** only.
