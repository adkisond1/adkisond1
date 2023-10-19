# Knowledge Base

## Table of Contents
- [HTML/JS/CSS](#html--javascript--css)
- [Node.js](#nodejs)
- [Express](#express)
- [MongoDB](#mongodb)
- [Pug Template Engine](#pug-template-engine)
- [Authentication](#authentication)
- [Middleware](#middleware)
- [HTML Forms](#form-markup)

## HTML | Javascript | CSS

These 3 are languages used for web applications and pages.

- **HTML (Hypertext Markup Language)**: Used for structuring web content. Consists of elements, tags, and attributes that define the layout and content of a webpage. Key Topics include:
    - Elements and tags
    - Semantic HTML for improved accessibility
    - Forms and input elements

- **JavaScript**: Another language that focuses primarily on interactivity to the web page. Key Topics:
    - Variables, data types, and operators
    - Functions and event handling
    - DOM manipulation for dynamic content

- **CSS (Cascading Style Sheets)**: Used primarily for styling web pages. This language controls the presentation and layout of HTML elements. Key Topics:
    - Selectors and properties
    - CSS box model for layout
    - Responsive web page design

## Node.js

Node.js, a server-side JavaScript runtime, is known for its non-blocking I/O and event-driven architecture
- **Event-driven architecture**: Operates on events and callbacks allowing for efficient handling of simultaneous connections
- **Non-blocking I/O operations**: Asynchronous, therefore suitable for tasks with high concurrency
- **NPM**: Package manager for Node.js, which helps install third-party libraries and modules

## Express
Express is a flexible web application framework for Node.js. It helps simplify tasks and web application development
- **Middleware**: Middleware functions provide a way to execute code during the request-response cycle. Crucial for tasks like authentication and data validation.
- **Routing**: Allows you to define routes for handling different HTTP methods and URLs, allowing for easily build RESTful APIs and web applications
- **Request and response objects**: Important to understand in order for processing client requests and sending responses.

## MongoDB

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. Important concepts include:

- **Documents, collections, and databases**: MongoDB stores data in documents, which are grouped into collections, and collections are organized within databases.

- **JSON-like data structure**: Data in MongoDB is represented in a format similar to JSON, making it easy to work with unstructured data.

- **Querying using MongoDB queries**: MongoDB provides powerful query capabilities to retrieve and manipulate data efficiently.

## Pug Template Engine

Pug (formerly known as Jade) is a template engine for Node.js used to generate dynamic HTML templates. Key features include:

- **Concise syntax**: Pug uses indentation and minimal punctuation, making it easy to read and write templates.

- **Template inheritance**: Pug supports template inheritance, allowing you to create reusable layout templates with placeholders for dynamic content.

- **Dynamic content rendering**: Pug can insert data dynamically into templates, making it ideal for generating HTML based on data.

## Authentication

Verify identity of a user or system. HTML is not responsible for authentication itself, and instead handled on the server-side, often using languages like Node.js

[Authentication Example](demos/simpleauth.js)

Node.js code for authentication. This checks if a user is logged in and handles user login attempts.

## Middleware

Middleware functions in Express.js are funcions that have access to request and response objects. Can perform various tasks during the lifecycle of an HTTP request. Can invoke next function to pass control onto the next middleware function in a stack.

[Middleware Intro Example](demos/middleware_intro.js)

This code sets up an Express.js server that listens on port 3000. Uses middleware function to log the time a request is received and then passes control to the next middleware or route handler.

## Form Markup

HTML forms are used to create a form on a web page. Takes input from users to provide data, and each input field has a name attribute to identify data on the server. When a user submits the form, the data is sent to the server defined in the 'action' attribute using the HTTP method specified in the 'method' attribute.

[HTML Form Example](demos/pet_example.js)

Code takes user input in the form of Name, Age, and Species and is inputted into the specified fields.