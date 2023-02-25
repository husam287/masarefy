import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import ExpenseService from './ExpenseService';

export default class GeneralDbService {
  static removeDb() {
    FileSystem.deleteAsync(`${FileSystem.documentDirectory}SQLite`);
    AsyncStorage.setItem('hasFinishSetup', JSON.stringify(false));
  }

  static initAllTables() {
    return Promise.all([
      ExpenseService.createTable(),
    ]);
  }
}
