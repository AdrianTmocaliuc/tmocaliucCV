import { Component } from "react";

import AppliedDescription from "Components/AppliedDescription";
import MainDescription from "Components/MainDescription";

import data from "dataBase/db.json";

import s from "./App.module.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <div className={s.App}>
        <MainDescription data={data} />
        <AppliedDescription data={data} />
      </div>
    );
  }
}

export default App;
