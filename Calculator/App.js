import React, { Component } from 'react';
import { View,TextInput,Button } from 'react-native-web';

export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={Num1:0,Num2:0};
    this.state={Result:0};
  }
  Sum=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
     var R=N1+N2;
     var d=R.toString();
     this.setState({result:d})
     
    
  }

  Sub=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    
    var R=N1-N2;
    var d=R.toString();
    this.setState({result:d})
    
    
  }
  Mul=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    
    var R=N1*N2;
    var d=R.toString();
    this.setState({result:d})
   
  }
  Div=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    
    var R=N1/N2;
    var d=R.toString();
    this.setState({result:d})
    
  }
 render()
 {
   return(
     <View>
       <TextInput style={{borderWidth:1,margin:10}} placeholder="First Number" onChangeText={Num1=>this.setState({Num1})}/>
       <TextInput style={{borderWidth:1,margin:10}} placeholder="Second Number" onChangeText={Num2=>this.setState({Num2})}/>
       <TextInput style={{borderWidth:1,margin:10}} placeholder="Result" value={this.state.result} />
       <Button title="Addition" onPress={this.Sum} color="blueviolet"/>
       <Button title="Subtraction" onPress={this.Sub} color="coral"/>
       <Button title="Multiplication" onPress={this.Mul} color="lawngreen"/>
       <Button title="Division" onPress={this.Div} color="fuchsia" />
             
     

     </View>
   );
 } 
}

