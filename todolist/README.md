
About Todolist
A TODOLIST app lets you write, organize, and reprioritize your tasks more efficiently.
They also let you attach notes, links, and files to a task, and many let you see when someone else has completed a task.
In many ways, a good to-do app is the ultimate productivity app.

About The Project
The todolist-react-redux is react app.
It build on React with redux.
Used Bootstrap and Material-UI to markup the project.

This app has five components -
Todolist
Header
AddNewItem
ItemList
UpdateInput
Todolist is main component, Who contain other four components.
Header component store heading details.
AddNewItem component contain one "input field" in form to take task from user and two buttons first is "Add Task" it's action is add task in taskList and second is "Remove All" it's action is remove all tasks from taskList.
ItemList component render entire taskList with two buttons, they available with each task first is "edit/update" button it's action is popup UpdateInput component with selected task and second is "delete" button it's action is delete selected task from the taskList.


UpdateInput component contain one input field in form to show selected task and take details to edit/update task. It contain two button also first is "Update" button it's action is update task and close UpdateInput component and second is "Cancel" button it's action is close UpdateInput component without any changes.



(back to top)



Prerequisites
NPM - Download Link

Install
Clone the todolist-react-redux app project.
Install all dependency which mention in "package.json" file.
npm install
Start todolist-react-redux Project.
npm start



(back to top)



Build With
React
React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
It is maintained by Meta and a community of individual developers and companies.

React-redux
Redux is an open-source JavaScript library for managing and centralizing application state.
It is most commonly used with libraries such as React or Angular for building user interfaces.
Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.

NPM
npm is a package manager for the JavaScript programming language maintained by npm, Inc.
npm is the default package manager for the JavaScript runtime environment Node.js.
It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.

Bootstrap
Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

Material-UI
MUI offers a comprehensive suite of UI tools to help you ship new features faster.
Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.
