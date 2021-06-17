import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
// one, two, three, four, five, six, seven, eight;
const Recolist = (props) => {
  var date = props.eight;
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
  console.log(date);
  return (
    <>
      <Container style={{ margin: "1.5rem auto" }}>
        <Card
          style={{
            textAlign: "center",
            margin: "auto",
            borderRadius: "0.8rem",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(230, 243, 235)",
              textAlign: "center",
              display: "block",
            }}
          >
            <Card
              style={{
                width: "4.5rem",
                border: "none",
                borderBottom: "2px",
                boxShadow: " 0 4px 4px 0 rgba(0, 0, 0, 0.2)",
                float: "left",
                margin: "1rem",
                borderRadius: "0.3rem",
              }}
            >
              {/* <div> */}
              <div
                style={{
                  backgroundColor: "rgb(236, 227, 228)",
                  padding: "0.4rem",
                }}
              >
                <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                  {props.one}
                </span>
              </div>
              <span
                style={{
                  fontWeight: "600",
                  padding: "0.4rem",
                  fontSize: "1.1rem",
                }}
              >
                {props.two}
              </span>

              {/* </div> */}
            </Card>
            <div
              style={{
                float: "left",
                display: "table-cell",
                verticalAlign: "middle",
                padding: "20px  0",
                textAlign: "left",
              }}
            >
              <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>
                {props.five}
              </span>
              <br />
              {date}
            </div>
          </div>
          <Card.Body>
            <Card.Text
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 2rem",
              }}
            >
              <div style={{ float: "left" }}>
                {"Quantity"}
                <br />
                <span style={{ fontWeight: 450, fontSize: "1.5rem" }}>
                  {props.six}
                </span>
              </div>
              <div style={{ float: "left" }}>
                {"Stop Loss"}
                <br />
                <span style={{ fontWeight: 450, fontSize: "1.5rem" }}>
                  {props.four}
                </span>
              </div>
              <div style={{ float: "left" }}>
                {"Stop Loss Type"}
                <br />
                <span style={{ fontWeight: 450, fontSize: "1.5rem" }}>
                  {props.three}
                </span>
                {/* <b style={{ fontSize: "1.5rem" }}>{props.three}</b> */}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default Recolist;
