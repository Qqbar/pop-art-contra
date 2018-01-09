import React from 'react';

class Lamp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numReflections: 10
    }
  }

  componentWillMount() {
    let styleSheet = document.styleSheets[0];
    let keyframes = `@keyframes rotate{
                     0%{ transform: rotate(0deg)}
                     25%{ transform: rotate(90deg);}
                     50%{ transform: rotate(180deg);}
                     75%{ transform: rotate(270deg);}
    	               100%{ transform: rotate(360deg); }
                     }`

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  };

  render() {

    var border1 = (this.props.lit) ? "1px solid #F22F08" : "3px solid #B4B4B4"
    var border2 = (this.props.lit) ? "1px solid #F22F08" : "3px solid #A7A7A7"
    var bg1 = (this.props.lit) ? "#8D2F23" : "#DADADA"
    var bg2 = (this.props.lit) ? "#561E18" : "#C0C0C0"

    const style = {
      height: "200px",
      width: "200px",
      position: "absolute",
      left: "50%",
      top: "50%"
    }

    const color1 = {
      height: "94%",
      width: "94%",
      position: "relative",
      borderRadius: "50%",
      border: border1,
      background: bg1,
      top: "42%",
      left: "42%",
      margin: "-47% 0 0 -47%",
      animation: "rotate 5s infinite linear",
      opacity: .95,
      zIndex: 100
    }

    const color2 = {
      height: "94%",
      width: "94%",
      border: border2,
      background: bg2,
      position: "relative",
      borderRadius: "50%",
      top: "42%",
      left: "42%",
      margin: "-47% 0 0 -47%",
      opacity: .95
    }

    return (
      <div style={ style }>
        <div style={ color1 }>
          <div style={ color2 }>
            <div style={ color1 } >
              <div style={ color2 }>
                <div style={ color1 } >
                  <div style={ color2 }>
                    <div style={ color1 } >
                      <div style={ color2 }>
                        <div style={ color1 } >
                          <div style={ color2 }>
                            <div style={ color1 } >
                              <div style={ color2 }>
                                <div style={ color1 } >
                                  <div style={ color2 }>
                                    <div style={ color1 } >
                                      <div style={ color2 }>
                                        <div style={ color1 } >
                                          <div style={ color2 }>
                                            <div style={ color1 } >
                                              <div style={ color2 }>
                                                <div style={ color1 } >
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lamp;
