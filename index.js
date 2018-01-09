Promise.Create = resolver => {
  let _promise = {};

  let promise = new Promise((resolve, reject) => {
    _promise.resolve = resolve;
    _promise.reject = reject;
    resolver && resolver(resolve, reject);
  });

  promise.resolve = _promise.resolve;
  promise.reject = _promise.reject;

  return promise;
};

Promise.All = promises => {
  let promise = Promise.Create();
  Promise.all(promises)
    .then(promise.resolve)
    .catch(promise.reject);

  return promise;
};
