const curentdate=new Date();
import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import PropTypes from 'prop-types';
export default class MyDatePicker extends Component {
 
  static propTypes = {
    height:PropTypes.number.isRequired,
    width:PropTypes.number.isRequired,
    date:PropTypes.number.isRequired,
    mosde:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    format:PropTypes.string.isRequired,
    maxDate:PropTypes.any.isRequired,
    onDateChange:PropTypes.func.isRequired,
    customStyles:PropTypes.object.isRequired,
    confirmBtnText:PropTypes.string.isRequired,
    cancelBtnText:PropTypes.string.isRequired
}
render(){
    return (
      <DatePicker
        style={{width: this.props.width}}
        date={this.props.date}
        mode={this.props.mode}
        placeholder={this.props.placeholder}
        format={this.props.format}
        minDate={this.props.minDate}
        maxDate={this.props.maxDate}
        confirmBtnText={this.props.confirmBtnText}
        cancelBtnText={this.props.cancelBtnText}
        customStyles={this.props.customStyles}
        onDateChange={this.props.onDateChange}
      />
    )
  }
}