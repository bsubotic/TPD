## Introduction

I tried to do a bit of everything. There are different styling used: SCSS styling, mostly tachyons but also a bit of
inline styles. I used propTypes on one component just so show how it's done. Tried to do everything with react hooks as
oppose to lifecycle methods. This app is not very "reactive". Things get loaded on start and that's it. Also, I failed
to see the need for redux-store at this point. The app provides very basic test suite.

## Primary libraries

- React & React dom (UI framework)
- React router (routing)
- Ramda.js (utility library)
- React animation height (simple animation for sliding forecast)
- i18n react (translations)
- Tachyons (css framework)

## Project structure

The major sections of the app are:

- **scenes** all scenes showing up as individual pages in SPA
- **services** api's + example of a quick session storage use (not being used in this project)
- **styles** some core styling
- **images** all icons used
- **components** shared components over different scenes
- **i18n** translations, ready to be used by adding different languages
- **utils** some custom helper function

## Configuration file

config.json:

```
{
     // Any BE endponit that would give you data back either in openweathermap format
     // or custom format that requires bare minimum for this app to work of
     "api": "http://api.openweathermap.org/data/2.5/",

     // Used for open map
     "applicationId": "bd8326266ffeb1b662cf75fadf5dee2a",

     // Any list of cities that you'd like to see displayed
     "cities": [
       "Dublin",
       "Mexico City",
       "London",
       "La La Place",
       "Miami",
       "Zagreb",
       "Skopje",
       "Tokyo"
     ],

     // true when connecting to openweathermap, false with custom BEs
     // If we are using a different BE then transformation might be left on the BE side
     "frontendDataTransformation": true
   }
```

## Starting the app

App can be start by first running `yarn` and then afterwards `yarn start` while located in root folder.
Expect app to be running on `http://localhost:3000`

## Running tests

Tests can be run by typing `yarn test`

## Recommended refactors and improvements

- Broader test coverage
- Adding health check
- Error handling with recovery (at the moment it just catches the error but no option to re-try or resolve)
- Error logging using some external service
- UX improvements for both web and mobile
- Using something like React.context to pass some props onto all components
