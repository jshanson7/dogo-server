import createModel from './createModel';
import { merge } from 'lodash';
import restfulClassProperties from '../defaults/restfulClassProperties';

export default (Name, prototypeProperties, classProperties) =>
  createModel(
    Name,
    prototypeProperties,
    merge({}, restfulClassProperties, classProperties)
  );
