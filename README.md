# Prism

Prism is a new lightweight, extensible syntax highlighter, built with modern
web standards in mind. It’s a spin-off from Dabblet [1] and is tested there daily
by thousands.

This module is a port to Backdrop of the Drupal contributed module 'Prism'. 

For a full description visit the Drupal project page:
http://drupal.org/project/prism

## Status

This port is functional.

## Installation

Install as usual.

Prism can be download from http://prismjs.com/download.html

This module requires both prism.js & prism.css to be located in:
libraries/prism

## License

This project is GPL v2 software. See the LICENSE.txt file in this directory for complete text.
      
## Current Maintainers

### For Drupal:
 + Nicholas James - swim	
 + Helior Colorado - helior


### Port to Backdrop:
 + José Espinosa github.com/pepenauta


To use this module enable the syntax filter in one of the text format settings pages e.g.
admin/config/content/formats/full_html

Once enabled your code simply needs to be wrapped in the correct syntax & inserted
into any text area. Here is an example using css highlighting.

[prism:css] body {color:green;} [/prism:css]

Read more about this library at Prismjs.com [2], also, read this blog post by
Lea Verou [3] introducing it.

[1] http://dabblet.com/
[2] http://prismjs.com/
[3] http://lea.verou.me/2012/07/introducing-prism-an-awesome-new-syntax-highlighter/

