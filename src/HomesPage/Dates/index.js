import React from "react";
import styled from "styled-components";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";

const Button = styled.button`
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  padding: 7px 16px;
  margin-top: 2px;
  font-size: 14px;
  color: #383838;
  background: transparent;
  cursor: pointer;
`;

export default class DatePicker extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    isOpen: false
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  saveDates = () => {
    this.props.onDatesSave(this.state.startDate, this.state.endDate);

    this.close();
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  datePickerToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  reset = () => {
    this.setState({ startDate: null, endDate: null });
  };

  render() {
    return (
      <div>
        <Button onClick={this.datePickerToggle} highlighted={this.state.isOpen}>
          Dates
        </Button>

        {this.state.isOpen && (
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
          />
        )}
      </div>
    );
  }
}
