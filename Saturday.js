import { Text, View, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity,} from 'react-native'
import React, { Component } from 'react'

const obj = [
  {
    name: "Abhishek ojha",
    department: 'Reactnative',
    empid: 'AI1569',
    contactno: 877665848,
    Address: 'Appinventiv technology B-25 sector 58'
  },
];
export default class Saturday extends Component {
  constructor(props) {
    super(props)
    this.state = {
      obj: [
        {
          name: "Abhishek ojha",
          department: 'Reactnative',
          empid: 'AI1569',
          contactno: 877665848,
          Address: 'Appinventiv tech                                                                                                      nology B-25 sector 58'
        }
      ]
    }
  }
  onclick = () => {
    this.setState({
      obj: [...this.state.obj, {
        name: "prakhar",
        department: 'Reactnative',
        empid: 'AI1569',
        contactno: 877665848,
        Address: 'Appinventiv technology B-25 sector 58'
      }]
    })
  }

  onclickDelete = (i) => {
    this.state.obj.splice(i, 1)
    this.setState({})
  }
  myFunction = (item) => { //destructing
    const { name, department, empid, contactno, Address } = item;
    return (
      <View style={styles.textparent}>
        <View style={styles.parentdelete}>
          <TouchableOpacity onPress={() => {
            let i = this.state.obj.findIndex(Element => Element == item)
            this.onclickDelete(i)
          }}>
            <Text style={styles.delete}>deleteme</Text>
          </TouchableOpacity>
        </View>

        
        <Image style={styles.image}
          source={{
            uri: 'https://www.vhv.rs/dpng/d/156-1566120_png-logo-for-student-transparent-png.png'
          }} />

        <Text style={styles.details}>{name}</Text>
        <Text style={styles.details}>{department}</Text>
        <Text style={styles.details}>{empid}</Text>
        <Text style={styles.details}>{contactno}</Text>
        <Text style={styles.details}>{Address}</Text>
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.parent}>
        <View>
          <Text style={styles.header}>List of Employee</Text>
        </View>
        <View>
          
        </View>

        <ScrollView>
          <View>
            {
              this.state.obj.map(item => this.myFunction(item))
            }
          </View>

        </ScrollView>
        <View>
          <TouchableOpacity onPress={this.onclick}>
            <Text style={{fontSize:20}}>click me</Text>
          </TouchableOpacity>
        </View>

        

      </SafeAreaView>

    )
  }
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'orange'
  },
  textparent: {
    textAlign: 'center',
    backgroundColor: 'grey',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  details: {
    textAlign: 'center',
    padding: 3,

  },
  header: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 30,
  },
  image: {
    width: 40,
    height: 30,
    padding: 60,
    left:0,
  },
  parentdelete:{
    flexDirection:'row',
    justifyContent:'flex-end',
      },
  delete:{
    fontSize:20,
  }


})