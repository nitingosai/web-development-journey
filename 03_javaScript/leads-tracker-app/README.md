# Leads Tracker

A simple Leads Tracker built as a JavaScript practice project.

This project was created to practice JavaScript fundamentals, basic DOM manipulation, event handling and localStorage through a simple Chrome extension.

## 🚀 Features

- Save leads entered through the input field
- Save the current browser tab URL
- Prevent duplicate leads
- Display saved leads as clickable links
- Open saved leads in a new tab
- Store leads using localStorage
- Restore saved leads when the extension is opened again
- Delete all saved leads
- Simple and minimal extension UI

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Chrome Extension API

## 📚 JavaScript Concepts Practiced

- Constants
- Functions and function parameters
- `addEventListener()`
- `input.value`
- Template strings
- Updating HTML content with `innerHTML`
- `localStorage`
- JSON object
- `JSON.stringify()`
- `JSON.parse()`
- Working with browser tab data

## ⚙️ How It Works

### Save Input:
Takes the value entered in the input field and saves it as a lead after checking that the input is not empty and the lead does not already exist.

### Save Tab:
Gets the URL of the currently active browser tab and saves it as a lead while preventing duplicate URLs.

### Display Leads:
Saved leads are rendered as clickable links using template strings and `innerHTML`. Clicking a lead opens it in a new browser tab.

### localStorage:
The leads array is converted into JSON and stored in localStorage so that saved leads remain available when the extension is opened again.

### Delete All:
Clears the saved leads and updates the displayed list.

## 💡 What I Learned

This project helped me practice JavaScript fundamentals by building a simple Chrome extension that stores and manages leads.

I learned how arrays, functions, conditions, event handling, template strings, basic DOM manipulation, localStorage and JSON can work together to create an interactive browser extension.

---

## Status:

Completed — JavaScript Fundamentals Practice Project