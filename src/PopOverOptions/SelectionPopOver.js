import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    visible: false,
  };

  _openMenu = () => this.setState({ visible: true });
  _closeMenu = () => this.setState({ visible: false });

  render() {
    return (
      <Provider>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={

              //<Button >Show menu</Button>
              <TouchableOpacity onPress={this._openMenu}>
                <Image

                  style={{ height: 30, width: 20 }}
                  source={require('/root/Desktop/fun-fundooApp/image/verticalMenu.png')}
                  statusBarHeight={60}
                />
              </TouchableOpacity>
            }
          >
            <Menu.Item onPress={() => { }} title="Item 1" />
            <Menu.Item onPress={() => { }} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => { }} title="Item 3" />
          </Menu>
        </View>
      </Provider>
    );
  }
}