import { merge } from 'lodash';
import prototypeProperties from '../defaults/prototypeProperties';
import classProperties from '../defaults/classProperties';
import { getBookshelfConnection } from '../../db/bookshelf';

export default (Name, protoProps, classProps) =>
  getBookshelfConnection().model(
    Name,
    merge({}, prototypeProperties, protoProps),
    merge({}, classProperties, classProps)
  );
