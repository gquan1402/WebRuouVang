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
      base: "https://shopruouvang.herokuapp.com",
      upload: "http://localhost:4000"
    },
    path: {
      upload: {
        upFile: "/upload"
      },
      base: {
        products: "product",
        news: "new",
        bill: "bill",
        sale: "sale",
        admin: "admin",
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
