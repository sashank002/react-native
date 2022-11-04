/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
// import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  FlatList,
  ActivityIndicator,
  Modal
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './components/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mydata: []
    }
  }
  componentDidMount() {
    this.callApi();
  }
  async callApi() {
    const body = {
      "talent": "",
      "mid": "612081460749a161f8735d38",
      "uid": "6080867f28ee66187a2d4cc5"
    };
    const response = await fetch("https://contest-test-2.herokuapp.com/challenge/getAllMid_filter", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
    if (response.ok) {
      const myresponse = await response.json();
      console.log("response", response);
      this.setState({ mydata: myresponse.message });
      console.log("mydata", this.state.mydata);
    }
    else {
      console.log("ERROR");
    }
  } catch(e) {
    console.log("ERROR");
  }
  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 60, color: "white" }}>
        </Text>
        <FlatList data={this.state.mydata}
          renderItem={({ item }) => <Text style={{ fontSize: 50, padding: 30, color: 'white', borderColor: 'white', borderWidth: 2 }}>
            name : {
              item.name
            }
            {'\n'}
            participants : {item.no_of_participants}
            {'\n'}
            talent : {item.talent}
          </Text>} />
      </ScrollView>
    );
  }
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       show: false,
//     }
//   }
//   render() {
//     return (
//       <View style={{ flex: 1, }}>
//         <Text style={{ fontSize: 30, color: 'white' }}>
//           Text
//         </Text>
//         <Button title='show modal' onPress={() => { this.setState({ show: true }) }} />
//         <Modal visible={this.state.show} transparent={true}>
//           <View style={{ backgroundColor: '#ffffff00', flex: 1 }}>
//             <View style={{ margin: 50, backgroundColor: 'white', flex: 1, borderRadius: 10, padding: 60 }}>
//               <Text style={{ fontSize: 30 }}>
//                 Normal
//               </Text>
//               <Button title='hide modal' onPress={() => { this.setState({ show: false }) }} />

//             </View>
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }



// const App = () => {
//   // const [count, setCount] = useState(1);
//   const [data, setData] = useState("no data");

//   // useEffect(() => {
//   //   if (count == 5) {
//   //     setData("new Data is added");
//   //   }
//   // })

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
//       {/* <Text style={{ color: "white", fontSize: 100 }}>
//         {count}
//       </Text> */}
//       <Text style={{ color: "white", fontSize: 100 }} >
//         {/* {data} */}
//         <Home data={data} />
//       </Text>
//       <Button title="increase" onPress={() => setData("new data")} />
//     </View>
//   );
// };


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       loader: true,
//     }
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ loader: false })
//     }, 2000);
//   }
//   render() {
//     return (
//       <View>
//         {
//           this.state.loader ?
//             <ActivityIndicator color='yellow' />
//             : <Text style={{ fontSize: 60 }}>Data is loaded </Text>

//         }


//       </View>
//     );
//   }
// }


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       address: '',
//       empty: ''
//     }
//   }
//   checkAdress(e) {
//     const rjx = /^[a-zA-Z]+$/;
//     this.setState({ empty: e });
//     if (!rjx.test(e)) {
//       this.setState({ address: 'invalid address' });
//     }
//     else {
//       this.setState({ address: '' });
//     }
//   }

//   submit() {
//     if (this.state.empty.length < 1) {
//       alert('please fill the address field')
//     }
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, alignContent: 'center' }}>
//         <TextInput placeholder="max length validation"
//           maxLength={5}
//           style={styles.design}
//         >
//         </TextInput>
//         <TextInput placeholder="only numeric"
//           keyboardType='numeric'
//           style={styles.design}
//         >
//         </TextInput>
//         <TextInput placeholder="only alphabate and no empty "
//           style={styles.design}
//           onChangeText={(e) => { this.checkAdress(e) }}
//         >
//         </TextInput>
//         <Text style={{ fontSize: 20, alignSelf: 'center', color: 'red', marginTop: 0, paddingTop: 0 }}>
//           {this.state.address}
//         </Text>

//         <Button title='submit' onPress={() => { this.submit() }} />

