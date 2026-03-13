# 🔍 Animated Expanding Search Box

A stylish, interactive search bar featuring smooth CSS3 transitions and a dynamic "active" state. This component expands from a circular icon into a full-width input field using an elastic animation effect.

## ✨ Features

_**Smooth Animations**_: Utilizes cubic-bezier transitions for a playful, "pop" expanding effect.

_**Dynamic Data Feedback**_: Captures and displays user input below the search box upon activation.

_**Clean UI**_: Centered layout using CSS Grid, designed with the modern Poppins typeface.

_**Icon Integration**_: Uses FontAwesome for intuitive search and close actions.

_**Vanilla Stack**_: Built with pure HTML, CSS, and JavaScript—no external frameworks required.


## 🛠️ Built With

_**HTML5**_  :	Structural markup and semantic elements

_**CSS3**_    :	Custom styling, cubic-bezier animations, and layout

_**JavaScript**_ : DOM manipulation and state toggling logic

_**FontAwesome**_ :	Vector icons for UI elements

_**Google Fonts**_ : "Poppins" typeface for a modern look


## 📂 Project Structure

**Plaintext**


├── **index.html**      # Markup and structure

├── **searchbox.css**   # Styles, transitions, and layout

└── **searchbox.js**   # Logic for active/inactive states


## 💡 How It Works

_**The Expansion**_: When the ```.search-btn``` is clicked, JavaScript toggles an ```.active``` class across the container, input, and buttons.

_**CSS Magic**_: The CSS detects the ```.active``` class and transitions the width and opacity over 0.5 seconds.

_**Input Logic**_: If the search bar contains text when clicked, the script captures that value and displays it within the ```.search-data``` container.

_**Reset**_: Clicking the "X" (cancel button) removes all active classes and clears the input field to reset the UI.


## 🎨 Customization

The design is highly modular. You can easily tweak the look and feel by modifying these specific CSS properties:

_**Theme Color**_: Change the ```#08ae31``` hex code in ```body``` and ```.search-btn.active``` to your preferred brand color.

_**Animation Speed**_: Adjust the ```0.5s``` value in the ```.search-box``` and ```input``` transitions to make the expansion faster or slower.

_**Elasticity**_: The ```cubic-bezier(0.68, -0.55, 0.265, 1.55)``` creates the "bounce" effect. You can replace this with ```ease-in-out``` for a smoother, professional glide.

## ⚙️ Key Logic Explained

To help others learning from this code, here is the core logic flow:


_**Click Search Icon**_ : Toggles ```.active``` class; expands width from ```60px``` to ```350px```.

_**Input Validation**_ : JS checks ```searchInput.value```; if not empty, it updates the ```.search-data``` div.

_**Click Cancel Icon**_ : Removes all ```.active``` classes and resets the ```input.value``` to an empty string.

>[!IMPORTANT]
>Educational Perspective > _This repository is a technical demonstration created for educational purposes and portfolio purposes. It focuses on the intersection of UI Design and Front-End Logic.Feel free to experiment with the code to learn more about web animations!_

