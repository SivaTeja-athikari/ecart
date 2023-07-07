import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {corosleImageData, alreadyAccountText} from './config';
import {BlueVoilet} from '../../components/config';
import LandingPageController from './LandingPageController';
import CustomButton from '../../components/CustomButton';
export class LandingPage extends LandingPageController {
  render() {
    const {indexImage} = this.state;
    const activedot1 = indexImage === 0 ? BlueVoilet : 'grey';
    const activedot2 = indexImage === 1 ? BlueVoilet : 'grey';
    const activedot3 = indexImage === 2 ? BlueVoilet : 'grey';
    return (
      <SafeAreaView style={styles.mainCrad}>
        <View style={styles.corosleCrad}>
          <Image
            style={styles.imageProduct}
            resizeMode="cover"
            source={{uri: `${corosleImageData[indexImage].photo}`}}
          />
          <Text style={styles.titleText}>
            {corosleImageData[indexImage].title}
          </Text>
          <Text style={styles.descriptionText}>
            {corosleImageData[indexImage].text}
          </Text>
          <View style={styles.dotsCard}>
            <View>
              <Text style={{...styles.dotsText, color: `${activedot1}`}}>
                .
              </Text>
            </View>
            <View>
              <Text style={{...styles.dotsText, color: `${activedot2}`}}>
                .
              </Text>
            </View>
            <View>
              <Text style={{...styles.dotsText, color: `${activedot3}`}}>
                .
              </Text>
            </View>
          </View>
        </View>
        <CustomButton
          text="Create Account"
          onPress={this.handleNavigatetoCreateAccount}
        />
        <Text style={styles.alreadyAccount}>{alreadyAccountText}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainCrad: {
    flex: 1,
    padding: 15,
  },
  imageProduct: {
    height: 350,
    width: 300,
    marginBottom: 20,
    borderRadius: 13,
  },
  corosleCrad: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 15,
  },
  dotsCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsText: {
    fontSize: 50,
    color: '#000',
    margin: 7,
  },
  titleText: {
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 10,
    color: '#0f131c',
    maxWidth: 300,
    textAlign: 'center',
  },
  descriptionText: {
    color: '#b6bac2',
    fontSize: 15,
    maxWidth: 300,
    textAlign: 'center',
  },
  alreadyAccount: {
    color: BlueVoilet,
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default LandingPage;
