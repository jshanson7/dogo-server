import createModel from './createModel';
import { merge } from 'lodash';
import { default as defaultRestfulClassProps } from '../defaults/restfulClassProperties';

export default (Name, prototypeProps, classProps) =>
  createModel(
    Name,
    prototypeProps,
    merge({}, defaultRestfulClassProps, classProps)
  );
