import Classes from "../Classes";

import { Component } from "react";

const VideosList = [
    {
      videoTitle: "React.js Basics: Getting Started",
      videoDescription: "An introductory video covering the basics of React.js, including setting up a development environment and creating your first React components."
    },
    {
      videoTitle: "Understanding React Components",
      videoDescription: "Learn about React components, the building blocks of React applications. Explore functional and class components, props, and state."
    },
    {
      videoTitle: "React.js State Management",
      videoDescription: "Explore various state management techniques in React.js, including useState hook, class component state, and state management libraries like Redux."
    },
    {
      videoTitle: "React.js Routing and Navigation",
      videoDescription: "Discover how to implement routing and navigation in React.js applications using React Router. Learn about route configuration, nested routes, and more."
    },
    {
      videoTitle: "React.js Hooks in Depth",
      videoDescription: "An in-depth look at React hooks, including useState, useEffect, useContext, and custom hooks. Learn how to use hooks to simplify your React code."
    },
    {
      videoTitle: "Optimizing React.js Performance",
      videoDescription: "Learn optimization techniques to improve the performance of React.js applications. Cover topics such as virtual DOM, memoization, and code splitting."
    },
    {
      videoTitle: "Working with APIs in React.js",
      videoDescription: "Explore how to fetch data from APIs and integrate them into React.js applications. Learn about asynchronous JavaScript, fetching data with fetch or axios, and error handling."
    },
    {
      videoTitle: "Styling React.js Components",
      videoDescription: "Discover different approaches to styling React.js components, including CSS, CSS-in-JS libraries like styled-components, and CSS frameworks like Bootstrap."
    },
    {
      videoTitle: "Testing React.js Applications",
      videoDescription: "Learn how to write tests for React.js applications using tools like Jest and React Testing Library. Cover unit tests, integration tests, and testing best practices."
    },
    {
      videoTitle: "Deploying React.js Apps",
      videoDescription: "Explore different deployment options for React.js applications, including deploying to hosting platforms like Netlify and Vercel, as well as configuring CI/CD pipelines."
    }
  ];
  

class ClassesRoute extends Component{
    render(){
        return(
            <div>
                {VideosList.map(eachVideo => (
                    <Classes eachVideoDetails = {eachVideo}/>
                ))}
            </div>
        )
    }
}

export default ClassesRoute