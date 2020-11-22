import React, { useState } from 'react';
import { SafeAreaView, View, Text, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CategorySelectModal } from '../components/CategorySelectModal';
import { introPage } from './styles';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { TimerComponent } from '../components';

export const Intro = (props) => {
  const [counterFlag, setCounterFlag] = useState(false);
  const [modalFlag, setModalFlag] = useState(false);

  const dispatch = useDispatch();

  function startGame(selectedCategory) {
    console.error('start game', selectedCategory);
    Axios.get('https://opentdb.com/api.php', {
      params: {
        amount: 10,
        category: selectedCategory.id,
        type: 'boolean',
      },
    }).then(({ data: { results } }) => {
      dispatch({ type: 'setQuestions', payload: { questions: results } });
    });

    setModalFlag(false);
    setCounterFlag(true);
    // props.navigation.navigate('Questions')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={introPage.container}>
          <Text style={introPage.bannerText}>Trivia</Text>
        </View>
        <View
          style={{ backgroundColor: '#3949ab', alignItems: 'center' }}
        ></View>
        <View style={introPage.container}>
          <TouchableOpacity
            style={introPage.buttonContainer}
            onPress={() => setModalFlag(true)}
          >
            <Text style={introPage.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CategorySelectModal
        isVisible={modalFlag}
        onClose={() => setModalFlag(false)}
        onCategorySelect={startGame}
      />
      <TimerComponent />
    </SafeAreaView>
  );
};
