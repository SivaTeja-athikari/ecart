import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BlueVoilet} from './config';
import {moderateScale} from '../../Metrics';
interface IProps {
  text: string;
  onPress: () => void;
}
interface IState {}
export class CustomButton extends Component<IProps, IState> {
  render() {
    const {text, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.custom_button} onPress={onPress}>
        <Text style={styles.custom_button_text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  custom_button: {
    backgroundColor: BlueVoilet,
    height: moderateScale(50),
    width: '96%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(25),
  },
  custom_button_text: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
export default CustomButton;
