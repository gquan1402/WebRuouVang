// const myUrl = 'https://hrcvn.tk';
const myUrl = "http://localhost:3000";
export default {
  releaseVersion: false,
  secret: {
    username: "",
    password: ""
  },
  app: {
    android: "",
    ios: "",
    fb: ""
  },
  role: {
    user: "",
    employ: "",
    admin: ""
  },

  api: {
    host: {
      base: "http://localhost:9000",
      upload: "http://localhost:4000"
    },
    path: {
      upload: {
        upFile: "/upload"
      },
      base: {
        categories: "/categories",
        products: "/products",
        productsSearch: "/products/search",
        customers: "/customers",
        orders: "/orders"
      }
    }
  },
  code: {
    success: 3,
    error: {
      tokenFail: 6,
      tokenExpire: 7
    }
  },
  asyncStorage: {
    loginOK: "loginOk",
    user: "user"
  }
};
