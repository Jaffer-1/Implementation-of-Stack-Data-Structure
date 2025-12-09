# Understanding Stack - Data Structure Visualization

This project demonstrates the real-world use of the Stack data structure through two practical simulations: a Notification Center and a Text Editor with Undo/Redo functionality.

The goal of the project is to help learners understand how the Last-In, First-Out (LIFO) principle works in real applications. The project includes a simple web interface for visualization and C++ source code for the backend logic.

---

## Project Overview

The project contains two main components:

1. Notification Stack  
   A mobile-style simulation that shows how notifications are added, viewed, and removed using stack operations.

2. Text Editor  
   A basic document editor that uses two stacks to perform Undo and Redo operations.

Both components help explain how stacks behave in real-world software.

---

## Features

### 1. Notification Stack Simulator

- Add a new notification to the top of the stack  
- Remove the most recent notification  
- Preview the top notification without removing it  
- Visual interface designed to resemble a phone lock screen  
- Internal action log that records each operation with a timestamp

### 2. Text Editor with Undo and Redo

- Uses two separate stacks: UndoStack and RedoStack  
- Typing produces a new state pushed onto the UndoStack  
- Undo operation moves the latest state to the RedoStack  
- Redo operation restores a previously undone state  
- Redo history clears automatically when new text is typed after an undo

---

## Technology Used

| Component        | Technology         | Description                                    |
|------------------|--------------------|------------------------------------------------|
| Frontend         | HTML, CSS, JavaScript | Web interface and visualization              |
| Backend Logic    | C++ (STL)          | Core stack logic using `std::stack`           |
| Typography       | Inter Font         | Clean and minimal user interface              |

---

## How to Run

### Running the Web Interface
Open the file `index.html` in any modern web browser.  
The project runs entirely on the client side and requires no installation.

### Running the C++ Logic
Open the `.cpp` files using any C++ IDE or editor.  
Compile and run the program to see a console-based demonstration of the stack operations.

---

## Why Stacks?

### Notification System  
The most recent notification is always shown first. Older notifications appear underneath. This naturally follows the LIFO model.

### Undo/Redo System  
Undo moves backward in the editing timeline. Redo moves forward. Two stacks allow these actions to be performed quickly and efficiently.

---

## Usage Instructions

- Use the navigation bar to switch between the Notification Stack and the Text Editor  
- In Notification mode: enter the app name and message, then click the Push button  
- In Editor mode: type text, press Enter, then use Undo or Redo as needed  
- The Action Log displays the internal operations for both modules

---

## Credits

Developer: Shaik Jaffer  
Course: Coding Skills - I (B.Tech, 3rd Semester)  
Submission Date: November 9, 2025

