import Realm from 'realm';

import FruitSchema from '../schemas/FruitSchema';

export default function getRealm() {
  return Realm.open({
    schema: [FruitSchema],
  });
}
