export default class FruitSchema {
  static schema = {
    name: 'Fruit',
    primaryKey: 'id',
    properties: {
      id: {
        type: 'int',
        indexed: true,
      },
      name: 'string',
    },
  };
}
