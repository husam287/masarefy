import db from './DB';

export default class ExpenseService {
  static createTable() {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS Expense '
          + '('
          + 'id INTEGER PRIMARY KEY AUTOINCREMENT, '
          + 'money REAL CHECK (money>0) NOT NULL, '
          + 'reason VARCHAR(255) NOT NULL, '
          + 'date TEXT NOT NULL '
          + ')',
          null,
          (txObj, { rows: { _array } }) => resolve(_array),
          (txObj, error) => reject(error),
        );
      });
    });

    return promise;
  }

  static insertInto({
    money,
    reason,
    date,
  }) {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO Expense (money, reason, date) values (?, ?, ?)',
          [money, reason, date],
          (txObj, { insertId }) => resolve({
            id: insertId, date, money, reason,
          }),
          (txObj, error) => reject(error),
        );
      });
    });

    return promise;
  }

  static editOne({
    id,
    money,
    reason,
    date,
  }) {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'UPDATE Expense '
          + 'SET money = ?, '
          + 'reason = ?, '
          + 'date = ?, '
          + 'WHERE id == ?',
          [money, reason, date],
          () => resolve({
            id, money, reason, date,
          }),
          (txObj, error) => reject(error),
        );
      });
    });

    return promise;
  }

  static getAll() {
    const query = 'SELECT * FROM Expense';

    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          query,
          null,
          (txObj, { rows: { _array } }) => resolve(_array),
          (txObj, error) => reject(error),
        );
      });
    });

    return promise;
  }

  static deleteOne(id) {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM Expense WHERE id==?',
          [id],
          (txObj, { rows: { _array } }) => resolve(_array),
          (txObj, error) => reject(error),
        );
      });
    });

    return promise;
  }

  static getmoneyAmount() {
    const query = 'SELECT SUM(money) as summationOfMoney FROM Expense';

    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          query,
          null,
          (txObj, { rows: { _array } }) => resolve(_array?.[0]),
          (txObj, error) => reject(error),
        );
      });
    });

    return promise;
  }
}
