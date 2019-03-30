import React, {Component} from 'react'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'

// Hi! What's the best way create <Popover /> & <OverlayTrigger /> in different places? I mean: clicked on some button and then <Popover /> action near another element on page?  Similar like this: https://www.bootply.com/7oM1aoycIi

/*
const SomeContnr = () => {
    return (
        <div>
            
            <Container>
                 <Row>
                 <Col className="borderr">blah</Col>
                 </Row>
                 <Row>
                   <Col className="borderr">
                    <button>button 333</button>
                   </Col>
                   <Col className="borderr">
                    <button>on
                    <SomeContnrTwo />
                    </button>
                   </Col>
                   <Col className="borderr">
                    <button>someButton
                    
                    </button>

                    <SomeContnrTwo />
                   </Col>
                 </Row>
            </Container>
        </div>
    )
}

const SomeContnrTwo = () => {
    return (
        <div>
            
            <u>SomeContnrTwo111</u>
            <Container>
                 <Row>
                 
                 
                 </Row>

                 

                 <Row>                 
                   <Col>
                    
                   </Col>
                        <Col>
                            
                            <button>buttttttn</button>

                        </Col>
                   <Col>
                    
                   </Col>

                   </Row>

                 <Row>                 
                   <Col>
                    <button>1.</button>
                   </Col>
                         
                   <Col>
                    <button>1.</button>
                   </Col>

                   </Row>
                   
                   <Row>

                  
                                  
                   <Col className="borderr">
                    <button>3</button>
                   </Col>
               
                   <Col className="borderr">
                    <button>4</button>
                   </Col>

                   </Row><Row>

                    
                   <Col className="borderr">
                    <button>6</button>
                   </Col>
                   <Col className="borderr">
                    <button>7</button>
                   </Col>

                   </Row><Row>

                   <Col className="borderr">
                    
                   </Col>
                   <Col className="borderr">
                    <button>99</button>
                   </Col>
                   <Col className="borderr">
                    
                   </Col>
                     
                 </Row>
            </Container>
        </div>
    )
}

const SomeScreen = (props) => {
    return (
        <div className={props.color}>            
            {props.children}
        </div>
    )
}

const Wrapper = (props) => {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    )
}

const CalcNew = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col> 
                        <SomeScreen color="calcScreen">
                            1 + 1 * 2 = 3
                        </SomeScreen>
                    </Col>
                </Row>
                <Row>
                    <Col>col1</Col>
                    <Col>col2</Col>
                    <Col>col3</Col>
                    <Col>col3</Col>                    
                </Row>
                <Row>
                    <Col>col1</Col>
                    <Col>col2</Col>
                    <Col>col3</Col>
                    <Col>col3</Col>                    
                </Row>
                <Row>
                    <Col>col1</Col>
                    <Col>col2</Col>
                    <Col>col3</Col>
                    <Col>col3</Col>                    
                </Row>
                <Row>
                    <Col></Col>
                    <Col>col2</Col>
                    <Col></Col>
                    <Col></Col>                    
                </Row>
                <Row>
                    <Col>col1</Col>
                    <Col>col2</Col>
                    <Col>col3</Col>
                    <Col>col3</Col>                    
                </Row>
            </Container>
            
        </div>        
    )
}

*/

class Example extends Component {
    constructor(props) {
    super(props);
  
    // this.attachRef = target => this.setState({ target: target });
    
    //2
      this.attachRefTwo = target => {
          this.setState({ targetTwo: target })
            console.log('this.state.targetTwo:', this.state.targetTwo)
      };
  
      //props.target
  //    this.attachRef = props => this.setState({ this.props.target });
  
      this.state = {
        show: true
      };
    }
  
    render() {

    //   const { show, target } = this.state;
    const show = this.state.show
    // const target = this.state.target
    const targetTwo = this.state.targetTwo


      return (
        <div>
          {/* <Button
            variant="danger"
  //           
            onClick={() => this.setState({ show: !show })}
          >
            Click me to see
          </Button> */}
          {/* <Button variant="success"
  //          
            onClick={() => this.setState({ show: !show })}
          >
            Click me to see
          </Button> */}
          
          {/* <br/><br/> */}
          
          <Button 

        //   ref={this.attachRef}

            onClick={
              () => this.setState({ show: !show })
            }
          >
            222
          </Button>
          
          <br/><br/>        
          <Button          variant="success"
            ref={this.attachRefTwo}
            // ref={this.attachRef}

            //onClick={() => this.setState({ show: !show })}
          >
            999
          </Button>

          {/* <Overlay target={target} show={show} placement="bottom">
            {({ placement, scheduleUpdate, arrowProps, ...props }) => (
              <div
                {...props}
                style={{
                  backgroundColor: 'rgba(255, 100, 100, 0.85)',
                  padding: '2px 10px',
                  color: 'white',
                  borderRadius: 3,
                  ...props.style,
                }}
              >
                Simple tooltip
              </div>
            )}
          </Overlay> */}

          {/* <Overlay target={targetTwo} show={show} placement="bottom">
            {(
                { ...props }) => (
              <div

                {...props}

                style={{
                  backgroundColor: 'rgba(111, 111, 111, 0.85)',
                  padding: '2px 10px',
                  color: 'white',
                  borderRadius: 3,
                  ...props.style,
                }}
              >
                Simple tooltip

              </div>

            )}

          </Overlay> */}


          </div>
      );
    }
  }

export default class Tests extends Component {
    render() {
        return (
            <div>
                <hr />
                <hr />
                <hr />
                <Example />
                {/* <u>this is not a test</u> */}
                <hr />
                {/* <SomeContnr /> */}
                {/* {'1'.split('').map(e=> {return <SomeContnr />} )} */}
                <hr />
                {/* <SomeScreen> */}
                {/* SomeScreen */}
                {/* <SomeContnr /> */}
                {/* <SomeContnrTwo /> */}
                
                {/* <Wrapper class="wrapperCalc">
                Wrapper
                    
                    <CalcNew screenClass="calcScreen" />
                </Wrapper> */}
                
                
                {/* </SomeScreen> */}
                {/* <SomeContnrTwo />     */}
            </div>
        )
    }
}