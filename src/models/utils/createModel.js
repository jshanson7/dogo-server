import { merge } from 'lodash';
import { default as defaultPrototypeProps } from '../defaults/prototypeProperties';
import { default as defaultClassProps } from '../defaults/classProperties';
import { getBookshelfConnection } from '../../db/bookshelf';

export default (Name, prototypeProps, classProps) =>
  getBookshelfConnection().model(
    Name,
    merge({}, defaultPrototypeProps, prototypeProps),
    merge({}, defaultClassProps, classProps)
  );
