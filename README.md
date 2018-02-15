## Dev Test
-----------

To get the web app up and running:
* git clone or fork this repository
* `npm install`
* `npm run watch`

Go to http://localhost:3000 to view the web app.

`index.js` is the main entry point.

This project uses [Jade Templates](https://naltatis.github.io/jade-syntax-docs/) which output html and [Stylus](http://stylus-lang.com/) for stylesheets.


### Instructions
----------------

#### Part 1

Add some logic on the ip converter page so that when a user enters an ip address, the hex representation will be displayed on the page.

eg: ip 197.27.11.11 = 0xC51BBB

When a user enters a comma separated list of ips, all should have their hex values returned.

If a non-valid ip address is entered the user should be presented with an error.

You may implement the logic however you like, but try to follow the single responsibility principle.

Add jsdoc to your code if you like.

#### Part 2

Change the look of the website to a dark theme with #222 as the main background colour.

Replace the light banner with a dark image, gradient, or colour.

Fix inconsistencies with the font-family.