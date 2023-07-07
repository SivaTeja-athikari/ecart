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
  count: number;
  resendOtp: string;
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
    count: 30,
    resendOtp: '',
  };
  componentDidMount(): void {
    this.getRandomOtp();
  }
  updateRandomOtp = () => {
    try {
      AsyncStorage.setItem('randomOtp', JSON.stringify(this.state.randomOtp));
    } catch (error) {
      console.log(error);
    }
  };
  resendTime = () => {
    let intervalId = setInterval(() => {
      if (this.state.count === 0) {
        clearInterval(intervalId);
        this.setState({
          randomOtp: Math.ceil(Math.random() * 100000).toString(),
        }),
          () => {
            this.updateRandomOtp();
          };
      } else {
        this.setState({count: this.state.count - 1});
      }
    }, 2000);
  };
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
