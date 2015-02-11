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
webfont('[Font Family]', '[File name without extension]', true, '[Font weight]')
// Example: webfont('Franklin Gothic', 'franklingothic', true, 'bold')
````
To have flowing paragraphs with no margins where the initial pargraph is flushed, and all following paragraphs are indented by text.
````
flowing-paragraph([indentation])
// Example: .paragraph 
// 				flowing-paragraph(0.5em)
````
To adjust the font-size and spacing of abbreviations and acronyms. More legible alternative to small caps for paragraph text. Used in conjunction with the `<abbr>` tag.
````
abbr([font-size], [letter-spacing])
// Example: .paragraph
//				abbr(16px,0.2em)

````
More in progress.

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
