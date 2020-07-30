# Description

My follow-along course files from Pluralsight course [Electron Fundamentals](https://app.pluralsight.com/library/courses/electron-fundamentals/table-of-contents).

This course covers basics of building applications using the Electron Framework, which allows building cross-platform applications based on webview technology - similar to wrapping a raw browser window into an application and run local web pages from a directory or with a local web server.

Electron powers apps like the Visual Studio Code IDE (on which I am typing this), Slack, and the Atom IDE.

## Developer Guide

How to recreate an electron project like this from scratch. Or, you can follow the guide at: https://www.electronjs.org/docs/tutorial/first-app

1. Install Node.JS (with NPM)
    - If you don't have this yet, this might not be the course for you...
2. Run `npm install electron --save-dev` to install the latest version of electron
3. Run `npm init` to create a basic package.json file
4. Update `package.json` to add `"start": "electron ."` to the `"scripts": { }` object
5. If needed, update the `"main": ""` entry to point to your entry script (index.js, app.js, main.js, etc.) - in our case, `"main": "src/main.js"`

Electron can now be launched using `npm start`.