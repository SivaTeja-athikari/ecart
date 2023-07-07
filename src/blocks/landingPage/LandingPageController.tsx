import {Component} from 'react';
interface IProps {
  navigation?: any;
}
interface IState {
  indexImage: number;
}
export class LandingPageController extends Component<IProps, IState> {
  state = {
    indexImage: 0,
  };
  componentDidMount(): void {
    setInterval(() => {
      const {indexImage} = this.state;
      if (indexImage === 2) {
        this.setState({indexImage: 0});
      } else {
        this.setState({indexImage: this.state.indexImage + 1});
      }
    }, 3000);
  }
  handleNavigatetoCreateAccount = () => {
    this.props.navigation.navigate('CreateAccount');
  };
}

export default LandingPageController;
