import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import VerificationPageController from './VerificationPageController';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Black, BlueVoilet, Grey} from '../../components/config';
import {White} from '../splashScreen/config';
import CustomButton from '../../components/CustomButton';
import RBSheet from 'react-native-raw-bottom-sheet';

export class VerificationPage extends VerificationPageController {
  ref1: any;
  ref2: any;
  ref3: any;
  ref4: any;
  ref5: any;
  constructor(props: any) {
    super(props);
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
    this.ref3 = React.createRef();
    this.ref4 = React.createRef();
    this.ref5 = React.createRef();
  }
  RBSheet: any;
  render() {
    console.log(this.state.randomOtp, 'otp loaded');
    return (
      <SafeAreaView>
        <View style={styles.verificationContainer}>
          <View style={styles.verificationPageHeader}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CreateAccount')}>
              <Image
                style={[
                  styles.icon_styles,
                  {tintColor: Grey, marginRight: 110},
                ]}
                source={require('./assests/backarrow.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '700',
                color: Black,
              }}>
              Verification
            </Text>
          </View>

          <View
            style={{
              width: 140,
              height: 140,
              borderRadius: 70,
              backgroundColor: '#c4c3d1',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: BlueVoilet,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={styles.icon_styles}
                source={require('./assests/maillock.png')}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                color: Black,
                textAlign: 'center',
                fontSize: 24,
                fontWeight: '700',
                paddingTop: 30,
              }}>
              Verification Code
            </Text>
            <Text
              style={{
                color: Grey,
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '400',
                paddingTop: 30,
              }}>
              We have to send the code verification to
              <Text
                style={{
                  color: Black,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '600',
                  lineHeight: 28,
                }}>
                {' '}
                sivateja950@gmail.com
              </Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <TextInput
              inputMode="numeric"
              value={this.state.firstDigit}
              ref={this.ref1}
              onFocus={() => this.setState({allBorder: 'first'})}
              onChangeText={text => {
                this.setState({firstDigit: text});
                if (text.length >= 1) {
                  this.ref2.current.focus();
                }
              }}
              maxLength={1}
              style={{
                height: 60,
                width: 60,
                borderRadius: 15,
                borderWidth: 1,
                borderColor:
                  this.state.allBorder === 'first' ? BlueVoilet : Grey,
                marginRight: 10,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}
            />
            <TextInput
              inputMode="numeric"
              value={this.state.secondDigit}
              ref={this.ref2}
              onFocus={() => this.setState({allBorder: 'second'})}
              onChangeText={text => {
                this.setState({secondDigit: text});
                if (text.length >= 1) {
                  this.ref3.current.focus();
                } else if (text.length < 1) {
                  this.ref1.current.focus();
                }
              }}
              maxLength={1}
              style={{
                height: 60,
                width: 60,
                borderRadius: 15,
                borderWidth: 1,
                borderColor:
                  this.state.allBorder === 'second' ? BlueVoilet : Grey,
                marginRight: 10,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}
            />
            <TextInput
              inputMode="numeric"
              value={this.state.thirdDigit}
              ref={this.ref3}
              onFocus={() => this.setState({allBorder: 'third'})}
              onChangeText={text => {
                this.setState({thirdDigit: text});
                if (text.length >= 1) {
                  this.ref4.current.focus();
                } else if (text.length < 1) {
                  this.ref2.current.focus();
                }
              }}
              maxLength={1}
              style={{
                height: 60,
                width: 60,
                borderRadius: 15,
                borderWidth: 1,
                borderColor:
                  this.state.allBorder === 'third' ? BlueVoilet : Grey,
                marginRight: 10,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}
            />
            <TextInput
              inputMode="numeric"
              value={this.state.fourthDigit}
              ref={this.ref4}
              onFocus={() => this.setState({allBorder: 'fourth'})}
              onChangeText={text => {
                this.setState({fourthDigit: text});
                if (text.length >= 1) {
                  this.ref5.current.focus();
                } else if (text.length < 1) {
                  this.ref3.current.focus();
                }
              }}
              maxLength={1}
              style={{
                height: 60,
                width: 60,
                borderRadius: 15,
                borderWidth: 1,
                borderColor:
                  this.state.allBorder === 'fourth' ? BlueVoilet : Grey,
                marginRight: 10,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}
            />
            <TextInput
              inputMode="numeric"
              value={this.state.fifthDigit}
              ref={this.ref5}
              onFocus={() => this.setState({allBorder: 'fifth'})}
              onChangeText={text => {
                this.setState({fifthDigit: text});
                if (text.length >= 1) {
                  this.ref5.current.focus();
                } else if (text.length < 1) {
                  this.ref4.current.focus();
                }
              }}
              maxLength={1}
              style={{
                height: 60,
                width: 60,
                borderRadius: 15,
                borderWidth: 1,
                borderColor:
                  this.state.allBorder === 'fifth' ? BlueVoilet : Grey,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}
            />
          </View>
          <View style={{marginTop: 30}}>
            <CustomButton
              text="Submit"
              onPress={() => this.handleBottomSheet()}
            />
            <Text
              style={{
                paddingTop: 30,
                textAlign: 'center',
                color: Grey,
                fontSize: 14,
              }}>
              Don't recieve the code?{' '}
              <Text
                style={{color: BlueVoilet, fontSize: 14, fontWeight: '600'}}>
                Resend
              </Text>
            </Text>
          </View>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={480}
            openDuration={250}
            customStyles={{
              container: {
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              },
            }}>
            <View>
              <View
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: 70,
                  backgroundColor: '#e5faef',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 50,
                }}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: '#00d261',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={[styles.icon_styles]}
                    source={require('./assests/check.png')}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: Black,
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: '700',
                    paddingTop: 30,
                  }}>
                  Register Success
                </Text>
                <Text
                  style={{
                    color: Grey,
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingTop: 30,
                  }}>
                  Congratulations! Your account already created. PLease login to
                  get amazing experience.
                </Text>
              </View>
              <View style={{marginTop: 30}}>
                <CustomButton
                  text="Go to Home page"
                  onPress={() => this.RBSheet.open()}
                />
              </View>
            </View>
          </RBSheet>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  verificationContainer: {
    padding: 20,
  },
  verificationPageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Grey,
  },
  icon_styles: {
    width: 30,
    height: 30,
    tintColor: White,
    alignSelf: 'center',
  },
});
export default VerificationPage;
