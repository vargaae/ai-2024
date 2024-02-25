  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Redux-black?style=for-the-badge&logoColor=white&logo=redux&color=764ABC" alt="redux" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  # AI 2024 APPLICATION

Client Side of the Full Stack AI Analyser and Generator 2024 Application:
- AI Text Analyser - ChatGPT
- AI Detection Image Analyser - clarifai 2.9.1
- AI Image Generator

## 🛠 Front End: 
- React 18.2 
- REDUX
- SASS
- Tachyons
- particles-bg
- react-parallax-tilt

## 🛠 Server Side Repository
<a href="https://github.com/vargaae/image-detect-api" target="_blank"> NodeJS Application on the server side</a>

## AI Detection Image Analysis
<div align="center">
  <img alt="Application image" src="https://cssh.northeastern.edu/informationethics/wp-content/uploads/sites/44/2020/07/ai@2x.png" width="400" />
</div>
<br>
<p align="center">
AI detection image analysis | AI visual inspection tool
application with Clarifai API.
This application analyses the loaded image and makes predictions of concepts, that we can use for example for keywords. I designed and developed the React application for this AI detection tool. It's connected to the server side through the Routes - REST API and through the encrypted auth services.
</p>
<img alt="Application image" src="https://www.clarifai.com/hs-fs/hubfs/logo/Clarifai/clarifai-740x150.png?width=120&name=clarifai-740x150.png" width="150" />
 🚀 Cloud Application Platform: deployed on Heroku (PaaS) 
both BE+FE applications and the DB entirely in the CLOUD:
<img alt="Application image" src="https://blackdeerdev.com/wp-content/uploads/2021/02/Heroku.png" width="250" />


## 🛠 AI IMAGE DETECTION IMAGE ANALYSIS Back End: 
<p align="center">NodeJS express server with PostgreSQL Database
🚀 The project is deployed to Render
</p>

## 🛠 Authentication and Authorization 
are set with email registration-log in system on the server side
Email registration and login - working with SQL database

## AI IMAGE DETECTION IMAGE ANALYSIS Front End Application - Screenshots
 - Image Analysis
 - Sign In
 - Registration

<div align="center">
  <img alt="Application image" src="https://vargaae.hu/images/projects/aiimagedetect.jpg" width="700" />
</div>

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. You must add your own API key in the `src/App.js` file to connect to Clarifai.

You can grab Clarifai API key [here](https://www.clarifai.com/)
**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_RAPID_API_ARTICLE_KEY=
```
**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.