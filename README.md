
# TannerGoods Website

## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    18.18.2

    $ npm --version
    9.8.1


## Install

    $ git clone https://github.com/tanner-goods

    $ cd PROJECT
    $ npm install

## Start & watch

    $ npm run dev

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install
