# Building-an-Application-Safety-Net-with-Error-Boundaries-in-React

# React Error Boundary Lab

This project demonstrates how to use an Error Boundary in React.

The app is a simple social media dashboard with a weather widget. If the weather widget receives corrupted or missing data, it crashes. The Error Boundary catches the error and shows a fallback message instead of making the whole page go blank.

## How to Run

npm install
npm run dev

## Test Cases

Normal cases:
1. Normal Weather button shows Seattle weather.
2. Hot Weather button shows Phoenix weather.
3. Cold Weather button shows Chicago weather.

Edge cases:
1. Missing Data button crashes only the weather widget.
2. Corrupted Data button crashes only the weather widget.
3. Undefined Data button crashes only the weather widget.

The rest of the dashboard stays visible.
