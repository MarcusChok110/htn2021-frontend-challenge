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

### Local Installation

---

1. Download the repository
2. cd to the directory and `npm install` the dependencies.
3. Run `npm start` to run the application in development mode.
4. The application should now be running on http://localhost:3000. Go to the url and test out anything you want!
