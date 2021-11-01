import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const CustomTabButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={
        props.accessibilityState.selected
          ? [props.style, {borderTopColor: '#842252', borderTopWidth: 2,}]
          : props.style
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CustomTabButton;
