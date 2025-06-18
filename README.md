# React-Stripe Shopping Cart
- Creating React & Stripe **Shopping Cart app**
- **Adding** items to cart in different amounts
- **Removing** items from the cart
- Displaying **item count and the totals** of different items
- Redirect users to Stripe checkout on **Purchase Items** button click
    - In the Stripe checkout, the user will the same items in the same quantities
    - User can make the payment at the Stripe checkout page
- Display Thank you message when the purchase is complete 
- Using **React-Router**, **React-Bootstrap**, basic **Express** backend and **Stripe API**


## Getting Started
### 1. Create React App 
1. Download and Install **Node.js** on project root directory
2. Open project folder in VSCode Integrated Terminal
3. Install Vite on terminal:
    - Run `npm create vite@latest .`
    - Select `React` & Enter
    - Select `JavaScript` & Enter

4. Update `vite.config.js` file:
    - Add `server: { port: 3000, }` in `defineConfig()`

5. Install dependencies:
    1. Open terminal and run `npm install`
    2. Install packages:
        ```
        npm i react-router-dom react-bootstrap bootstrap     
        ```
6. Delete: `public/vite.svg`, `src/assets`, `src/index.css`
    1. Remove `import './index.css'` from `src/main.jsx`
    2. Modify and Remove from `src/App.jsx`:
        ```
        import reactLogo from './assets/react.svg'
        import viteLogo from '/vite.svg'
        ```
    3. Clear contents in `src/App.css`

7. Start frontend server: `npm run dev`

### 2. Set Up Express Backend
1. Create `server/` directory
2. Create `server/package.json` file
    1. Open `server/` in VSCode terminal
    2. Run `npm init -y`
    3. Add start script:
        ```
        "scripts": {
            ...
            "start": "node server.js"
        },
        ```
3. Install packages:
    ```
    npm i express cors dotenv stripe
    ```
4. Create `server/.env` file:
    ```
    # for mock
    MOCK_PAYMENTS=true
    STRIPE_SECRET_KEY=sk_test_dummy_key_123

    # later, for real Stripe
    MOCK_PAYMENTS=false
    STRIPE_SECRET_KEY=sk_test_...
    ```
5. Run backend: `npm start`