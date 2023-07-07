import {Component} from 'react';

interface IProps {
  navigation?: any;
}
interface IState {}

export class SplashScreenController extends Component<IProps, IState> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('LandingPage');
    }, 3000);
  }
}

export default SplashScreenController;
