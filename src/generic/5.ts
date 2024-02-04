/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const stringKeyValuePair: KeyValuePair<string, number> = {
  key: "example",
  value: 42,
};

const numberKeyValuePair: KeyValuePair<number, string> = {
  key: 123,
  value: "example",
};

export {};
