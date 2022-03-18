/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import Icon from 'react-native-ico';

const AppButton = ({onPress, title, img, taskIsComplete, type, size}) => {

    const width = Dimensions.get('window').width;
    const large = width / 1.15;
    const small = width / 3;
    const btnSize = size === 'large' ? large : small;
    const btnBgColor = taskIsComplete === true ? '#6CBE49' : 'rgba(0,0,0,.5)';
    type === 'withImg' ? 'withIcon' : null;

    const appButtonContainer = {
        backgroundColor: size === 'small' ? '#808080' : btnBgColor,
        borderRadius: size === 'small' ? 15 : 19,
        padding: size === 'small' ? 10 : 15,
        width: btnSize,
        alignItems: 'center',
        margin: 10,
    };

    const appButtonText = {
        fontSize: size === 'small' ? 12 : 16,
        color:'white',
        fontWeight: '600',
        alignSelf: 'center',
        marginHorizontal: 10,
    };

    const imgContainer = {
        width: 24,
        height: 24,
        borderRadius:5,
       // marginHorizontal: 20,
    };

         return (
            <TouchableOpacity  onPress={onPress} style={appButtonContainer}>
             <View style ={{flexDirection:'row', width: '100%', justifyContent:'center'}}>
             <View>
                { type === 'withImg' ? <Image style={imgContainer} source={img}/> : null}
                </View>
            <Text style={appButtonText}>{title}</Text>
            <View style ={{alignSelf:'center'}}>
                { type === 'withIcon' ? <Icon name ="add" group="essential" color="white"
                    height= { size === 'small' ? 12 : 16}
                    width="16"
                    /> : null }
            </View>
            </View>
            </TouchableOpacity>
         );
         };


export default AppButton;
