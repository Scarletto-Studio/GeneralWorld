import React, { Component } from "react";
import Button from "react-bootstrap/Button";

const Buttonna = () => (
  <div>
    <Button variant="primary">Baifern</Button>
  </div>
)

class Buttoness extends Component {
    alertok() {
        console.log("Hello Baifern.")
    }

    render() {
        return(
            <div>
                <Buttonna onClick={this.alertok.bind(this)} />
            </div>
        )
    }
}

export default Buttoness;
