import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Grid, Col, Row, Text } from 'native-base';

const createStyle = lineWidth => StyleSheet.create({
  constainer: {
    width: 100,
    height: 20,
    paddingTop: 80,
  },
  placeholderText: {
    borderWidth: lineWidth,
    borderRightWidth: 0,
    borderColor: '#111111',
  },
  placeholderButton: {
    borderWidth: lineWidth,
    borderColor: '#111111',
  },
  itemContainer: {
    width: 100,
    height: 20,
    borderRightWidth: lineWidth,
    borderLeftWidth: lineWidth,
    borderColor: '#111111',
  },
});

class DropDownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpandDropList: false,
      currentLabel: '-',
      lineStroke: props.lineStroke,
    };
  }

  removeDupLine = (i, totalSize, lineStoke) => {
    if (i === totalSize) {
      return { borderBottomWidth: lineStoke };
    }
    return { borderTopWidth: lineStoke };
  }

  render() {
    const { items, itemShowMax, itemHeightSize, active } = this.props;
    return (
      <View>
        <Grid style={ createStyle(this.props.lineStroke).constainer }>
          <Row style={{ height: (itemHeightSize*2)+4 }}>
            <Col size={2}
                 style={[ createStyle(this.props.lineStroke).placeholderText, active ? null : { backgroundColor: '#d3d3d3' }]}
            >
              <TouchableOpacity
                onPress={() => active ? this.setState({isExpandDropList: !this.state.isExpandDropList}) : null}
                testID={'placeholder'}
              >
                <Text
                  testID={'defaultLabel'}
                  style={{ fontsize: itemHeightSize, color: '#121212' }}
                >
                  {this.state.currentLabel}
                </Text>
              </TouchableOpacity>
            </Col>
            <Col size={1} style={[ createStyle(this.props.lineStroke).placeholderButton, active ? null : { backgroundColor: '#d3d3d3' }] }>
              <TouchableOpacity
                onPress={() => active ? this.setState({isExpandDropList: !this.state.isExpandDropList}) : null}
                testID={'placeholderDownButton'}
              >
                <Text>
                  v
                </Text>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={{ height: (itemHeightSize*itemShowMax*2)+10 }}>
            {
              this.state.isExpandDropList ?
                (
                  <ScrollView testID={'DropList'}>
                    {items.map((elem, i) =>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({currentLabel: elem});
                          this.setState({isExpandDropList: false});
                        }
                        }
                        testID={`DropListItem_${i}`}>
                        <View style={[
                          createStyle(this.props.lineStroke).itemContainer,
                          { height: (itemHeightSize*2)+4 },
                          this.removeDupLine(i, items.size - 1, this.props.lineStroke)
                        ]}>
                          <Text style={{ fontsize: itemHeightSize }}>{elem}</Text>
                        </View>
                      </TouchableOpacity>)
                    }
                  </ScrollView>
                ) : null
            }
          </Row>
        </Grid>
      </View>
    );
  }
}

export default DropDownList;