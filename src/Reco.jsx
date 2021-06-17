import React from "react";
import { Link } from "react-router-dom";
import Recolist from "./Recolist";
import logo from "./itmtb_Logo.svg";
import "./Reco.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
const Reco = ({ add }) => {
  console.log(add.length);
  return (
    <>
      <img src={logo} alt="logo" style={{ margin: "30px 30px 20px 66px " }} />
      <Container style={{ width: "50rem", margin: "1.5rem auto" }}>
        <div id="addlink">
          <Link to="/postReco" id="linkk">
            Add a new Recommendations !
          </Link>
          <br />
        </div>
        {add.map((val, index) => {
          return (
            <Recolist
              key={index}
              id={index}
              one={val.one}
              two={val.two}
              three={val.three}
              four={val.four}
              five={val.five}
              six={val.six}
              seven={val.seven}
              eight={val.eight}
            />
          );
        })}

        {/* {add.length ? ((
          <div id="addlink">
            <Link to="/postReco" id="linkk">
              No Recommendations found,create one!
            </Link>
          </div>)
          {add.map((val, index) => {
            return (
              <Recolist
                key={index}
                id={index}
                one={val.one}
                two={val.two}
                three={val.three}
                four={val.four}
                five={val.five}
                six={val.six}
                seven={val.seven}
                eight={val.eight}
              />
            );
          })}
        ) : (
          <div id="addlink">
            <Link to="/postReco" id="linkk">
              No Recommendations found,create one!
            </Link>
          </div>
        )} */}
      </Container>
    </>
  );
};
export default Reco;
