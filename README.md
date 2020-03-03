# Smart Car Demo

## Summary

This application is an API explorer which allows the user to interact with a given API through a user interface.

This application was built using the following libraries/frameworks:

..* React.js via create-react-app
..* axios

## Installation

To test locally
1. Clone the repo for https://github.com/kedpak/smartcar_demo
2. In the root of the directory install dependencies with
```
npm install
```
3. Once installation is complete start the local react server with
```
npm start
```
4. Naviate to localhost:3000 in browser to test application.

## Instructions

1) User must input the request body parameters through the form inputs.
..* email must be between 3 - 24 characters
..* full name is a required field
..* phone number must be only integers and dashes in the following pattern: 000-000-0000
If any of the above critera does not fit, an alert will be notified to the user informing them about it.

[<img src="https://ibb.co/mhn305r">](https://ibb.co/mhn305r)

2) Click on the send request button. This should return either a sucessful 201 response with a JSON in the response box, or an alert error if the request failed.

[<img src="https://ibb.co/P6N6wh" >](https://ibb.co/P6N6whL)


