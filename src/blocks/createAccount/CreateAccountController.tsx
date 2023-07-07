import AsyncStorage from '@react-native-async-storage/async-storage';
import {Component} from 'react';
import {Alert} from 'react-native';

interface IProps {
  navigation?: any;
}
interface IState {
  userName: string;
  email: string;
  error: boolean;
  password: string;
  borderChanged: string;
  randomOtp: string;
  hidePassword: boolean;
  accountList: {
    userName: string;
    email: string;
    password: string;
  }[];
}
export class CreateAccountController extends Component<IProps, IState> {
  state = {
    borderChanged: '',
    error: false,
    userName: '',
    email: '',
    password: '',
    accountList: [],
    randomOtp: '',
    hidePassword: true,
  };

  componentDidMount() {
    this.loadAccounts();
  }

  loadAccounts = async () => {
    try {
      const accounts = await AsyncStorage.getItem('accounts');
      if (accounts !== null) {
        this.setState({accountList: JSON.parse(accounts)});
      }
    } catch (error) {
      console.log(error);
    }
  };
  saveAccounts = async () => {
    try {
      await AsyncStorage.setItem(
        'accounts',
        JSON.stringify(this.state.accountList),
      );
      await AsyncStorage.setItem(
        'randomOtp',
        JSON.stringify(this.state.randomOtp),
      );
    } catch (error) {
      console.log(error);
    }
  };
  managePasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };
  handleCreateAccount = async () => {
    let result = this.state.accountList.some((each: any) => {
      if (each.email === this.state.email) {
        return true;
      } else false;
    });
    if (result) {
      Alert.alert('Email already exists');
    } else {
      console.log('triggered');
      let account = {
        id: Date.now(),
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
      };
      if (this.state.userName.length !== 0) {
        await this.setState(
          (prevState: any) => ({
            accountList: [...prevState.accountList, account],
            error: true,
            randomOtp: Math.ceil(Math.random() * 100000).toString(),
          }),
          async () => {
            await this.saveAccounts();
          },
        );
        await this.props.navigation.navigate('VerificationPage');
      }
    }
  };

  handleChangeUserBorderColor = () => {
    this.setState({borderChanged: 'user'});
  };
  handleChangeEmailBorderColor = () => {
    this.setState({borderChanged: 'email'});
  };
  handleChangePasswordBorderColor = () => {
    this.setState({borderChanged: 'password'});
  };
}

export default CreateAccountController;
