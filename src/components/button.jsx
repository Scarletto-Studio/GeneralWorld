import React, { Component } from "react";
import Button from "react-bootstrap/Button";

const alertok = () => {
    alert("Hello Baifern.")
}

const Buttonna = () => (
  <div onClick={alertok}>
    <Button variant="primary">Baifern</Button>
  </div>
)

class Buttoness extends Component {
    render() {
        return(
            <div>
                <Buttonna onClick={() => this.alertok()} />
            </div>
        )
    }
}

export default Buttoness;
