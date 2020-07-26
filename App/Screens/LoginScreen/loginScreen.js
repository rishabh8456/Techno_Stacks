import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import * as images from '../../Assets/Images/map';
import styles from './style';
import * as Global from './../../Utils/Common/Global';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDataFromAPI } from '../../Redux/Action/fetchAPIAction';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userWebsite: '',
      userEmail: '',
      userPassword: '',
      isRemember: false,
      isTerms: false,
      isButtonEnable: false,
      isEmail: false,
      isUrl: false,
      isPassword: false
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    if (props.message) {
      alert(props.message)
    }
  }

  navigateToApp() {
    if (this.state.isButtonEnable) {
      let data = {
        username: this.state.userEmail,
        password: this.state.userPassword,
        url: this.state.userWebsite,
      }
      this.props.fetchDataFromAPI(data)
    } else {
      if (!this.state.isUrl) {
        alert('Please enter valid url')
      } else if (!this.state.isEmail) {
        alert('Please enter valid email')
      } else if (!this.state.isPassword) {
        alert('Please enter valid password')
      }
    }
  }

  validationURL(url) {
    var res = url.match(Global.URL_REGEX);
    if (res == null)
      return false;
    else
      return true;
  }

  validationEmail(email) {
    var re = Global.EMAIL_REGEX
    return re.test(email);
  };

  validateFields() {
    if (this.state.userWebsite.length > 0 && this.validationURL(this.state.userWebsite)) {
      this.setState({ isUrl: true })
      if (this.state.userEmail.length > 0 && this.validationEmail(this.state.userEmail)) {
        this.setState({ isEmail: true })
        if (this.state.userPassword.length > 0) {
          this.setState({ isButtonEnable: true, isPassword: true })
        } else { this.setState({ isButtonEnable: false, isPassword: false }) }
      } else { this.setState({ isButtonEnable: false, isEmail: false }) }
    } else { this.setState({ isButtonEnable: false, isUrl: false }) }
  }

  changeIsRemember() {
    this.setState({ isRemember: !this.state.isRemember })
  }

  changeIsTerms() {
    this.setState({ isTerms: !this.state.isTerms })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.SectionStyle}>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholder={'Enter User Website'}
            value={this.state.userWebsite}
            onChangeText={(text) => this.setState({ userWebsite: text }, () => this.validateFields())}
            returnKeyType={'next'}
            onSubmitEditing={() => this.userEmail.focus()}
          />
          <Image
            source={images.login.appWorkshop}
            style={styles.ImageStyle}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            autoCorrect={false}
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholder={'Enter Email'}
            value={this.state.userEmail}
            onChangeText={(text) => this.setState({ userEmail: text }, () => this.validateFields())}
            returnKeyType={'next'}
            ref={(ref) => { this.userEmail = ref; }}
            onSubmitEditing={() => this.userPassword.focus()}
          />
          <Image
            source={images.login.appUser}
            style={styles.ImageStyle}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholder={'Enter Password'}
            value={this.state.userPassword}
            onChangeText={(text) => this.setState({ userPassword: text }, () => this.validateFields())}
            secureTextEntry={true}
            keyboardType={'number-pad'}
            returnKeyType={'done'}
            ref={(ref) => { this.userPassword = ref; }}
          />
          <Image
            source={images.login.appPassword}
            style={styles.ImageStyle}
          />
        </View>
        <View style={styles.detailsView} >
          <View style={styles.rememberMeView} >
            <TouchableOpacity onPress={() => this.changeIsRemember()} style={styles.rememberMeInnerView} >
              <TouchableOpacity style={styles.checkBoxView} >
                {
                  (this.state.isRemember) ?
                    <Image style={{ flex: 1 }} source={{ uri: "https://img.icons8.com/windows/32/000000/checked-checkbox.png" }} />
                    : null
                }
              </TouchableOpacity>
              <Text style={styles.detailsTextStyle} >Remember Me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.detailsTextStyle} >Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.changeIsTerms()} style={styles.accpetView} >
            <TouchableOpacity style={styles.checkBoxView} onPress={() => this.changeIsTerms()}   >
              {
                (this.state.isTerms) ?
                  <Image style={{ flex: 1 }} source={{ uri: "https://img.icons8.com/windows/32/000000/checked-checkbox.png" }} />
                  : null
              }
            </TouchableOpacity>
            <Text style={styles.detailsTextStyle} >I accept the Terms & Condition </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => this.navigateToApp()} style={[styles.loginView, styles.loginTouchView]} >
          <Text style={styles.loginTextStyle} >Login</Text>
        </TouchableOpacity>
        <View style={styles.termsConditionView} >
          <Text style={styles.privacyTextStyle} >Privacy Policy<Text style={styles.AndTextStyle} > AND </Text>Terms & Condition</Text>
        </View>
        <View style={styles.versionView} >
          <Text style={styles.versionTextStyle} >Version 1.6</Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.isLoading,
    data: state.data,
    message: state.message
  }
};

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({
      fetchDataFromAPI,
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
