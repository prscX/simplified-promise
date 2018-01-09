
<center><img src="hero.png" /></center>

# Simplified Promise
It enhances the simplicity of JavaScript Promise by adding below static API's to the out of box Promise:

- Promise.Create(): Promise
- Promise.All(): Promise


## ES6 Promise Usage
`new Promise( /* executor */ function(resolve, reject) { ... } );`

**Parameters**
- __executor__: A function that is passed with the arguments resolve and reject


If we use standard Promise then it is mandatory to pass executor function:

~~~~
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
~~~~

Doing this we need to wrap our implementation in executor **Function**. In my opinion it increases source hierarchy


## Why it is useful
- It allows us to write neat & clean source
- Less source hierarchy
- Easy to use and understand


## Usage
`$ npm install --save simplified-promise`

`import * from 'simplified-promise'`

- Promise.Create

~~~~
foo() {
  let promise = Promise.Create()

  asyncFoo()
    .then(() => promise.resolve())
    .catch(err => promise.reject(err))

  return promise
}
~~~~

- Promise.All

~~~~
foo() {
  let promises = []

  promises.push(asyncFoo1())
  promises.push(asyncFoo2())

  return Promise.All(promises)
}
~~~~


## Opening Issues
If you encounter a bug with the Awesome Promise, we would like to hear about it. Search the [existing issues](https://github.com/prscX/awesome-promise/issues) and try to make sure your problem doesn’t already exist before opening a new issue.

## Contributing
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.


## License
Simplified Promise is provided under the MIT License

