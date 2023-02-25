import Toast from 'react-native-toast-message';

export default function showSuccessMsg(msg) {
  Toast.show({
    type: 'success',
    text1: msg,
  });
  return null;
}
