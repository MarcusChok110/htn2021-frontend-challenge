# Hack The North 2021 Frontend Challenge

This is a web interface made with React for Hack the North's frontend coding challenge. By default, the application is hosted locally at http://localhost:3000.

## Pages

### Home Page

---

Desktop:

![Home Desktop](https://i.imgur.com/cH8cOtK.png)

Mobile:

![Home Mobile](https://i.imgur.com/UyvBVC2.png)

Notes:

- Users can search for events in the search bar and filter by event types (Activity, Workshop, etc) and it will update the view in real-time
- The Logout button will be replaced by a Login button when the user is not logged in and private events will not be displayed.
- Users can click on the event card or the "Learn More" button to be redirected to a page to learn more about that specific event.

### Event Page

---

Desktop:

![Event Desktop](https://i.imgur.com/u6CrWJd.png)

Mobile:

![Event Mobile 1](https://i.imgur.com/OluenZ4.png)
![Event Mobile 2](https://i.imgur.com/ocCOyaC.png)

Notes:

- Private details, such as the super secret hacker link, related private events, and a private page itself cannot be viewed if a user is not logged in.

### Login Page

---

Desktop:

![Login Desktop](https://i.imgur.com/v0MsmoX.png)

Mobile:

![Login Mobile](https://i.imgur.com/V5h0Cs0.png)

Notes:

- If the user inputs the wrong combination of username and password, a snackbar appears on the bottom right informing them of their error.
- On successful login, the user is redirected to the home page.

### Miscellaneous Features

---

- The following are miscellaneous components that can appear on multiple screens. The mobile view is shown to keep things concise, but they also appear on desktop views.

#### Snackbars on bottom of screen:

![Incorrect Login Snackbar](https://i.imgur.com/tlHyvWe.png)

#### Profile picture tooltips on hover:

![Profile Picture Tooltip](https://i.imgur.com/pwdZUuv.png)

## Local Installation

---

1. Download the repository.
2. cd to the directory and `npm install` the dependencies.
3. Run `npm start` to run the application in development mode.
4. The application should now be running on http://localhost:3000. Go to the url and test out anything you want!

## Writeup

1. Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?

### Structure

---

The folder structure of the project is as follows:

```
src
└───components
    └───Form
    └───Layout
    └───Misc
└───contexts
└───pages
    └───events
    └───home
    └───login
└───reducers
└───routes
└───types
└───utils
    └───api
    └───helpers
```

The folder structure is mirrors React's status as a component-based library. Everything is kept modular so that it's easier to expand and test if needs arise in the future. In addition, I believe React programmers will find the structure intuitive because features of React are mapped to their corresponding folders, such as contexts for the Context API, reducers for functions using the useReducer hook, etc.

- Since React is component based, I made a components folder for reusable components that can appear across multiple pages.
  - The Form folder contain all components that relate to form controls, such as a TextField and Select inputs.
  - The Layout folder contains components that are shown across all pages, such as the Header that appears at the top of all pages.
  - The Misc folder contains all components that do not otherwise fit into other categories.
- The contexts folder contains the contexts created from the React Context API to be provided to all the routes of the application. Currently, an EventContext is used to pass the events obtained from the API call to all pages, and a UserContext is used to provide the user login status to the pages. This makes it easier to pass state aside from passing props through multiple components.
- The pages folder is based on the routing system in Next.js, where the URL is mapped to the name of the structure. This also makes it easier to reason about what needs to be rendered at each URL. For example, the component at /home/index.tsx is rendered at /home, /events/[id].tsx is rendered at /events/:id, etc.
  - The home page was designed to show basic information about all the events, such as the name and type of the event, without needing to go to a dedicated page. A search bar and filter select input is provided for enhanced user experience, making it easy for users to find the event they want. If they want to learn more, the user can click on the event card to get linked to the event page for all the information provided on the event.
  - The event page provides more detailed information about the event, such as the speakers, related events, the full description, and any relevant links. If attempting to view a private event without being logged in, a user will be shown an Unauthorized component instead.
  - The login page is a standard page where a user can input their username and password to log in to the website.
- The reducers folder contains all pure reducers used for the useReducer hook in the application. I decided to handle the user state in a reducer so that it can be easily expanded upon when/if it is turned into a full authentication system as opposed to regular state.
- The routes folder contains the routes defined by React-Router to be displayed in the pages. It is kept in its own folder so that new routes can easily be added (in other files if necessary, and then all put into the index file) when the application grows larger.
- The types folder contains TypeScript definitions that can be shared across other files. Currently, it holds the endpoint response types.

### Tools

---

#### TypeScript

- I decided to use TypeScript instead of JavaScript because I feel that TypeScript's type system is more robust than the dynamically typed JavaScript. The strict typing of TypeScript means that the code is less prone to errors, as the compiler makes sure the types and functions match. In addition, I like the coding experience better as there is better auto-completion and semantic typing as opposed to JavaScript.

#### React

- React happens to be the library I am most comfortable with when designing frontend applications. I was able to envision the structure of the application, including the use of the Context API and hooks, before I started coding, and thus it was easy for me to translate that design into code. In addition, the popularity of React means that there is plenty of documentation and resources online that can help with a tricky feature. Moreover, I saw it as a chance to practice with the library and features I would be using if I did join the frontend team.

#### Material-UI

- I used the Material-UI React component library to simplify the styling process. This also ensured that my application would be responsive and consistently styled, as all the components are built on top of a centralized library. In addition, if I wanted to customize the styling further, the customization provided by Material-UI, such as their JSS style hooks and customizable theme providers, makes the process easy and extensible.

### Problems

---

1. One of the problems I had was deciding how to incorporate the speakers' profile pictures into the event page. I wanted the screen to be consistent across all platforms, and some speakers didn't have profile pictures, so I needed to make sure that the display of the speakers were consistent. Ultimately, I decided to make the speaker's name into a hoverable element, which then displayed their profile picture if the cursor was over the name. This kept the names with and without profile pictures consistent and did not disrupt the layout of the page.
2. Another problem I had was when making the home page. I wanted to include a short snippet of the description of each event on their card, and initially I used a method to substring the description to X length. However, the description would still be too long or too short depending on the size of the screen. I solved this problem by using css styles instead of JavaScript, namely a set width of 60vw and text-overflow set to ellipsis (among other styles) to truncate the description depending on the size of the screen.
