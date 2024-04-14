import { Component } from "react";

import Products from "../Products";


const productsList = [
    {
      productName: "React.js Crash Course",
      productDescription: "A fast-paced introduction to React.js covering the basics in a short period of time.",
      priceInRupees: 1000
    },
    {
      productName: "React.js Project Templates",
      productDescription: "A collection of pre-built project templates for React.js applications, saving you development time.",
      priceInRupees: 1200
    },
    {
      productName: "React.js State Management Guide",
      productDescription: "A comprehensive guide on managing state in React.js applications using various techniques and libraries.",
      priceInRupees: 1500
    },
    {
      productName: "React.js Hooks Tutorial",
      productDescription: "An in-depth tutorial on React.js hooks, covering useState, useEffect, useContext, and more.",
      priceInRupees: 800
    },
    {
      productName: "React.js Testing Library",
      productDescription: "A library for testing React.js components efficiently, ensuring the reliability of your code.",
      priceInRupees: 1700
    },
    {
      productName: "React.js Performance Optimization Guide",
      productDescription: "A guide on optimizing the performance of React.js applications for better user experience.",
      priceInRupees: 2000
    },
    {
      productName: "React.js Component Styling Techniques",
      productDescription: "Learn various techniques for styling React.js components using CSS, CSS-in-JS, and styled-components.",
      priceInRupees: 1100
    },
    {
      productName: "React.js Authentication Tutorial",
      productDescription: "A step-by-step tutorial on implementing authentication in React.js applications using JWT and OAuth.",
      priceInRupees: 1800
    },
    {
      productName: "React.js Server-Side Rendering Guide",
      productDescription: "A guide on implementing server-side rendering with React.js for better SEO and performance.",
      priceInRupees: 2200
    },
    {
      productName: "React.js Internationalization (i18n) Support",
      productDescription: "Learn how to add internationalization support to your React.js applications for multi-language support.",
      priceInRupees: 1300
    },
    {
      productName: "React.js Error Handling Techniques",
      productDescription: "Discover various error handling techniques in React.js applications to ensure smooth user experience.",
      priceInRupees: 1600
    },
    {
      productName: "React.js Data Fetching Best Practices",
      productDescription: "Best practices and patterns for fetching data in React.js applications from APIs and databases.",
      priceInRupees: 1900
    },
    {
      productName: "React.js Deployment Strategies",
      productDescription: "Learn different strategies for deploying React.js applications to production environments.",
      priceInRupees: 1400
    },
    {
      productName: "React.js SEO Optimization Guide",
      productDescription: "Optimize your React.js applications for search engines to improve discoverability and ranking.",
      priceInRupees: 2300
    },
    {
      productName: "React.js Redux Integration Tutorial",
      productDescription: "A tutorial on integrating Redux with React.js applications for centralized state management.",
      priceInRupees: 2500
    }
  ];
  
class ProductRoute extends Component {
    render() {
        return(
            <div>
                {productsList.map(eachproduct => (
                    <Products eachproduct = {eachproduct}/>
                ))}
            </div>
        )
    }
}

export default ProductRoute;