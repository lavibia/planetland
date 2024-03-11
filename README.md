# Planetverse

This repository contains my solution to the [Planets Fact Site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges provide a platform to improve coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Screenshot

![Screenshot](./preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Javascript

### What I Learned

During this project, I learned:

- Employing CSS Grid and Flexbox for responsive layouts.
- Implementing hover states for interactive elements to enhance user experience.

```html
<h1>Some HTML code I'm proud of</h1>
css
Copy code
.proud-of-this-css {
  color: papayawhip;
}
```javascript
Copy code
const proudOfThisFunc = () => {
  phoneMedia.addEventListener("change", function () {
  Array(btnOverview, btnStructure, btnSurface).forEach(btn => {
    if (btn.classList.contains('active')) {
      console.log(btn)
      activateButton(btn.id.slice(3).toLowerCase());
    }
  });
})
}
Continued Development
In future projects, I plan to focus on:

Enhancing my understanding of advanced CSS techniques.
Improving performance optimization strategies.
Exploring more features and libraries in React ecosystem.
Useful Resources
Example resource 1 - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
Example resource 2 - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
Author
Website - Add your name here
Frontend Mentor - @yourusername
Twitter - @yourusername
Acknowledgments
I'd like to acknowledge Frontend Mentor for providing this challenge and the community for valuable feedback and support.