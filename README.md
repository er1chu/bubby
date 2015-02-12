# Bubby
Minimal front-end starter kit for Kirby utilizing Grunt, Stylus, Jeet, Bower. Jump-starts development without the baggage of bloated front-end frameworks. Built with an emphasis towards typographic minutia.

## Features:
- Grunt for task management (e.g. concatenation and uglification of JS files, compiling and minifying Stylus to CSS, LiveReload, etc)
- Bower for package management (includes jQuery)
- Jeet for lightweight but highly customizable responsive grids
- Powerful mixins for beautiful web typography, media queries, unit conversions and fallbacks (in progress)


## Typography - (work in progress)
To easily link web fonts in your font folder
````
webfont('Font Family', 'File name without extension', true, 'Font weight')
// Example: webfont('Franklin Gothic', 'franklingothic', true, 'bold')
````
This compiles to:
````
@font-face {
    font-family: 'Franklin Gothic';
    src: url("../fonts/franklingothic.eot");
    src: url("../fonts/franklingothic.eot?#iefix") format('embedded-opentype'), url("../fonts/franklingothic.woff") format('woff'), url("../fonts/franklingothic.ttf") format('truetype'), url("../fonts/franklingothic.svg#Franklin Gothic") format('svg');
    font-weight: 'bold';
    font-style: normal;
}
````
To have flowing paragraphs with no margins where the initial pargraph is flushed, and all following paragraphs are indented by text.
````
flowing-paragraph([indentation])
// Example: .div-class
// 				flowing-paragraph(0.5em)
````
To adjust the font-size and spacing of abbreviations and acronyms. More legible alternative to small caps for paragraph text. Used in conjunction with the `<abbr>` tag.
````
abbr([font-size], [letter-spacing])
// Example: .div-class
//				abbr(16px,0.2em)

````
For light type on dark backgrounds, you can antialiase your type simply by using:
````
font-smoothing()
// Example: .div-class
//				font-smoothing()
````
More in progress.

## Grid
The grid system uses on Jeet. Rather than using something like `.col-4` seen in other css grid frameworks, you can pass any ratio or fraction or both to create a completely custom grid.

If you want something that takes up a quarter of the space of its parent container:
````
col(1/4)
````
To customize the gutter:
````
col(1/4, gutter: .5)
````
Offsetting is made trivial as well. For example: `col(1/4, offset: 1/4)` would create a column the quater of the size of its container and push it to the right a quarter.

If you need a grid without gutters, use spans instead.
````
span(1/5)
````
`cycle` and `uncycle` are pretty awesome in their own right as well. Want to make a gallery but don't want to specify a row every 4 pictures? `col(1/4, cycle: 4)` - done. Want to change it up when you get down to mobile? Maybe just show 2 images per row? uncycle your 4-item cycle then... `col(1/2, uncycle: 4, cycle: 2)` - done.

For more features, please refer to the documentation at <http://jeet.gs>

## Edit Mode
Edit mode assigns a light gray, semi-transparent, background to every element on the page. It's a little trick picked up over the years that makes visualizing the structure of your site trivial.

````
edit()
````


## To be added - Grunt:
- Automatic PHP server launch
- Built-in Image optimization
- SVG minification with automatic PNG fallbacks
- Modernizr

## To be added - Stylus:
- Typographic mixins targeting abbreviations, REM calculations, etc.

## Dependencies
### Kirby

Kirby is a file-based CMS. For documentation and licensing, please see: <http://getkirby.com/docs>

### Grunt
Grunt is a javascript task runner. For documentation, please see: <http://gruntjs.com>

### Bower
Bower is a front-end package manager. For documentation, please see <http://bower.io>

### Jeet
Jeet is an advanced and intuitive grid system for both Sass and Stylus. For documentation, please see <http://jeet.gs>

### Server Requirements
Kirby runs on PHP 5.3+, Apache, or Nginx

## Installation
1. `git clone --recursive https://github.com/er1chu/bubby.git`
- It's important to add `--recursive` because the core CMS is linked as a submodule
2. `npm install`
3. `bower install`
4. `grunt`
5. `php -S localhost:9000`

## License
[MIT license](http://opensource.org/licenses/mit-license.php)
