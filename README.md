#  Techy Holographic Calculator

A **futuristic, glass-themed calculator** with **holographic floating buttons**, **electric surge animations**, and a **dynamic lightning effect** when entering numbers. This sleek, modern design enhances user experience by making interactions **visually engaging**.

---

## 🔹 Features

### **Futuristic Glass UI**
- A **semi-transparent, frosted glass effect**.
- **Dynamic reflections** that subtly shift over time.
- **Soft neon glow** around the edges for a high-tech look.

### **Holographic Floating Buttons**
- Buttons appear to **hover** over the glass surface.
- **Electric pulses** flow from the buttons to the display when clicked.
- Smooth **hover and click animations**.

### **Lightning Surge Display**
- When a number is clicked, **energy beam** across the display.
- The effect makes the calculator feel **alive and interactive**.

### **Smart Operator Handling**
- Users must **enter a number before an operator**.
- Clicking an operator replaces the **previous** operator instead of stacking.
- **Toggle positive/negative numbers** using `+/-`.

### **Error Handling & Input Corrections**
- Prevents multiple consecutive operators.
- Handles incorrect input gracefully.
- **Real-time feedback** when entering numbers or operations.

---

## Installation & Setup

### **Clone the Repository**
```sh
git clone https://github.com/yourusername/techy-calculator.git
cd techy-calculator
```

### **Install Dependencies**
```sh
npm install
```

### **Start the Application**
```sh
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Technologies Used
- **React.js** - Component-based UI
- **CSS Animations** - Lightning effects, reflections, and button floating
- **React Hooks (`useState`)** - State management for calculations
- **ESLint** - Ensuring clean and error-free code

---

## File Structure
```
techy-calculator/
│── src/
│   ├── App.js        # Main calculator logic
│   ├── App.css       # Styling & animations
│   ├── index.js      # Entry point
│── public/
│   ├── index.html    # Root HTML file
│── package.json      # Dependencies & scripts
```

---

## Usage
### **Basic Operations**
- Click numbers to enter values.
- Use **`+ - * /`** for basic arithmetic.
- Click **`=`** to compute results.
- Use **`C`** to clear the screen.
- Use **`+/-`** to toggle number sign.

### **Smart Operator Handling**
| Input Sequence  | Stored Expression  |
|----------------|-------------------|
| `5 + *`        | `5 *` *(Replaces `+` with `*`)* |
| `8 / -`        | `8 -` *(Replaces `/` with `-`)* |

---

## Design Highlights
- **Glass Pane:** A frosted glass panel with glowing edges.
- **Buttons:** Floating, soft-glowing neon buttons.
- **Lightning Effect:** Flashes across the display on number input.
- **Reflections:** Subtle movements across the glass.

---

## Future Enhancements
- **Memory Functions:** `M+`, `M-`, `MR` for memory recall.
- **Scientific Functions:** `sin`, `cos`, `tan`, `log`.
- **Theming Options:** Dark mode, cyberpunk, and neon themes.

---

##  Credits
Developed by **Ricardo Lugo** 🚀 with inspiration from modern tech interfaces.

**Suggestions & Contributions are Welcome!** Open a PR or issue on GitHub!

---

##  License
This project is licensed under the **Apache 2.0 License**. Feel free to modify and distribute!


