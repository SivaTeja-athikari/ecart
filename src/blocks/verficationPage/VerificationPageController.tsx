import AsyncStorage from '@react-native-async-storage/async-storage';
import {Component} from 'react';

interface IProps {
  navigation?: any;
}
interface IState {
  randomOtp: string;
  firstDigit: string;
  secondDigit: string;
  thirdDigit: string;
  fourthDigit: string;
  fifthDigit: string;
  allBorder: string;
}
export class VerificationPageController extends Component<IProps, IState> {
  state = {
    randomOtp: '',
    firstDigit: '',
    secondDigit: '',
    thirdDigit: '',
    fourthDigit: '',
    fifthDigit: '',
    allBorder: '',
  };
  componentDidMount(): void {
    this.getRandomOtp();
  }
  getRandomOtp = async () => {
    try {
      const randomOtp = await AsyncStorage.getItem('randomOtp');
      if (randomOtp !== null) {
        await this.setState({randomOtp: JSON.parse(randomOtp)});
      }
    } catch (error) {
      console.log(error);
    }
  };
  handleBottomSheet = () => {};
}

export default VerificationPageController;
