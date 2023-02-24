import { View } from 'react-native';
import React from 'react';

function TapbarComponent({
  tabWidth, iconComponent,
}) {
  const containerStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    width: tabWidth,
  };

  return (
    <View style={containerStyle}>
      {iconComponent}
    </View>
  );
}

export default TapbarComponent;
