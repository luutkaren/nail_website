import { motion } from "framer-motion";
// import { Parallax } from "react-parallax";

export const Header = (props) => {
  return (
    <motion.div
      transition={{ duration: 2, delay: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  
                  <motion.div
                    transition={{ duration: 2, delay: 1 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h1>
                      {props.data ? props.data.title : "Loading"}
                      <span></span>
                    </h1>
                  </motion.div>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <a href="#features" className="btn btn-custom btn-lg page-scroll">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </motion.div>
  );
};
