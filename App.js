import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import DropDownList from './DropDownList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const items = ['0%', '25%', '50%', '75%', '100%'];
    const dafaultLabel = '0%';
    const index = -1;

    return (
      <View style={styles.container}>
        <DropDownList testID={'DropListUse1'} items={items} dafaultLabel={dafaultLabel} index={index}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
