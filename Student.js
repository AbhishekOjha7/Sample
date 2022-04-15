import { Text, View, SafeAreaView, StyleSheet, ScrollView, Image,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

   
const student = [
    {
      name: 'Abhishek ojha',
      department: 'Raeact-native',
      EmpId:'AI1579',
      Address:'Appinventiv sector-58'
    },
];
    // {
    //     name: 'Abhishek ojha',
    //     department: 'Raeact-native',
    //     EmpId:'AI1579',
    //     Address:'Appinventiv sector-58'
    //   },
    //   {
    //     name: 'Abhishek ojha',
    //     department: 'Raeact-native',
    //     EmpId:'AI1579',
    //     Address:'Appinventiv sector-58'
    //   },
    //   {
    //     name: 'Abhishek ojha',
    //     department: 'Raeact-native',
    //     EmpId:'AI1579',
    //     Address:'Appinventiv sector-58'
    //   },
    //   {
    //     name: 'Abhishek ojha',
    //     department: 'Raeact-native',
    //     EmpId:'AI1579',
    //     Address:'Appinventiv sector-58'
    //   },
    //   {
    //     name: 'Abhishek ojha',
    //     department: 'Raeact-native',
    //     EmpId:'AI1579',
    //     Address:'Appinventiv sector-58'
    //   },
    

  




export default class Student extends Component {
    constructor(props){
        super(props)
        this.state={
            student : [
                {
                  name: 'Abhishek ojha',
                  department: 'Raeact-native',
                  EmpId:'AI1579',
                  Address:'Appinventiv sector-58'
                }
            ]

        }
    }

    onClick = ()=>{
        this.setState({student:[...this.state.student, {                  
        name: 'Krishna',
        department: 'Raeact-native',
        EmpId:'Jai shrre Ram',
        Address:'Appinventiv sector-58'}]})
    }

  
    renderMyItem=(item)=>{
        const {name,department,EmpId,Address}=item
       return(
         <View style={styles.inner}>
              <Image style={styles.image}
                source={{
             uri: 'https://www.vhv.rs/dpng/d/156-1566120_png-logo-for-student-transparent-png.png'
            }} />
            <View style={styles.textdesign}>
            <Text style={styles.details}>{name}</Text>
           <Text style={styles.details}>{department}</Text>
           <Text style={styles.details}>{EmpId}</Text>
           <Text style={styles.details}>{JSON.stringify(Address)}</Text>
                </View> 
                
         </View>
       )
     }
    render() {
        return (
         <SafeAreaView style={styles.parent}>
              <View>
                <TouchableOpacity onPress={this.onClick}>
                    <Text>
                        Click
                    </Text>
                </TouchableOpacity>
            </View>
        
              <View>
              <Text style={styles.header}>List of Students</Text>
            </View>
            <View style={styles.body}>
            <ScrollView>
                {
                    this.state.student.map(item=>this.renderMyItem(item))
                }
                
            </ScrollView>
           

            </View>
         </SafeAreaView>
            
        )

    }
}
  const styles = StyleSheet.create({
      parent:{
          flex:1,
          backgroundColor:'orange'
      },
     header:{
         textAlign:'center',
         fontSize:30,
         textDecorationLine:'underline'
     },
     details:{
        
         textAlign:'center'
     },
     image:{
    width:10,
    height:10,
    padding: 60,
     },
     inner:{
        backgroundColor:'darkgrey',
         marginVertical:10,
         flexDirection:'row',
         width:350,
         alignItems:'center'
    

     },
     textdesign:{
         textAlign:'center',
         alignItems:'center',
         paddingLeft: 40,
     },
     body:{
         alignItems:'center',
     },
     imagestyle:{
       width:30,
       height:20
     }
  })
  


//             <SafeAreaView style={styles.parent}>
//                 <View>
//                     <Text style={styles.header}>List of Students</Text>
//                 </View>
//                 <View style={styles.body}>
//                 <ScrollView>
//                     <View style={styles.inner}>
//                         <Image style={styles.image}
//                             source={{
//                                 uri: 'https://www.vhv.rs/dpng/d/156-1566120_png-logo-for-student-transparent-png.png'
//                             }} />
//                         <View style={styles.inner1}>
//                             <Text>Name:Abhishek ojha</Text>
//                             <Text>Department:ReactNative</Text>
//                             <Text>EmpId:AI1579</Text>
//                             <Text>Address:Appinventiv Technology
//                                 B-25,Sector-58
//                             </Text>
//                         </View>
//                     </View>
//                 </ScrollView>
//                 </View>
//             </SafeAreaView>

//         )
//     }
// }

// const styles = StyleSheet.create({
//     parent: {
//         flex: 1,
//         backgroundColor: 'darkorange'
//     },
//     header: {
//         textAlign: 'center',
//         fontSize: 30,
//     },
//     inner: {
//         width:'85%',
//         backgroundColor: 'lightgrey',
//         fontSize: 30,
//         alignItems: 'center',
//         flexDirection: 'row',
    

//     },

//     image: {
//         width: 60,
//         height: 50,
//         alignSelf: 'flex-start',
//         margin: 10

//     },
//     inner1: {
//         padding: 10,

//     },
//     body:{
//         alignItems:'center',
//     }

// })