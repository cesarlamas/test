const Library = {
  get: (key, callback) => {
    setTimeout(() => {
      if (key === 'validKey') {
        callback(null, 'data associated with the key');
      } else {
        callback(new Error('Invalid key'), null);
      }
    }, 1000);
  }
};

function getLibraryData(key) {
  return new Promise((resolve, reject) => {
    Library.get(key, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

(async () => {
  try {
    const libraryData = await getLibraryData('validKey');
    console.log(libraryData);
  } catch (e) {
    console.error(e);
  }
})();