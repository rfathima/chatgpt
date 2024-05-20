### chatgpt Project
1.npx create-react-app chatgpt
2.npm start
3.Learn tailwindcss

### Tailwindcss
1.Goto https://tailwindcss.com/
2.click getstarted
3.go to Framework Guides
4.click Create React App section
5.Follow the steps for installation
i)npm install -D tailwindcss
  npx tailwindcss init
ii)Add the paths to all of your template files in your tailwind.config.js file.
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
iii)Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
iv)Tailwind installed, now npm run start
v) <h1 className="text-3xl font-bold underline">
      Hello ChatGPT!
    </h1> 
    Try this and check....

#### Plan the website (its like netflix)
- Create react app
- Configured Tailwindcss
- Header
- Routing of App
- Login Form
- Sign up Form
- Form validation
- useRef Hook
- here for form validation am using regex , but for react app form validate we can use framework as well (https://formik.org/) its a best one
- Authentication (google firebase i tried due to some PSSecurityException i don't want do it!) - for Hoisting!
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Update Store with movie Data
- Planning for Main Container & secondaru container
- Fetch Data for trailer video
- Update store with Trailer Video data
- Embded the youtube video
- make it autoplay and mute
- Tailwind  Classes to make Main Container looks good
- 

## Redux
Redux providing the state management (zustand also the most popular labirary for state management)
React and Redux is different library (Redux is not only used with react , its also used with other libraries. but its popularly used with react)
when developing large scale application, we mantaine more data we can use redux, 
Redux offers easy debugging

Here using two redux lib
i) Redux Toolkit
ii) React-Redux
 Architecture:
 i) If we click on the button it will dispatch the action and its call the reducer fuction which updates slice of a redux store.
 ii)Now i need to read the data from cart store -> with help of selector
 iii)For example on click of ADD button i want to update the cart like 3,4,5.....
 for that our header component of cart "subscribing to the store" using selector

## Redux Toolkit
    - Redux Toolkit (npm redux toolkit)
      -Install @reduxjs/toolkit  and react-redux
      -But our store - in utils create a app store with the help of configurestore and add slices to it
      and in app.js import provider from react-redux
      and in app.js import appstore from "./utils/appStore" (<Provider store={appStore}</Provider>)
      -connect our store our app
      -Slice (cartSlice) 
      -Dispatch (action)
      -Selector -(subscribing to the store using a sector) ex: const cartItems = useSelector((store) => store.cart.item);
      -vanilla (older) Redux => Dont mutate the state, reurning was madatory
      -Redux Toolkit - We have to mutate the state, no need to return anything
      -Redux uses immer library to do all the mutate the state
      -Redux devtools

## Features
-Login/Signup
    -Sign In/ sign up From
    -Redirect to Browse Page
-Browse (after authentication)
    -Header
    -Main Movie
        -Tailer in Background
        -Title & description
        -Movies list * N
-NetflixGPT
    -Search Bar
    -Movie Suggestions

## Github Repo: 
https://github.com/rfathima/chatgpt.git

git remote add origin https://github.com/rfathima/chatgpt.git
git branch -M main
git push -u origin main
