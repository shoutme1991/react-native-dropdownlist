import React, {Component} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

class DropDownList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isExpandDropList: false,
      currentLabel: '0%',
    };
  }

  render() {

    const { items, index } = this.props;

    return (
    <View>
      <TouchableOpacity onPress={() => this.setState({isExpandDropList: !this.state.isExpandDropList})} testID={'placeholder'} >
        <Text testID={'defaultLabel'}>
          {index === -1 ? '0%' : this.state.currentLabel}
        </Text>
      </TouchableOpacity>
      {
        this.state.isExpandDropList ?
          (
            <View testID={'DropList'}>
              {items.map((elem, i) =>
                <TouchableOpacity
                  onPress={() => this.setState({currentLabel: elem})}
                  testID={`DropListItem_${i}`}>
                  <View>
                      <Text>{elem}</Text>
                  </View>
                </TouchableOpacity>)
              }
            </View>
          ) : null
      }
    </View>
    );
  }
}


export default DropDownList;