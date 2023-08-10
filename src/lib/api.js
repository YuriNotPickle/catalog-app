import axios from "axios";

export default () => {
  return {
    async execute(options) {
      try {
        const { data } = await axios[options.method](options.url);
        return data;
      } catch (e) {
        console.error(e);
      }
    },

    getFeed() {
      const method = "get";
      const url =
        "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/";

      return this.execute({
        url,
        method,
      });
    },

    getPage(id) {
      const method = "get";
      const url = `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`;

      return this.execute({
        url,
        method,
      });
    },
  };
};