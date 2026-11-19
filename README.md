# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./Screenshot%202026-11-18%20at%2017-24-02%20Frontend%20Mentor%20Password%20generator%20app.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/nottohave/Password-generator)
- Live Site URL: [Add live site URL here](https://nottohave.github.io/Password-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

- I learned how to add a slider bar and four checkboxes on the go. My HTML is not that solid, but I did what I could to build the webpage. I also learnt to add and style the generate button. And I learnt to add label here and there to make things clear.

- I learnt to style the copy image and add eventlistener to it. Then I learnt how to make it copy the password code when user clicked on the image.

```html
<div class="slider-bar">
  <input type="range" name="character-length" id="character-length" min="0" max="20" value="0" step="10">
</div>

<ul class="password-character">
  <li>
    <input type="checkbox" name="uppercase-letter" id="uppercase-letter">
    <label for="uppercase-letter">Include Uppercase Letters</label>
  </li>
```
```css
.password-code {
  font-size: 24px;
  line-height: 32px;
  color: var(--grey-700-)
}

.body img {
  width: 17.5px;
  height: 20px;
}
```
```js
  navigator.clipboard.writeText(password_code_array);
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

- I would like to focus on refactoring my code. I believe the functions and the conditional if can be less repetitive.

### Useful resources

- [MDN](https://www.example.com) - This helped me for small javascript function and DOM values.
- [Medium](https://medium.com/@rakviashvili95/two-methods-of-copy-to-clipboard-by-javascript-60a288136c68) - This is an amazing article which helped me on making the copy image copy the password.

### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- What tools did you use (e.g., ChatGPT, Claude, GitHub Copilot)?
I used Google AI
- How did you use them (e.g., debugging, generating boilerplate, brainstorming solutions)?
I mainly ask small questions, examples of certain functions and small description of it to help me understand how to implement it on my project better.
- What worked well? What didn't?
Some examples work and some ain't. The one that give me errors I manage to fix it. 

## Author

- Github - [nottohave](https://github.com/nottohave/)
- Frontend Mentor - [@nottohave](https://www.frontendmentor.io/profile/nottohave)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

From useful resources and Frontend Mentor.