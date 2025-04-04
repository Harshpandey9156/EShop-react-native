🏦 React Native eShopping App

Welcome to the React Native eShopping App — a mobile e-commerce prototype that mimics features similar to Amazon, including a home screen with categories, a search bar, product listing, a wishlist, a cart with quantity control, and an orders section.

✨ Features

🍔 Home Screen with Product Categories

🔍 Search Functionality

🛒 Add to Cart with Quantity Selector

❤️ Wishlist Management

✅ Order Placement

🏛️ Bottom Tab Navigation (Home, Orders, Wishlist, Cart, Profile)

🌐 Project Information

Project Name: eShopping App

Developer: Harsh Pandey

Email: harshpandey21012@gmail.com

💼 Tech Stack

React Native

React Navigation

React Native Vector Icons

React Native Linear Gradient

AsyncStorage

⚙️ Requirements

Tool

Version or Info

Node.js

v16.x or later

npm or yarn

npm 8+ / yarn 1.22+

Android Studio

With emulator set up

Java JDK

JDK 11 or later

VS Code / any IDE

Recommended for dev

Xcode

(for iOS only, Mac users)

🚀 How to Run the App

1. Clone the Repository

git clone https://github.com/Harshpandey9156/eShoppingApp.git
cd eShoppingApp

2. Install Dependencies

npm install
# or
yarn install

3. Android Setup

Launch your Android emulator via Android Studio.

Then run:

npx react-native run-android

4. iOS Setup (Mac only)

cd ios && pod install
cd ..
npx react-native run-ios

Optional: Run with Expo

npm install -g expo-cli
expo start

Then scan the QR code using Expo Go app.

🔧 Folder Structure

eShoppingApp/
├── App.js
├── src/
    ├── components/
    │   ├── Header.js
    │   ├── ProductCart.js
    │   ├── Cart.js
    │   ├── Wishlist.js
    │   └── Order.js
    ├── screen/
    │   └── Homescreen.js
    └── context/
        └── CartContext.js

🚫 Common Issues & Fixes

Problem

Solution

Emulator not launching

Open AVD Manager in Android Studio

Bundler stuck

Press r or restart metro

iOS error with pods

Run pod install again

Cart not updating quantity

Ensure cart state is updated immutably

Product not reflecting

Check if component is receiving updated props

🚀 Future Scope

Integrate real backend (Firebase / Express API)

User authentication (Firebase Auth)

Payment integration (Razorpay, Stripe)

Product ratings & reviews

💖 Thank You

Made with passion by Harsh Pandey.

If you found this project helpful, drop a star ⭐ and feel free to contribute!
