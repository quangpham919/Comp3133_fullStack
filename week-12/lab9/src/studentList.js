import React from "react";
import axios from "axios";
import DeleteStudent from "./DeleteStudent";
import AddStudent from "./AddStudent";
class UserList extends React.Component {
  state = { users: [] };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      this.setState({
        users: res.data
      });
    });
  }
  refreshUser() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      this.setState({
        users: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <AddStudent refreshAction={this.refreshUser.bind(this)} />
        <ul>
          {this.state.users.map((user, index) => {
            return (
              <li key={index}>
                {" "}
                {user.name}
                <DeleteStudent
                  id={user.id}
                  refreshAction={this.refreshUser.bind(this)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
