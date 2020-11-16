import React from "react";

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      last_name: "",
      first_name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          //this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }
/*
  resetForm() {
    this.setState({ last_name: "", first_name: "", email: "", message: "" });
  }
*/
  render() {
    return (
      <div className="App">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationTooltip01" class="text-white">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip01"
                value={this.state.first_name}
                onChange={this.onFirstNameChange.bind(this)}
                required
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="validationTooltip02" class="text-white">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip02"
                value={this.state.last_name}
                onChange={this.onLastNameChange.bind(this)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label class="text-white" htmlFor="exampleInputEmail1">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
              required
            />
          </div>
          <div className="form-group">
            <label class="text-white" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }

  onLastNameChange(event) {
    console.log(1);
    this.setState({ last_name: event.target.value });
  }

  onFirstNameChange(event) {
    this.setState({ first_name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}
