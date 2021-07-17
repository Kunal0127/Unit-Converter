import React from "react";

function toRadian(degree) {
  return (degree * Math.PI) / 180;
}

function toDegree(radian) {
  return (radian * 180) / Math.PI;
}

function tryConvert(angle, convert) {
  const input = parseFloat(angle);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded;
}

const scaleNames = {
  r: "radian",
  d: "degree",
};

class AngleInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onAngleChange(e.target.value);
  }
  render() {
    const angle = this.props.angle;
    const scale = this.props.scale;
    return (
      <div>
        <fieldset>
          <legend>{scaleNames[scale]}</legend>
          <input value={angle} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

class AngleCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { angle: "", scale: "r" };
    this.handleRadianChange = this.handleRadianChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
  }

  handleRadianChange(angle) {
    this.setState({ scale: "r", angle });
  }

  handleDegreeChange(angle) {
    this.setState({ scale: "d", angle });
  }

  render() {
    const scale = this.state.scale;
    const angle = this.state.angle;
    const radian = scale === "d" ? tryConvert(angle, toRadian) : angle;
    const degree = scale === "r" ? tryConvert(angle, toDegree) : angle;

    return (
      <div className="container">
        <AngleInput
          scale="r"
          angle={radian}
          onAngleChange={this.handleRadianChange}
        />
        <AngleInput
          scale="d"
          angle={degree}
          onAngleChange={this.handleDegreeChange}
        />
        <hr />
        <hr />
      </div>
    );
  }
}

export default function Angle() {
  return <AngleCalculator />;
}
