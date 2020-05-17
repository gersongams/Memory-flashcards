import * as React from 'react';
import {Text} from 'react-native';
import Colors from "../constants/Colors";

const StyledText = props => <Text {...props} style={[props.style, {fontFamily: 'nunito', color: Colors.white}]}/>;

export default StyledText