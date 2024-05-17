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
- Login Form

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
