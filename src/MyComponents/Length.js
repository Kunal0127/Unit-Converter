import React from "react";

function toKilometer(meter) {
  return meter / 1000;
}

function toMeter(kilometer) {
  return kilometer * 1000;
}

function tryConvert(length, convert) {
  const input = parseFloat(length);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  m: "Meter",
  k: "Kilometer",
};

class LengthInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onLengthChange(e.target.value);
  }

  render() {
    const length = this.props.length;
    const scale = this.props.scale;
    return (
      <div>
        <fieldset>
          <legend>{scaleNames[scale]}:</legend>
          {/* <input value={length} onChange={this.handleChange} /> */}
          <input value={length || ""} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

class LengthCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { length: "", scale: "m" };
    this.handleMeterChange = this.handleMeterChange.bind(this);
    this.handleKilometerChange = this.handleKilometerChange.bind(this);
  }

  handleMeterChange(length) {
    this.setState({ scale: "m", length });
  }

  handleKilometerChange(length) {
    this.setState({ scale: "k", length });
  }

  render() {
    const scale = this.state.scale;
    const length = this.state.length;
    const meter = scale === "k" ? tryConvert(length, toMeter) : length;
    const kilometer = scale === "m" ? tryConvert(length, toKilometer) : length;

    return (
      <>
        <div className="container">
          <LengthInput
            scale="m"
            length={meter}
            onLengthChange={this.handleMeterChange}
          />
          <LengthInput
            scale="k"
            length={kilometer}
            onLengthChange={this.handleKilometerChange}
          />
          <hr />
          <hr />
        </div>
      </>
    );
  }
}

export default function Length() {
  return <LengthCalculator />;
}
