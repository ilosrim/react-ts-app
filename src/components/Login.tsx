import React, { Component } from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps {
  authservice: AuthService;
}
interface LoginState {
  userName: string;
  password: string;
  loginAttenpted: boolean;
  loginSuccessful: boolean;
}

export default class Login extends Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: "",
    password: "",
    loginAttenpted: false,
    loginSuccessful: false,
  };

  render() {
    return <div>Login</div>;
  }
}
