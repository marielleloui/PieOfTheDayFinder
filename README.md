# Pie of the Day Finder
---
## Author
#### Marielle Louise Cruz
* https://github.com/marielleloui
* https://linkedin.com/in/marielle-louise-cruz

## About the Application

This __Pie of the Day Finder__ is a simple web application built using __React__, and other tools and technologies which will be further described in this README. The application retrieves the following information from the two API endpoints, https://pie.now.sh/pies and https://pie.now.sh/stores:

* __name__ of the pie
* __price__ of the pie
* __quantity__
* __store name__
* __address__
* __rating__
* __contact number__

Only the information regarding *Pies of the Day* (i.e. `"isPieOfTheDay": true`) are retrieved from the APIs and displayed on the web application.

*(When the application is loaded for the first time, it may take a while for the API data to be retrieved.)*

![Home View](https://github.com/marielleloui/PieOfTheDayFinder/blob/master/public/images/piefinder-home-view.png)

## Features
* Retrieves and consolidates *pie* and *store* information from two API endpoints
* Displays *Pie of the Day* information via expandable and collapsible UI cards
* Paginates the filtered pies list using pagination controls, based on a 5 pies per page limit
* Enables non-case sensitive searching of pie names via a dynamic search bar

## Technology Stack
* __[React](http://facebook.github.io/react/)__ for building the UI and managing the presentation logic of the application
* __[Create React App](https://github.com/facebook/create-react-app)__ for providing a modern build setup for React
* __[Axios](https://github.com/axios/axios)__ for making HTTP GET requests to the API
* __[Material UI](https://material-ui.com/)__ for implementing Google's Material Design on some application components
* __[Babel](https://babeljs.io/)__ for compiling ES2015+ down to ES5 compatible code
* __[WebPack](http://webpack.github.io/)__ for bundling code down to a single file and enabling hot module reloading
* __[Jest](https://jestjs.io/)__ + __[Enzyme](https://airbnb.io/enzyme/)__ for testing
* __[Heroku](https://www.heroku.com/)__ for running a live version of the application in the cloud
* __[Git](https://github.com/)__ for tracking changes in the source code
* __[VSCode](https://code.visualstudio.com/)__, code editor used to build the application

## Searching and Pagination
The entire searching logic was done within the application itself, as the base API, https://pie.now.sh, does not support searching. An alternative approach to this is to create a db.json file, use a [JSON server](https://github.com/typicode/json-server), and immediately filter search results using an AJAX call to the server.

Similarly, pagination logic was also completely done within the application, without the help of an API. The base API (`https://pie.now.sh/pies?_page=1&_limit=5`) supports pagination; however, the API's pagination functionality does not work with this application's requirement —which is to only include items where `"isPieOfTheDay"` is  `true`.

## Testing
A few simple tests were created for two of the components within the *React* application. __Jest__ was used for running tests, and __Enzyme__ was used for providing testing utility functions (e.g. `shallow`) for components. Further tests may likewise be designed for other components.

## Further Improvements
In terms of application functionality, a sorting feature may be added in order to enable the sorting of pie prices in ascending or descending order.

Regarding the structure of the application itself, *Redux* may be used to manage state more effectively. *React Hooks* may also be utilised if function-based components —as opposed to class-based components —are desired.

## View the Live Site

### LINK: https://pieoftheday-finder.herokuapp.com/
_(Best viewed on desktop via Google Chrome)_

---
# Site Images

![Home View](https://github.com/marielleloui/PieOfTheDayFinder/blob/master/public/images/piefinder-home-view.png)

![Default List](https://github.com/marielleloui/PieOfTheDayFinder/blob/master/public/images/piefinder-default-list.png)

![Pagination](https://github.com/marielleloui/PieOfTheDayFinder/blob/master/public/images/piefinder-pagination.png)

![Search Results](https://github.com/marielleloui/PieOfTheDayFinder/blob/master/public/images/piefinder-search.png)

---

## Available Scripts

If you want to run this application locally, you may use the following:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.
