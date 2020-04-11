import React, { Component } from "react";
import axios from "axios";

class DeleteStudent extends Component {
  constructor(props) {
    super(props);
    this.state.id = props.id;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = { id: "" };
  uri = "https://jsonplaceholder.typicode.com/users";

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const res = await axios.delete(`${this.uri}/${this.state.id}`);
      this.props.refreshAction();
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.handleSubmit}>
          {" "}
          Delete
        </button>
      </div>
    );
  }
}

export default DeleteStudent;
