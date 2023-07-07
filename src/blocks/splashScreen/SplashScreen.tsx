import React from 'react';
import {StyleSheet, Dimensions, View, Text, StatusBar} from 'react-native';
import SplashScreenController from './SplashScreenController';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SplashTitle, SplashText, Version, White, BlusihWhite} from './config';
import {BlueVoilet} from '../../components/config';
import {moderateScale} from '../../../Metrics';

const {width, height} = Dimensions.get('window');

export class SplashScreen extends SplashScreenController {
  render() {
    return (
      <SafeAreaView style={styles.onboarding_background_container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={BlueVoilet}
          translucent={true}
        />
        <View style={styles.splash_title_text_container}>
          <Text style={styles.splash_title}>{SplashTitle}</Text>
          <Text style={styles.splash_text}>{SplashText}</Text>
        </View>
        <Text style={styles.version}>{Version}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  onboarding_background_container: {
    backgroundColor: BlueVoilet,
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splash_title_text_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  splash_title: {
    fontSize: 36,
    fontWeight: '800',
    color: White,
    paddingBottom: 15,
  },
  splash_text: {
    fontSize: 16,
    fontWeight: '500',
    color: BlusihWhite,
  },
  version: {
    fontSize: 16,
    fontWeight: '500',
    color: BlusihWhite,
    top: moderateScale(270),
  },
});

export default SplashScreen;
