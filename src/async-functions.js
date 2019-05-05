const giveItBackLater = (value, callback) => {
  const giveItBack = () => {
    callback(value);
  };
  setTimeout(giveItBack, 100);
};

const addSomePromises = somePromise => {
  return new Promise(resolve => resolve(somePromise))
    .then(result => result.repeat(2))
    .catch(error => error.repeat(3));
};

const promiseToGiveItBackLater = value => {
  return new Promise((resolve, reject) => {
    const giveItBack = () => {
      if (typeof value === "string") {
        resolve(value);
      } else {
        reject("Something went bad!");
      }
    };
    setTimeout(giveItBack, 100);
  });
};
module.exports = {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
};
