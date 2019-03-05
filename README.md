# Vuejs project with firebase

> Vue.js app to test. Uses Firestore as a backend.
You can see running on https://vuejsproject-ff89c.firebaseapp.com/

## Build Setup

``` bash
## Install dependencies
npm install

## Serve on localhost:8084 - you can change that on config/index.js
npm run dev

## Build for production with minification
npm run build

## Build for production and view the bundle analyzer report
npm run build --report
```

## Using Firestore

- Go to your console at firebase.
- Create a Project.
- Go to Database and Select Firestore and then Test mode.
- Create a collection "vehicles". Later on you can change that
- Go to the Project overview. Click on "add firebase to your app". Copy all informations about the project and insert on components/firebaseConfig.js

## Hosting using Firebase

Run:

``` bash
npm install -g firebase-tools
```

This installs the firebase command globally which we’ll make use of to deploy your Vuejs Application to Firebase Hosting.

To configure your project you first need to build it for the production mode. To do that within your project root folder run the following command:

``` bash
npm run build
```

This will create a dist folder with everything you need to deploy.

In your IDE open your Vuejs project. And within the root folder create a new file called .firebaserc with the following content:

``` bash
{
  "projects":{
    "default" : "your-firebase-project-id"
  }
}
```

Change the ID to your project id and then from the root folder of your project, let’s create another configuration file called firebase.json and then add the following content to it:

``` bash
{
  "hosting": {
    "public": "./dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

Now, for deploying your application you need to login into Firebase. Run:

``` bash
firebase login
```

After receive the welcome message, go to your root folder and run:

``` bash
firebase deploy
```

For deploy your future builds, just run:

``` bash
npm run build && firebase deploy
```
