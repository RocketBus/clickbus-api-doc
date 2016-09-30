# Clickbus's API Documentation

We used aglio, the markdown compiler of the Api Blueprint.

## Install and Requirements

Only you need install **npm** ([https://docs.npmjs.com/getting-started/installing-node](https://docs.npmjs.com/getting-started/installing-node))

This package install gulp to manage tasks. You can run it with the command 
 `./node_modules/gulp/bin/gulp.js` or only with `gulp` if you install it
  globally in your system (`npm -g install gulp`).

## Usage

You need to update the *index.md* file and after run the `gulp` to 
see the changes in you machine (open the *./dist/index.html* file). And
run `gulp publish` when you are ready to publish it.

The source code is located in */src/* directory and organized by endpoints. The main file that join all the files is *index.md*

## Gulp task

### Build

Compiles the sources into the dist directory. It is the default task

`gulp`

### Publish

Compiles and uploads the content in the *dist* directory to the right
 S3 bucket. You need to set correctly the credentials in the
 *parameters/gulp/parameters.json*
 
`gulp publish`
