My cosplay portfolio site built with Angular/Bootstrap (front-end) and Firebase Firestore (back-end)

Live: https://firecloak.net

`npm start` will run the project and open a new tab for you

# Standard Third-Party Libraries
- Jquery
- popperjs/core
- Bootstrap 4
- FontAwesome free
- kolkov/ngx-gallery
- firebase
- hammerjs
- ng-lazyload-image
- ng2-search-filter
- ngx-bootstrap
- ngx-disqus
- ngx-scrolltop

# npm

Run `npm install`

# firecloak-web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

Updated to Angular 10

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

`ng build --prod`

Add .htaccess file after if it's not there already to force server to accept routes correctly

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## When setting up Nodemailer for the first time

// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha

in terminal:
firebase functions:config:set gmail.email="email@gmail.com" gmail.password="gmailPassword"
