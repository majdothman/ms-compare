
# Ms Compare
Take snapshots of websites to compare with each other in different sizes.

*See [pageres](https://github.com/sindresorhus/pageres/)*

## Requirements
* NodeJs
* npm or yarn

## Install

```
$ git clone https://github.com/majdothman/ms-compare.git
$ npm install
$ node index.js
```


## How work it?

All you need to do is modify the configuration file, and set the sizes you want to compare to.

Example

```
{
  "saveResult": "./Comparison/",
  "yaml": [
    {
      "type": "compareCurrent",
      "path": "./yaml/WebName-1.yaml",
      "size": "1980x1080"
    },
    {
      "type": "compareWith",
      "path": "./yaml/WebName-2.yaml",
      "size": "1980x1080"
    }
  ]
}
```
config.json file:
* saveResult: The folder where you want to save the results
* yaml: 
  * type: The folder name for the site 
  * path: The Yaml-file location of the pages to be compared to the first site
  * size: The size to take screenshots 

## Yaml files
Yaml files are in: ./yaml/
* Example
  * WebName-1.yaml:
  * ```
     PagesList:
       - https://github.com/majdothman/ms-compare
    ```
# Run
```
$ node index.js OR nodemone index.js
```
You will find the screenshots in ./Comparison/

# Single screenshot: index.js
```
const MsCompare = require('./dist/index');
let msCompare = new MsCompare;
// ex: msCompare.getWebShot(URL, "SIZE",{folder:'Screenshots'});
msCompare.getWebShot("https://majdothman.de/about/me/", "1980x1080",{folder:'screenshots'});
```
## Related

- [pageres](https://github.com/sindresorhus/pageres/)
 