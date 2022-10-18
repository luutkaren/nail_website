import {Container } from "react-bootstrap";
export const Features = (props) => {
  return (
    
    <div id='features' className='text-center'>
            <Container style={{height:'100px'}}></Container>

      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Lavie Latest</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
        <Container style={{height:'100px'}}></Container>
      </div>
    </div>
  )
}