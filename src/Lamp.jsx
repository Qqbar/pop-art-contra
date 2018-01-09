import React from 'react';

class Lamp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBolt: false
    }

  }

  componentWillMount() {
    let styleSheet = document.styleSheets[0];

    // Can add CSS animation key frames like this
    // If you want it, only if you want it...
    let keyframes = `@keyframes fade{
                     0%{ opacity: 1; }
    	               100%{ opacity: 0; }
                     }`

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  };

  componentWillReceiveProps(next) {
    //console.log(next);
  }

  render() {

    const bgColorDark = "#4A148C";    // Dark Background
    const bgColorLight = "#9C27B0";   // Light Background
    const bgColorMed = "#6A189A";     // Somewhere In Between
    const transparentColor = "white"; // Clouds are white
    const lightColor = "#68EFAD";     // Bolts are SeaFoam Green

    // Decisions
    var bgColor = this.props.lit ? bgColorLight : bgColorDark;
    var boltColor = this.props.lit ? lightColor : bgColor;
    var cloudColor = this.props.lit ? transparentColor : bgColorMed;

    // Some nice SVGs
    var cloudSVG = <path d="M17.274,21.285c-4.445,0-8.062,3.616-8.062,8.061
                      s3.617,8.061,8.062,8.061h28.298c5.068,0,9.192-4.124,9.192-9.194c0-5.069-4.124-9.193-9.192-9.193
                      c-0.699,0-1.421,0.102-2.274,0.32c-0.452,0.115-0.921-0.096-1.136-0.509c-1.981-3.835-5.883-6.217-10.183-6.217
                      c-5.125,0-9.662,3.453-11.032,8.397c-0.072,0.261-0.248,0.481-0.486,0.611c-0.238,0.129-0.517,0.154-0.778,0.075
                      C18.806,21.419,18.017,21.285,17.274,21.285z" stroke={ cloudColor } strokeWidth= "1.8" fill="transparent">
                  </path>;

    var boltSVG = <path d="M29.364,54.813c-0.168,0-0.336-0.041-0.49-0.129
                          c-0.393-0.22-0.59-0.679-0.478-1.116l1.092-4.292h-1.973c-0.402,0-0.765-0.242-0.921-0.612c-0.156-0.371-0.074-0.799,0.207-1.086
                          l7.102-7.255c0.315-0.324,0.81-0.396,1.204-0.172c0.395,0.221,0.589,0.68,0.479,1.117l-1.094,4.294h1.972
                          c0.402,0,0.765,0.242,0.921,0.612c0.156,0.371,0.074,0.799-0.207,1.086l-7.098,7.253C29.885,54.709,29.625,54.813,29.364,54.813z"
                          strokeDasharray = "45"
                          strokeDashoffset = "0"
                          stroke={ boltColor }
                          strokeWidth="1"
                          fill="transparent"
                          >
                    </path>;

    const containerStyle = {
      position: "relative",
      height: 100,
      width: 100,
      borderRadius: "50%",
      // left: "25vw",
      // top: "25vh",
      boxShadow: "2px 2px 3px rgba(0,0,0,.3)",
      border: `2px solid #673AB7`,
      backgroundColor: bgColor,
      transition: "background-color 0.5s ease"
    };

    return (
      <div style={ containerStyle }>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 65 65">
          <g>
            { boltSVG }
            <animate attributeType="CSS" attributeName="opacity"
              from="1" to="0" dur="2s" repeatCount="indefinite" />
          </g>
            <g>
              { cloudSVG }
              <animate attributeType="CSS" attributeName="opacity"
                from=".8" to=".6" dur="1s" repeatCount="indefinite" />
            </g>
        </svg>
        </div>
    );
  }
}

export default Lamp;
