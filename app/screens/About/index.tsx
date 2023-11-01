// import React from 'react';
// import {Text, View} from 'react-native';
// import {useStyle} from './styles';

// const About = () => {
//   const styles = useStyle();
//   return (
//     <View style={styles.container}>
//       <Text> Welcome About Screen</Text>
//     </View>
//   );
// };
// export default About;
import {useReducer} from 'react';
import {Button, Text, TextInput, TouchableOpacity} from 'react-native';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = {name: 'Taylor', age: 42};

const About = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  function handleButtonClick() {
    dispatch({type: 'incremented_age'});
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value,
    });
  }

  return (
    <>
      <TextInput value={state.name} onChange={handleInputChange} />
      <TouchableOpacity onPress={handleButtonClick}>
        <Text> Increment age</Text>
      </TouchableOpacity>
      <Text>
        Hello, {state.name}. You are {state.age}.
      </Text>
    </>
  );
};
export default About;
