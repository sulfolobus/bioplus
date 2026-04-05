# BioPlus - Life Science Practical Applications Platform

![BioPlus](../assets/logo.svg)

## <span id="greeting">Good morning</span> { #greeting-anchor }

<script>
(function() {
  var hour = new Date().getHours();
  var greeting = "Good morning";
  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 14) {
    greeting = "Good noon";
  } else if (hour >= 14 && hour < 18) {
    greeting = "Good afternoon";
  } else if (hour >= 18 && hour < 22) {
    greeting = "Good evening";
  } else {
    greeting = "Late night";
  }
  var el = document.getElementById("greeting");
  if (el) el.textContent = greeting;

  // Update right-side TOC text as well
  var tocEls = document.querySelectorAll("a[href='#greeting-anchor'], a[href='#greeting-anchor'] span");
  tocEls.forEach(function(e) {
    e.textContent = greeting;
  });
})();
</script>

## Welcome to BioPlus

BioPlus is a popular science platform dedicated to **practical applications of life sciences**. We strive to connect research problems, research teams, and research achievements, making life science knowledge accessible to everyone.

## Our Mission

- **Popularize Life Science Knowledge**: Help more people understand real-world applications of life sciences
- **Bridge Research and Public**: Build a bridge between researchers and the public
- **Promote Technology Transfer**: Showcase the latest research achievements and applications in life sciences

## Core Content

### 🧬 Gene Editing Applications
Explore the latest progress of CRISPR gene editing technology in clinical treatment and genetic disease therapy.

### 🏥 Medical Diagnostics
Learn about cutting-edge medical technologies such as liquid biopsy and AI-assisted diagnosis.

### 💊 Drug Development
Follow innovative drug development fields including antibody drugs and AI-powered pharmaceuticals.

### 🔬 Biotechnology
Explore revolutionary biotechnology including synthetic biology and cell therapy.

## Learning Resources

Start here if you want a more focused path, whether you are building school foundations, preparing for competition training, or moving into university-level life sciences.

<div class="grid cards" markdown>

-   :material-school: **High School Biology**

    ---

    A structured overview of core concepts and common problem types for high school biology study.

    [:material-arrow-right: Enter topic](high-school-biology/index.md)

-   :material-trophy: **Biology Olympiad**

    ---

    Topic-based review, thinking exercises, and advanced reading for systematic competition preparation.

    [:material-arrow-right: Enter topic](biology-competition/index.md)

-   :material-book-open-page-variant: **Life Sciences in Higher Education**

    ---

    A macro-to-micro university-level path with core subject maps, key topics, and public textbook/course links.

    [:material-arrow-right: Enter topic](higher-education-life-sciences/index.md)

</div>

### 🧠 Neurodegenerative Diseases
Research progress on Alzheimer's disease, amnesia, and other neurodegenerative conditions.

### ❤️ Cardiovascular Diseases
Advances in hypertension treatment, including both Western and traditional Chinese medicine approaches.

### 👁 Sensory Dysfunction
Solutions for blindness treatment and brain-machine interface technology.

## Featured Sections

| Section | Description |
|---------|-------------|
| **Research Teams** | Introduction to world-leading life science research teams |
| **Achievements** | Showcase of technology transfer from lab to clinic |
| **Popular Articles** | In-depth popular science articles on life sciences |

## Join Us

Follow us for the latest life science updates!

- 📧 Contact: contact@bioplus.com
- 📱 WeChat: BioPlus
- 🐙 GitHub: BioPlus
