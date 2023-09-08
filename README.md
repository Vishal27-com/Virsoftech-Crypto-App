### 1. Introduction
#### This app provides users with many crypto at the current price and users can add it to their cart.
### 2. Setup Instructions
#### Clone the repository
`git clone link`
#### Navigate to the project directory
`cd Virsoftech-Crypto-App` 
#### Install dependencies
`npm install`
#### Start the app
`npm run dev`
### 3. Project Structure
```
Temperature-Converter/
|-- src/
|   |-- Components/
|      |-- CryptoCard/
|           |-- CryptoCard.jsx
|           |-- CryptoCard.module.css
|      |-- CryptoCart/
|           |-- CryptoCart.jsx
|           |-- CryptoCart.module.css
|      |-- CryptoList/
|           |-- CryptoList.jsx
|           |-- CryptoList.module.css
|   |-- Context
|           |-- CryptoContext.jsx
|   |-- App.css/
|   |-- App.jsx/
|   |-- main.jsx/
|-- .eslintrc.cjs
|-- .gitignore
|-- index.html
|-- package.json
|-- vite.config.js
```
### 4. Components
#### CryptoCard :- It is layout of single crypto card.
#### CryptoCart :- This is a cart where user can add their crypto.
#### CryptoList :- It lists the all cryptocurrency.
### 5. State Management
#### The app uses React's built-in useContext for state management.
### 6. Styling 
#### CSS Modules are used for styling.
### 7. Functionality
+ Type the Quantity of crypto the user wants.
+ Add crypto to the cart.
+ Delete crypto from the cart.
+ Get the sum of the price of crypto in the cart.
### 8. Deployment
#### The app is deployed over Netlify.
[App Link](https://vishal-crypto-app.netlify.app/)

