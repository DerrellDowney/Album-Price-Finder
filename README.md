# Album Price Tracker

This is a React application that allows you to track the prices of your favorite albums. It uses the Discogs API to fetch album data and Firestore to store the albums. The application finds the cheapest price of the album among various online marketplaces.

## Features

1. **Input Favorite Albums**: Input the names of your favorite albums in the application.
2. **Track Prices**: The application tracks the prices of these albums on various online marketplaces.
3. **Cheapest Price**: The application displays the cheapest price of the album among the fetched prices.

## How to Use

1. Clone the repository to your local machine.
2. Install the dependencies using `npm install`.
3. Start the application using `npm start`.

## Code Overview

The application is divided into three main parts:

1. **API Requests**: This part uses `useEffect` to make requests to the Discogs API and fetch album data.
2. **Data Storage**: This part uses Firebase Firestore to store the albums and their prices.
3. **Price Tracking**: This part compares the prices of the albums fetched from various online marketplaces and displays the cheapest price.

## Dependencies

The application uses the following libraries:

- `firebase` for interacting with Firestore.
- `react` and `react-dom` for building the user interface.

## Contribution

Feel free to contribute to this project. Any contributions you make are greatly appreciated. Please fork the repository and create a pull request, or simply drop me an email at `derrell.downey@gmail.com`.


