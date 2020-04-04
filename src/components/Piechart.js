import React, { Component } from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { getNotes } from '../SignUpDataLayer/'

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems : 'center',
    marginTop : 80,
  },
  title : {
    fontSize : 24,
    margin : 10
  },
  pieText : {
    fontSize : 44,
    margin : 10,
  },
  colorAllot : {
    flexDirection : 'row',
    backgroundColor : 'red',
    height : 30,
    width : 30
  },
  boxStyle : {
    height : 30,
    width : 30
  }
});



export default class test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes : '',
      columnCount : [],
      pinned : 'pinned',
      columnCountAnother : [],
      remindCount : 0,
      archiveCount : 0,
      pinCount : 0,
      others : 0
    }
  }

  componentDidMount() {
    getNotes((notes) => {
      this.setState({
        notes: notes
      }, () => {
        this.setState({
          remindCount : 0,
          archiveCount : 0,
          pinCount : 0,
          others : 0,
        })

        Object.keys(this.state.notes).map((item) => {
          {
            this.state.notes[item].archiveStatus == true
              ?
              this.setState({ archiveCount: ++this.state.archiveCount })
              :
              null
          }
          {
            this.state.notes[item].reminderDate !== undefined
              ?
              this.setState({ remindCount: ++this.state.remindCount })
              :
              null
          }
          {
            this.state.notes[item].pinStatus == true
              ?
              this.setState({ pinCount: ++this.state.pinCount })
              :
              null
          }
          {
            this.state.notes[item].pinStatus == false
              ?
              this.setState({ others: ++this.state.others })
              :
              null
          }
        })
      })
    })
  }


  render() {
    const chart_wh = 250
    const series = [this.state.archiveCount, this.state.remindCount, this.state.pinCount, this.state.others]
    const sliceColor = ['#F44336', '#2196F3', '#FF9800', '#4CAF50']

    return (
      <ScrollView style = {{ flex: 1 }}>
        <View style = { styles.container }>
          <StatusBar
            hidden = { true }
          />

          <PieChart
            chart_wh = { chart_wh }
            series = { this.state.others == 0 ? [100, 20, 30, 40] : series }
            sliceColor = { sliceColor }
          />
        </View>
        <View style = {{ flexDirection: 'column', justifyContent: 'space-around', height: 200, width: 180, marginTop: 60, marginBottom: 60 }}>
          <Text style = { styles.title }>Distribution</Text>
          <View style = {{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text>Archive : </Text>
            <Text style = {{ height: 20, width: 30, backgroundColor: '#F44336' }}></Text>
          </View>
          <View style = {{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text>Remind : </Text>
            <Text style = {{ height: 20, width: 30, backgroundColor: '#2196F3' }}></Text>
          </View>
          <View style = {{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text>Pin : </Text>
            <Text style = {{ height: 20, width: 30, backgroundColor: '#FF9800' }}></Text>
          </View>
          <View style = {{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text >Others : </Text>
            <Text style = {{ height: 20, width: 30, backgroundColor: '#4CAF50' }}></Text>
          </View>
        </View>
        <View style = {{ alignItems: 'center' }}>
          <Text style = { styles.pieText }>Pie Chart </Text>
        </View>
      </ScrollView>
    );
  }
}

