# Jazzman1976 Screeps Scripts

## About

This scripts demonstrate how to set up a more object oriented coding style
and push changes to a private server using a gulp build script.

I also added a code suggestion file for vs code in the src folder.

## How to use

Get familiar with gulp and gulp task executions.

run **"gulp"** to delete all \*.js files in the dist folder, compile all of 
your ES6 src/\*.js files into ES5 \*.js files and distribute them to the dist
folder. After this start a file watcher to do the same every time a \*js file
change in the src folder is saved.

run **"distribute"** if you just want to distribute but not delete all \*.js
files in the dist folder before distributing.

run **"rimraf"** if you just want to delete all \*.js files in the dist folder
but not distribute new files.

### Publish

In this example I use the gulp task **"publis_local** to publish to my local
private server.

This requires the [**screepsmod.auth**](https://github.com/ScreepsMods/screepsmod-auth)
to be installed on the server.

In addition I use the *"credentials_local.js.example"* file to store my credentials
outside the git repository. Any *"credential_\*.js"* file is ignored by my .gitignore file. 