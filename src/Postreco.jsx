import react, { useState } from "react";
import ExDropdown from "./exdropapp";
import InsDropdown from "./exdropapp copy";
import logo from "./itmtb_Logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Spinner,
} from "react-bootstrap";
function Postreco({ passNote }) {
  var date = new Date();
  var monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  date =
    date.getDate() +
    "-" +
    monthNames[date.getMonth()] +
    "-" +
    date.getFullYear();
  var d = new Date(date);
  d.setDate(d.getDate() + 10);

  d = d.getDate() + "-" + monthNames[d.getMonth()] + "-" + d.getFullYear();
  d = new Date(d);

  const [note, setNote] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: d,
  });

  const inputEvent = (e) => {
    var val = e.target.value;
    if (isNaN(val)) {
      e.target.value = "";
    }
    setNote((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const inputEvent1 = (drop) => {
    setNote((prevData) => {
      return {
        ...prevData,
        five: drop,
      };
    });
  };
  const inputEvent2 = (drop) => {
    setNote((prevData) => {
      return {
        ...prevData,
        seven: drop,
      };
    });
  };
  const quantity = (e) => {
    setNote((prevData) => {
      return {
        ...prevData,
        six: e.target.value.replace(/\D/g, ""),
      };
    });
  };
  const buy = () => {
    let fill = document.querySelector("#buy");
    let empty = document.querySelector("#sell");
    fill.style.backgroundColor = "#14ac74";
    fill.style.color = "#fff";
    empty.style.backgroundColor = "#fff";
    empty.style.color = "#14ac74";
    setNote((prevData) => {
      return {
        ...prevData,
        one: "BUY",
      };
    });
  };
  const sell = () => {
    let fill = document.querySelector("#sell");
    let empty = document.querySelector("#buy");
    fill.style.backgroundColor = "#14ac74";
    fill.style.color = "#fff";
    empty.style.backgroundColor = "#fff";
    empty.style.color = "#14ac74";
    setNote((prevData) => {
      return {
        ...prevData,
        one: "SELL",
      };
    });
  };
  const moving = () => {
    let fill = document.querySelector("#moving");
    let empty = document.querySelector("#closing");
    fill.style.backgroundColor = "#14ac74";
    fill.style.color = "#fff";
    empty.style.backgroundColor = "#fff";
    empty.style.color = "#14ac74";
    setNote((prevData) => {
      return {
        ...prevData,
        three: "MOVING",
      };
    });
  };
  const closing = () => {
    let fill = document.querySelector("#closing");
    let empty = document.querySelector("#moving");
    fill.style.backgroundColor = "#14ac74";
    fill.style.color = "#fff";
    empty.style.backgroundColor = "#fff";
    empty.style.color = "#14ac74";
    setNote((prevData) => {
      return {
        ...prevData,
        three: "CLOSING",
      };
    });
  };
  // var a = [one, "two", "three", "four", "five", "six", "seven", "eight"];
  var c = 0;
  if (note.one) c++;
  if (note.two) c++;
  if (note.three) c++;
  if (note.four) c++;
  if (note.five) c++;
  if (note.six) c++;
  if (note.seven) c++;
  if (note.eight) c++;
  // for (i = 0; i < 8; i++) {
  //    if (note + "." + a[i]) c++;
  //   console.log(note.a[i]);
  // }
  //   console.log(c);
  if (c === 8) {
    let fill = document.querySelector("#submit");
    fill.disabled = false;
    fill.style.backgroundColor = "#14ac74";
    fill.style.color = "#fff";
    let link = document.querySelector("#link");
    link.classList.add("active");
  }
  const addEvent = () => {
    // console.log(note);
    passNote(note);
  };
  return (
    <>
      <img src={logo} alt="logo" style={{ margin: "30px 30px 20px 66px " }} />

      <Container>
        <Card>
          <Card.Body>
            <p>
              Fill in the following details to send recommendations to your
              subscribers.
            </p>

            <Card>
              <Card.Body>
                <Form autoComplete="new-password">
                  <Row>
                    <Col md>
                      <Form.Group>
                        <Form.Label>Is it buy call or sell call?</Form.Label>
                        <br />
                        <Row>
                          <Col>
                            <Button
                              variant="outline-success"
                              onClick={buy}
                              name="btn1"
                              id="buy"
                            >
                              Buy
                            </Button>
                          </Col>
                          <Col>
                            <Button
                              variant="outline-success"
                              onClick={sell}
                              name="btn1"
                              id="sell"
                            >
                              Sell
                            </Button>
                          </Col>
                          <Col></Col>
                          <Col></Col>
                        </Row>
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group>
                        <Form.Label>Trade Price</Form.Label>
                        <Form.Control
                          size="lg"
                          type="number"
                          name="two"
                          value={note.two}
                          onChange={inputEvent}
                          autoComplete="off"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md>
                      <Form.Group>
                        <Form.Label>
                          Is it moving stop or closing stop?
                        </Form.Label>
                        <br />
                        <Row>
                          <Col>
                            <Button
                              variant="outline-success"
                              onClick={moving}
                              name="btn2"
                              id="moving"
                            >
                              Moving
                            </Button>
                          </Col>
                          <Col>
                            <Button
                              variant="outline-success"
                              onClick={closing}
                              name="btn2"
                              id="closing"
                            >
                              Closing
                            </Button>
                          </Col>
                          <Col></Col>
                          <Col></Col>
                        </Row>
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group>
                        <Form.Label>Stop Loss</Form.Label>
                        <Form.Control
                          size="lg"
                          type="number"
                          name="four"
                          value={note.four}
                          onChange={inputEvent}
                          autoComplete="off"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md>
                      <Form.Group name="five">
                        <Form.Label>Exchange name</Form.Label>
                        <ExDropdown
                          exChange={inputEvent1}
                          key={Math.random().toString}
                        />
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                          size="lg"
                          type="text"
                          name="six"
                          value={note.six}
                          onChange={quantity}
                          autoComplete="off"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md>
                      <Form.Group name="seven">
                        <Form.Label>Instrument Type</Form.Label>

                        <InsDropdown
                          key={Math.random().toString}
                          insChange={inputEvent2}
                          ecVal={note.five}
                        />
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group>
                        <Form.Label>Recommendation Validity</Form.Label>
                        <br />
                        <DatePicker
                          name="eight"
                          id="date"
                          value={d}
                          placeholderText={d}
                          selected={note.eight}
                          onChange={(date) =>
                            setNote((prevData) => {
                              return {
                                ...prevData,
                                eight: date,
                              };
                            })
                          }
                          dateFormat="dd-MMM-yyyy"
                          showYearDropdown
                          scrollableMonthYearDropdown
                          minDate={new Date()}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
            <br />
            <Button
              variant="success"
              disabled="true"
              id="submit"
              onClick={addEvent}
            >
              {/* <Spinner animation="border" variant="light" /> */}

              <Link
                to="/reco"
                className="disabled-link "
                id="link"
                onClick={addEvent}
              >
                Add Recommendation
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Postreco;
