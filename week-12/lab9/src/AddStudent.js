import React, { Component } from "react";
import axios from "axios";

class AddStudent extends Component {
  state = {
    name: ""
  };

  uri = "https://jsonplaceholder.typicode.com/users";

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const res = await axios.post(`${this.uri}`, { name: this.state.name });
      this.props.refreshAction();
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit"> Add</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
