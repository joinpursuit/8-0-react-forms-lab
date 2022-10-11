export const operations = {
  sum: function (values) {
    return values.split(",").reduce((a, b) => a + Number(b), 0);
  },
  average: function (values) {
    return this.sum(values) / values.split(",").length;
  },
  mode: function (values) {
    values = values.replaceAll(",", "").replaceAll(" ", "");
    let mode = 0;
    let occurence = 1;
    values.split("").forEach((value) => {
      if (values.split(value).length > occurence) {
        mode = value;
        occurence = values.split(value).length;
      }
    });
    return mode;
  },
};
