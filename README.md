<h1 align="center">

<p align="center"><img src="hero.png" width="300" height="300" /></p>

<p align="center">
  <a href="https://www.npmjs.com/package/simplified-promise"><img src="http://img.shields.io/npm/v/simplified-promise.svg?style=flat" /></a>
  <a href="https://github.com/prscX/simplified-promise/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/simplified-promise#License"><img src="https://img.shields.io/npm/l/simplified-promise.svg?style=flat" /></a>
</p>


    Simplified Promise

If this project has helped you out, please support us with a star 🌟
</h1>

It enhances the simplicity of JavaScript Promise by adding below static API's to the out of box Promise:

- `Promise.Create(): Promise`
- `Promise.All(): Promise`


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


## 💻 Usage
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

## ✨ Credits

## 🤔 How to contribute
Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/prscX/simplified-promise/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💫 Where is this library used?
If you are using this library in one of your projects, add it in this list below. ✨


## 📜 License
This library is provided under the Apache 2 License.

Simplified Promise @ [prscX](https://github.com/prscX)

## 💖 Support my projects
I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:
* Starring and sharing the projects you like 🚀
* If you're feeling especially charitable, please follow [prscX](https://github.com/prscX) on GitHub.

  <a href="https://www.buymeacoffee.com/prscX" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  Thanks! ❤️
  <br/>
  [prscX.github.io](https://prscx.github.io)
  <br/>
  </ Pranav >