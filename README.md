# Docs clickbus
We used aglio, the compiler markdown of the Api Blueprint.

## Install and Requirements

Only you need install **npm** ([https://docs.npmjs.com/getting-started/installing-node](https://docs.npmjs.com/getting-started/installing-node))

This package install gulp to manager task. You can run it with the command 
 `./node_modules/gulp/bin/gulp.js` or only with `gulp` if you install it
  globally with the command `npm -g install gulp`

## Usage

You need to update the *index.md* file and after run the suitable task
 of gulp.

## Gulp task

### Build

Compiles the sources into the dist directory. It is the default task

`gulp`

### Publish

Compiles and uploads the content in the *dist* directory to the right
 S3 bucket. You need to set correctly the credentials in the
 *parameters/gulp/parameters.json*
 
`gulp publish`
