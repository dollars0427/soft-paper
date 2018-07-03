# soft-paper
A CSS3 Regions like layout Pure Javascript library

This library is for create CSS3 Regions like layout dynamically, you would not need to prepare many container to store the content.
It will not support IE 9 and other old browser.

## Usage

### Browser
Firstly, require the Javascript file at your html file:
```html
<script src="soft-paper.js"></script>
```
Create your html markup like this:
```html
<div class="paper">
  <div class="paper-content">
  Some very very long content
  </div>
 </div>
```

Than call SoftPaper split function at Javascript:
```js
window.SoftPaper.split('.paper-content');
```
### JS File
Just require it.

```js
const SoftPaper = require('./soft-paper');
SoftPaper.split('.paper-content');
```

##Methods

###split(container)

Function for split content with this parent.

```js
SoftPaper.split('.paper-content');
```

##Limit
Currently, this library do not use binary search (Maybe will be slow) , and will copy the content with their parent.
