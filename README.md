# React Router Dom v6 Nested Route Parameter Issue

This repository demonstrates a subtle bug in React Router Dom v6 when working with nested route parameters and parent routes that might not always be present.  The issue arises when a user navigates directly to a nested route without first visiting the parent route.

## Problem

The `UserProfile` component throws an error if accessed directly via a URL like `/users/123/profile` without first visiting a route that would naturally lead to it (e.g. `/users`).  This happens because the `useParams` hook doesn't find the expected parameter when the parent route isn't in the navigation history.

## Solution

The solution involves using the `useLocation` hook to check if the necessary parent route parameter exists.  If not, redirect to the root or a more appropriate fallback.

## Usage

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

Navigate to `/users/123/profile` to see the issue and observe how the solution addresses it.
