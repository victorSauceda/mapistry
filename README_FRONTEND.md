# Mapistry Frontend Take Home Challenge

## The challenge

This project is a partially completed client/server tic-tac-toe game. Your mission will be to complete the code and produce a working game.

## The rules

- This is an open book/notes challenge. Feel free to search and lookup anything that you think will help you to complete the challenge. Treat this as if it was a ticket you were given rather than a test
- We anticipate you spending approximately 3 - 4 hours to complete the challenge. If you haven't completed the challenge in that amount of time please commit what you have and explain in the commit message where you left off and what steps remain. Pretend you are leaving on vacation and you need to pass off your work to a teammate
- While we are providing a testing framework you are not required to use it. If tests help you in your development process feel free to use any framework you'd like.
- An ideal solution will implement:
  - A game board
    - Displays the current state of the board
    - Allows the user to play a move
    - Indicates the winning line
  - A status indicator
    - Displays when the game is over
    - Displays who won or indicates a tie
  - A control to begin a new game
  - A control to select which player should move first
  - A control to select the difficulty level

## What we are providing

This project has a fully working API with the game playing AI implemented. This API provides 2 endpoints to update the game status (see `api.ts` below)

## Delivery

Please create a repository in Github with the initial commit including only the code we have provided. Then create a branch and open a pull request against the `main` branch of this repository with your work. Treat it like any pull request you would open at work.

## Additional info

Some skeleton components have been provided as a kick-off point:

- [App.tsx](./packages/client/src/components/App.tsx)
- [api.ts](./packages/client/src/api.ts) - This provides async interaction with the API
- [styles](./packages/client/src/styles) - Just the reset styles for various browsers

Note that all API endpoints are prefixed with `/api`, e.g. `/api/begin` instead of just `/begin`. But you can just use the provided API helpers in [api.ts](./packages/client/src/api.ts) to hit the API.

Feel free to change whatever you'd like to suit how you'd solve the problem.

> Reminder: You may use either JavaScript or TypeScript to complete the solution. Please use whatever language you are most comfortable with. We will not give preference to either language choice.
