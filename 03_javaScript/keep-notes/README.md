# Keep Notes

A simple Notes Web App built as a JavaScript and Firebase practice project.

This project was created to practice Firebase Realtime Database integration and CRUD operations through an interactive note-taking application.

## 🚀 Features

- Create notes with a title and body
- Display saved notes from Firebase Realtime Database
- View individual notes
- Update existing note titles and content
- Delete notes
- Store notes in Firebase Realtime Database
- Simple and clean UI for managing notes

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Firebase Realtime Database

## 📚 Firebase Concepts Practiced

- Firebase initialization using `initializeApp()`
- Connecting to Firebase Realtime Database using `getDatabase()`
- Database references using `ref()`
- Adding data using `push()`
- Reading data using `onValue()`
- Updating data using `update()`
- Deleting data using `remove()`

## ⚙️ How It Works

### Create:

Takes a note title and body from the input fields and saves them to Firebase Realtime Database using `push()`.

### Read:

Retrieves saved notes from Firebase using `onValue()` and displays them on the page.

### View:

Allows users to open an individual note and view its title and content.

### Update:

Updates the title or body of an existing note in Firebase using `update()`.

### Delete:

Deletes a selected note from Firebase using `remove()`.

### Navigation:

Uses `localStorage` to store the selected note's index when navigating between the notes list and the individual note view.

## 💡 What I Learned

This project helped me practice integrating Firebase Realtime Database into a JavaScript application and performing CRUD operations.

I learned how to create, read, update and delete database records, retrieve data in real time, render database data in the DOM and navigate between pages while passing the selected note's index through `localStorage`.

---

## Status:

Completed — Firebase Realtime Database & CRUD Practice Project
