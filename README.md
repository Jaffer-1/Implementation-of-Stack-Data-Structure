# 🏗️ Understanding Stack: Data Structure Visualization

## 📖 Project Overview

**Understanding Stack** is an interactive project designed to demonstrate the real-world utility of the **Stack** data structure (Linear Data Structure).

The project focuses on the **LIFO (Last-In, First-Out)** principle through two distinct, practical simulations:

**Notification Center:** A mobile-style interface demonstrating how alerts stack up on a lock screen.

**Text Editor:** A functional document editor demonstrating how **Undo/Redo** operations rely on stacks.

This project features a clean, responsive GUI for visualization and includes pure C++ source code for the backend logic.

---

## 🚀 Features

### 1\. 🔔 Notification Stack (The Simulator)

**Real-World Metaphor:** Simulates a smartphone lock screen where new notifications appear on top.

**Operations:**

**PUSH (Receive):** Add a new notification (App Name + Message) to the top of the stack.

**POP (Clear):** Dismiss the most recent notification (LIFO logic).

**PEEK (Preview):** Highlight the top notification without removing it.

**Visuals:** Features a realistic phone interface with glassmorphism cards and swipe-to-dismiss animations.

**Action Log:** A hidden system log tracks every event (Received, Dismissed, Peeked) with timestamps.

### 2\. 📝 Text Editor (The Application)

**Two-Stack Algorithm:** Uses `UndoStack` to store past states and `RedoStack` to store future states.

**Functionality:**

**Write:** Types text into the document (pushes state to Undo Stack).

**Undo:** Reverts to the previous state (pops from Undo, pushes to Redo).

**Redo:** Re-applies the reverted change (pops from Redo, pushes to Undo).

**Smart Logic:** The Redo history is automatically cleared if the user writes new text after undoing, perfectly mimicking modern software behavior.

---

## 🛠️ Technology Stack

| **Component** | **Technology** | **Description** |
| --- | --- | --- |
| **Frontend GUI** | **HTML5, CSS3, JS** | Responsive dashboard with animations, flexbox layouts, and DOM manipulation. |
| **Backend Logic** | **C++ (STL)** | Standalone `.cpp` files implementing the core logic using `std::stack`. |
| **Design** | **Inter Font** | Clean, professional typography using Google Fonts. |

---

## 💻 How to Run

### 1\. Running the GUI (Web Interface)

Simply double-click `**index.html**` to open it in any web browser (Chrome, Edge, Safari).

**No installation required.** It runs entirely client-side.

### 2\. Running the C++ Logic

Open the `.cpp` files in VS Code or any C++ IDE.

Compile and run to see the console-based version of the logic:

---

## 🧠 Data Structure Logic

### Why use a Stack?

**For Notifications:**

Notifications are temporal. The most recent alert is the most relevant.

You typically address the top one before moving to the older ones beneath it. This is a natural **Stack (LIFO)** behavior.

**For Undo/Redo:**

Editing is a linear timeline.

When you Undo, you are moving backward in time. To go "Forward" (Redo), you need a temporary storage space for the states you just left.

Two Stacks allow O(1) time complexity for instant Undo/Redo operations.

---

## 📸 Usage Guide

**Switching Modes:** Use the navigation tabs at the top to toggle between "Notification Stack" and "Text Editor".

**Notification Mode:** Enter an App Name (e.g., "WhatsApp") and Message, then click **Push**. Use **Pop** to clear it.

**Editor Mode:** Type text and hit Enter. Use the large **Undo** and **Redo** buttons to navigate your typing history.

**Logs:** Click "View Action Log" in either mode to see the backend operations happening in real-time.

---

## 📝 Credits

**Developed By:** M. NagaSai Rishi

**Course:** Coding Skills - 1 (B.Tech 3rd Sem)

**Submission Date:** November 9th