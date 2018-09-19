import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import DropDownList from './DropDownList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const items = ['0%', '25%', '50%', '75%', '100%', '25%', '50%', '75%', '100%', '25%', '50%', '75%', '100%', '25%', '50%', '75%', '100%', '25%', '50%', '75%', '100%', '25%', '50%', '75%', '100%', '25%', '50%', '75%', '100%', '25%', '50%', '75%', '100%', '25%', '50%', '75%', '100%'];
    const itemHeightSize = 10;
    const lineStroke = 2;

    return (
      <View style={styles.container}>
        <DropDownList
        testID={'DropListUse1'}
        items={items}
        itemHeightSize={itemHeightSize}
        lineStroke={lineStroke}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FCFF',
  },
});
