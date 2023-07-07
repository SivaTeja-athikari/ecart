import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CreateAccountController from './CreateAccountController';

import {CreateAccountText, Email, Password, Title, UserName} from './config';
import {Black, BlueVoilet, Grey, LightGrey} from '../../components/config';
import {moderateScale} from '../../../Metrics';
import {White} from '../splashScreen/config';
import {TextInput} from 'react-native';
import CustomButton from '../../components/CustomButton';

const {width, height} = Dimensions.get('screen');

export class CreateAccount extends CreateAccountController {
  render() {
    console.log(this.state.randomOtp);
    return (
      <SafeAreaView style={styles.create_account_bgContainer}>
        <View style={styles.sub_container}>
          <View>
            <Text style={styles.create_account_text}>{Title}</Text>
            <Text style={styles.create_account_sub_text}>
              {CreateAccountText}
            </Text>
          </View>
          <View>
            <View>
              <Text style={styles.each_input_title}>{UserName}</Text>
              <View
                style={[
                  styles.inputfiled_container,
                  {
                    borderWidth: 1,
                    borderColor:
                      this.state.borderChanged === 'user' ? BlueVoilet : Grey,
                  },
                ]}>
                <Image
                  style={[
                    styles.icon_styles,
                    {
                      tintColor: this.state.userName !== '' ? BlueVoilet : Grey,
                    },
                  ]}
                  resizeMode="contain"
                  source={require('./assests/user.png')}
                />
                <TextInput
                  onChangeText={value => this.setState({userName: value})}
                  onFocus={() => this.handleChangeUserBorderColor()}
                  placeholder="Create your username"
                  placeholderTextColor={Grey}
                />
              </View>
            </View>
            <View>
              <Text style={styles.each_input_title}>{Email}</Text>
              <View
                style={[
                  styles.inputfiled_container,
                  {
                    borderWidth: 1,
                    borderColor:
                      this.state.borderChanged === 'email' ? BlueVoilet : Grey,
                  },
                ]}>
                <Image
                  style={[
                    styles.icon_styles,
                    {tintColor: this.state.email !== '' ? BlueVoilet : Grey},
                  ]}
                  resizeMode="contain"
                  source={require('./assests/email.png')}
                />
                <TextInput
                  onFocus={() => this.handleChangeEmailBorderColor()}
                  onChangeText={value => this.setState({email: value})}
                  placeholder="Enter your Email or phone number"
                  placeholderTextColor={Grey}
                />
              </View>
            </View>
            <View>
              <Text style={styles.each_input_title}>{Password}</Text>
              <View
                style={[
                  styles.password_container,
                  {
                    borderWidth: 1,
                    borderColor:
                      this.state.borderChanged === 'password'
                        ? BlueVoilet
                        : Grey,
                  },
                ]}>
                <View style={styles.inputfiled_container}>
                  <Image
                    style={[
                      styles.icon_styles,
                      {
                        tintColor:
                          this.state.password !== '' ? BlueVoilet : Grey,
                      },
                    ]}
                    resizeMode="contain"
                    source={require('./assests/lock.png')}
                  />
                  <TextInput
                    secureTextEntry={this.state.hidePassword}
                    value={this.state.password}
                    maxLength={10}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="send"
                    onChangeText={value => this.setState({password: value})}
                    onFocus={() => this.handleChangePasswordBorderColor()}
                    placeholder="Create your Password"
                    placeholderTextColor={Grey}
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{}}
                  onPress={this.managePasswordVisibility}>
                  <Image
                    style={styles.icon_styles}
                    source={
                      this.state.hidePassword
                        ? require('./assests/hide.png')
                        : require('./assests/view.png')
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.custom_button_style}>
              <CustomButton
                text="Create Account"
                onPress={() => {
                  this.handleCreateAccount();
                }}
              />
            </View>

            <Text style={styles.alternate_login_text}>
              or using other method
            </Text>

            <View style={styles.social_login_container}>
              <Image
                style={styles.social_icon_styles}
                source={require('./assests/google.png')}
              />
              <Text style={styles.social_login_text}>Sign Up with Google</Text>
            </View>
            <View style={styles.social_login_container}>
              <Image
                style={styles.social_icon_styles}
                source={require('./assests/facebook.png')}
              />
              <Text style={styles.social_login_text}>
                Sign Up with Facebook
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  create_account_bgContainer: {
    height: height,
    backgroundColor: White,
  },
  sub_container: {
    padding: moderateScale(20),
  },
  create_account_text: {
    color: Black,
    fontSize: moderateScale(18),
    fontWeight: '700',
    marginTop: moderateScale(30),
  },
  create_account_sub_text: {
    color: Grey,
    fontSize: 14,
    paddingTop: moderateScale(9),
    fontWeight: '400',
  },
  icon_styles: {width: 30, height: 30, tintColor: Grey, marginRight: 10},
  social_icon_styles: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  inputfiled_container: {
    flexDirection: 'row',
    height: moderateScale(55),
    marginHorizontal: 0,
    alignItems: 'center',
    backgroundColor: LightGrey,
    padding: 10,
    borderRadius: 10,
  },

  each_input_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Black,
    paddingTop: 20,
    paddingBottom: 13,
  },
  password_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: LightGrey,
    borderRadius: 10,
  },
  custom_button_style: {
    marginTop: moderateScale(40),
  },
  alternate_login_text: {
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
    textAlign: 'center',
    color: Grey,
  },
  social_login_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '90%',
    borderWidth: 1,
    borderColor: '#f4f4f4',
    borderRadius: 28,
    marginBottom: 20,
  },
  social_login_text: {
    color: Black,
    fontSize: 17,
    fontWeight: '500',
  },
});

export default CreateAccount;
