# Expo Image Component Silent Failure

This repository demonstrates a common, yet subtle bug in Expo's `Image` component: silent failure when loading an invalid or inaccessible image URI. The issue is that no error is thrown, making debugging challenging.

## Bug
The `bug.js` file contains an `Image` component that attempts to load an image from an invalid URI.  The application runs without errors, but the image doesn't display, leaving a blank space.

## Solution
The `bugSolution.js` file shows how to mitigate this issue using `onError` prop of the Image component.  This provides a more robust way to handle image loading failures by allowing custom error handling logic.

## How to reproduce
1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run `expo start`.
4. Observe that the image in `bug.js` doesn't load, while in `bugSolution.js` it handles the error gracefully.

This example illustrates the importance of error handling when working with external resources in React Native applications, and the subtle issues that can arise without proper attention to this detail.