import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';

class UserDetails extends Component {
  render() {
    const { data } = this.props
    return (
      <View style={styles.contain} >
        <View style={styles.detailsView} >
          <View style={styles.imageView} >
          </View>
          <Text style={styles.nameText} >{data.firstname + ' ' + data.lastname}</Text>
          <TouchableOpacity>
            <Image
              style={styles.iconStyle}
              source={{ uri: "https://img.icons8.com/ultraviolet/40/000000/pencil.png" }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.addressView} >
          <View>
            <View style={styles.addressInnerView} >
              <Image
                style={styles.iconStyle}
                source={{ uri: "https://img.icons8.com/ultraviolet/50/000000/marker.png" }}
              />
              <Text style={styles.titleText} >Address</Text>
            </View>
            <View style={styles.descView}>
              <Text style={styles.conatctText} >{data.street_address}</Text>
            </View>
          </View>
          <View style={styles.contactView} >
            <View style={styles.addressInnerView} >
              <Image
                style={styles.iconStyle}
                source={{ uri: "https://img.icons8.com/ultraviolet/40/000000/phone.png" }}
              />
              <Text style={styles.titleText} >Contact</Text>
            </View>
            <View style={styles.descView}>
              <Text style={styles.conatctText} >{data.phone_number}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  }
};


export default connect(mapStateToProps)(UserDetails);
