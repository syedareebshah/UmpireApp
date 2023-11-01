import React, {useEffect, useState} from 'react';
import {
  I18nManager,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStyle} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {s} from 'react-native-size-matters';
import {RootState} from 'store/slice';
import {logout, userName} from 'store/slice/userSlice';
const Home = () => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const styles = useStyle();
  const [over, setOver] = useState<any>([]);
  const [ballCount, setBallCount] = useState(0);
  const [disableBall, setDisableBall] = useState(false);
  console.log({over});

  useEffect(() => {
    if (ballCount === 6) {
      setDisableBall(true);
    } else {
      setDisableBall(false);
    }
  }, [ballCount]);

  const onBall = (ball: any) => {
    console.log({ball});
    if (
      ball == 1 ||
      ball == 2 ||
      ball == 3 ||
      ball == 4 ||
      ball == 6 ||
      ball == 0
    ) {
      setOver([
        ...over,
        {
          score: ball,
          display: ball,
          extra: false,
        },
      ]);
      setBallCount(ballCount + 1);
    }
  };

  const onWicket = (ball: any) => {
    if (ball == 0) {
      setOver([
        ...over,
        {
          score: 0,
          display: 'W',
          extra: false,
        },
      ]);
      setBallCount(ballCount + 1);
    } else if (ball == 1) {
      setOver([
        ...over,
        {
          score: 1,
          display: '1W',
          extra: false,
        },
      ]);
      setBallCount(ballCount + 1);
    } else if (ball == 2) {
      setOver([
        ...over,
        {
          score: 2,
          display: '2W',
          extra: false,
        },
      ]);
      setBallCount(ballCount + 1);
    } else if (ball == 3) {
      setOver([
        ...over,
        {
          score: 3,
          display: '3W',
          extra: false,
        },
      ]);
      setBallCount(ballCount + 1);
    }
  };

  const onWide = (ball: any) => {
    setOver([
      ...over,
      {
        score: ball + 1,
        display:
          ball == 0
            ? 'wd'
            : ball == 1
            ? '1wd'
            : ball == 2
            ? '2wd'
            : ball == 3
            ? '3wd'
            : '4wd',
        extra: true,
      },
    ]);
  };

  const onNoBall = (ball: any) => {
    setOver([
      ...over,
      {
        score: ball + 1,
        display:
          ball == 0
            ? 'nb'
            : ball == 1
            ? '1nb'
            : ball == 2
            ? '2nb'
            : ball == 3
            ? '3nb'
            : ball == 4
            ? '4nb'
            : '6nb',
        extra: true,
      },
    ]);
  };
  const onDelete = data => {
    let newArray = [...over];
    if (!over[data].extra) {
      setBallCount(ballCount - 1);
    }
    let tempArray = newArray.splice(data, 1);

    setOver(newArray);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 0.1}}>
        <Text style={styles.textStyle}>
          Score:{over.reduce((total: any, ball: any) => total + ball.score, 0)}
        </Text>

        <Text style={styles.textStyle}>total Balls:{ballCount}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {over.map((data: any, ind: any) => (
            <View style={styles.ball}>
              <TouchableOpacity
                onPress={() => onDelete(ind)}
                style={styles.cross}>
                <Text>x</Text>
              </TouchableOpacity>
              <Text key={ind} style={styles.textStyle}>
                {data.display}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.controller}>
        <View style={styles.streight}>
          <TouchableOpacity
            disabled={disableBall}
            onPress={() => onBall(0)}
            style={styles.streightBttn}>
            <Text style={styles.streightBttnTxt}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={disableBall}
            onPress={() => onBall(1)}
            style={styles.streightBttn}>
            <Text style={styles.streightBttnTxt}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={disableBall}
            onPress={() => onBall(2)}
            style={styles.streightBttn}>
            <Text style={styles.streightBttnTxt}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={disableBall}
            onPress={() => onBall(3)}
            style={styles.streightBttn}>
            <Text style={styles.streightBttnTxt}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={disableBall}
            onPress={() => onBall(4)}
            style={styles.streightBttn}>
            <Text style={styles.streightBttnTxt}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={disableBall}
            onPress={() => onBall(6)}
            style={styles.streightBttn}>
            <Text style={styles.streightBttnTxt}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.streight}>
          <TouchableOpacity
            onPress={() => onWicket(0)}
            disabled={disableBall}
            style={styles.streightBttn}>
            <Text style={styles.streightBttnTxt}>w</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onWicket(1)}
            disabled={disableBall}
            style={styles.streightBttn}>
            <Text style={styles.streightBttnTxt}>1w</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onWicket(2)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>2w</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onWicket(3)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>3w</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.streight}>
          <TouchableOpacity
            onPress={() => onWide(0)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>wd</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onWide(1)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>1wd</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onWide(2)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>2wd</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onWide(3)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>3wd</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onWide(4)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>4wd</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.streight}>
          <TouchableOpacity
            onPress={() => onNoBall(0)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>nb</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onNoBall(1)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>1nb</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onNoBall(2)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>2nb</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onNoBall(3)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>3nb</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onNoBall(4)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>4nb</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onNoBall(6)}
            style={styles.streightBttn}
            disabled={disableBall}>
            <Text style={styles.streightBttnTxt}>6nb</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Home;