//       </View>
//     );
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [{ name: "aa", email: "aa@.com" }, { name: "bb", email: "aa@.com" }, { name: "cc", email: "aa@.com" }, { name: "dd", email: "aa@.com" }]
//     }
//   }
//   componentDidMount() {

//   }
//   render() {
//     return (
//       <View>
//         <Text style={{ fontSize: 60, color: "white" }}>
//         </Text>
//         <FlatList data={this.state.data}
//           renderItem={({ item }) => <Text style={{ fontSize: 60, color: 'white', borderColor: 'white', borderWidth: 2 }}>{item.name}</Text>} />
//       </View>
//     );
//   }
// }

// const App = () => {
//   const [count, setCount] = useState(1);
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
//       <Button title="decrease" onPress={() => setCount(count - 1)} />

//       <Text style={{ color: "white", fontSize: 100 }}>
//         {count}
//       </Text>
//       <Button title="increase" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// };


// const App = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center' }}>
//       <Text style={{ color: 'white', fontSize: 100 }}> hey , what's up ? ✌</Text>
//       <ScrollView horizontal="true">
//         <View style={{ height: 150, width: 150, backgroundColor: 'red' }}></View>
//         <View style={{ height: 150, width: 150, backgroundColor: 'yellow' }}></View>
//         <View style={{ height: 150, width: 150, backgroundColor: 'green' }}></View>
//         <View style={{ height: 150, width: 150, backgroundColor: 'orange' }}></View>
//         <View style={{ height: 150, width: 150, backgroundColor: 'blue' }}></View>
//         <View style={{ height: 150, width: 150, backgroundColor: 'black' }}></View>
//         <View style={{ height: 150, width: 150, backgroundColor: 'grey' }}></View>
//         <View style={{ height: 150, width: 150, backgroundColor: 'skyblue' }}></View>

//       </ScrollView>
//     </View>
//   );
// };

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       pass: "",
//       add: "",
//     }
//   }

//   submit() {
//     console.log(this.state)
//   }
//   render() {

//     return (
//       <View>

//         <TextInput placeholder="enter your name"
//           onChangeText={(e) => { this.setState({ name: e }) }}
//           style={styles.design}
//         ></TextInput>
//         <TextInput placeholder="enter your password"
//           onChangeText={(e) => { this.setState({ pass: e }) }}
//           secureTextEntry={true}
//           style={styles.design}
//         ></TextInput>
//         <TextInput placeholder="enter your addresss"
//           onChangeText={(e) => { this.setState({ add: e }) }}
//           style={styles.design}
//         ></TextInput>
//         <Button
//           title="click karo mane "
//           onPress={() => { this.submit() }} />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  design: {
    backgroundColor: "black",
    borderColor: "yellow",
    margin: 30,
    borderWidth: 1,
    color: "yellow",
    padding: 10
  }
})


// const App = () => {
//   return (
//     <View>
//       <Text style={[styles.red, styles.fonts]} > Red Text </Text>
//       <Text style={[styles.blue, styles.fonts]} > Blue Text </Text>
//       <Text style={[styles.green, styles.fonts]} > NO BACKGROUND </Text>


//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   red: {
//     color: "red",
//     backgroundColor: "yellow"
//   },
//   fonts: {
//     fontSize: 40,
//     fontWeight: "bold"
//   },
//   blue: {
//     color: "blue",
//     backgroundColor: "orange"
//   },
//   green: {
//     color: "green"
//   }
// })



// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: "some app data"
//     }
//   }
//   render() {
//     console.warn(this.state);
//     return (
//       <View>
//         <Text style={{ fontSize: 60 }}>
//           {this.state.data}
//         </Text>
//         <Button
//           title="click karo mane "
//           onPress={() => { this.setState({ data: "new state data" }) }} />
//       </View>
//     );
//   }
// }

// const App = () => {
//   const data = "some data from App.js"
//   return (
//     <View>
//       <Text style={{ fontSize: 80 }}>
//         <Home data={data} />
//       </Text>
//     </View>
//   )
// }

// class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text style={{ fontSize: 60 }}>Class Component</Text>
//         <Button
//           title="click karo mane "
//           onPress={() => alert("hello kem cho ?")} />
//       </View>
//     );
//   }
// }

// const App = () => {
//   return (
//     <View>
//       <Text> hello </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
