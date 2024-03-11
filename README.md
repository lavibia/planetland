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
- Live [DEMO](https://lavibia.github.io/planetland/)

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
- Display specific elements when users interact with the interface/ screen orientation. (understanding event handling in JavaScript and manipulating the DOM to dynamically show or hide content based on user actions)


```javascript
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
```
### Continued Development
In future projects, I plan to focus on:

#### Accessibility:

Improving accessibility involves making web content usable by everyone, including people with disabilities. I aim to:
- Implement best practices such as providing alternative text for images, ensuring keyboard navigation, and using semantic HTML elements.
- Familiarize myself with WCAG (Web Content Accessibility Guidelines) standards and integrate them into my development process.

#### SEO (Search Engine Optimization):

Enhancing SEO helps websites rank higher in search engine results, leading to increased visibility and traffic. My goals include:
- Improving website performance and speed to enhance user experience and meet search engine ranking factors.
- Implementing structured data markup to provide search engines with additional context about the content.
- Staying updated with the latest SEO trends and algorithms to adapt strategies effectively.

