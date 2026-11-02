import { userRegister } from "./Userregisterstyle";

// The login page uses the same layout as the register page, with a narrower form
export const userLogin = {
  mobile: {
    ...userRegister.mobile,
    loginButton: {
      marginTop: "2vw"
    }
  },

  desktop: {
    ...userRegister.desktop,
    registerForm: {
      ...userRegister.desktop.registerForm,
      width: "28vw"
    },
    loginButton: {
      marginTop: "0.6vw"
    }
  }
};
