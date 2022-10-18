import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { Container } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
const image1 =
  "https://images.unsplash.com/photo-1599206676335-193c82b13c9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=814&q=80";
const image2 =
  "https://images.unsplash.com/photo-1616427592814-195c30c24ea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80";

export const About = (props) => {
  return (

    <div id="about">
      <Container className="container">
        <div className="row">

          <div className="col-xs-12 col-md-6">
            { " " }
            <Parallax style={ { marginBottom: "30px", background: "#fdfdfd" } } bgImage={ image2 } strength={ 500 }>
              <div style={ { height: 500 } }>
                {/* <img
              src="img/polish-bg.png"
              className="img-responsive"
              alt=""
              style={{ marginBottom: "30px",  background: "#fdfdfd" }}
            />{" "} */}
              </div>
            </Parallax>

          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={ { marginBottom: "-5px" } }>About Us</h2>
              <p>{ props.data ? props.data.paragraph : "loading..." }</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    { props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={ `${ d }-${ i }` }>{ d }</li>
                      ))
                      : "loading" }
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    { props.data
                      ? props.data.Why2.map((d, i) => (
                        <li key={ `${ d }-${ i }` }> { d }</li>
                      ))
                      : "loading" }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>


  );
};
