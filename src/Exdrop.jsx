import React, { Component } from "react";
import Select from "react-select";

import data from "./data/instruments.json";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],

      tradingsymbol: "",
    };
  }

  async getOptions() {
    // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // const data = res.data;

    const options = data.map((d) => ({
      value: Math.random().toString,
      label: d.tradingsymbol,
    }));

    this.setState({ selectOptions: options });
  }

  handleChange(e) {
    this.setState({ id: e.value, name: e.label });
    this.props.exChange(e.label);
  }

  componentDidMount() {
    this.getOptions();
  }

  render() {
    // console.log(this.state.selectOptions);
    return (
      <div>
        <Select
          options={this.state.selectOptions}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
