import React from "react";
import { User } from "../model/Model";
import { AuthService } from "../services/AuthService";
import Login from "./Login";

interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, {}> {
  private authService: AuthService = new AuthService();

  render() {
    return (
      <>
        <h1 className=" bg-red-600 text-green-500">App page</h1>
        <Login authservice={this.authService} />
      </>
    );
  }
}

export default App;
