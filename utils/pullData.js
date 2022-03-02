const pullData = (data, path) => {
  for (const item in data) {
    if (data[item].path === path) {
      return data[item];
    }
  }
};

export { pullData };
