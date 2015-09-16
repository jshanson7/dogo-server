import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';

import {
  User,
  Dog,
  Note,
  getUser,
  getUsers,
  createUser,
  getDog,
  createDog,
  getNote,
  createNote
} from './database';

var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'User') {
      return getUser(id);
    // } else if (type === 'Dog') {
    //   return getDog(id);
    // } else if (type === 'Note') {
    //   return getNote(id);
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof User) {
      return GraphQLUser;
    // } else if (obj instanceof Dog) {
    //   return GraphQLDog;
    // } else if (obj instanceof Note) {
    //   return GraphQLNote;
    }
    return null;
  }
);

var GraphQLUser = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField('User'),
    first_name: {
      type: GraphQLString,
      // resolve: (obj) => obj.text
    },
    last_name: {
      type: GraphQLString,
      // resolve: (obj) => obj.text
    },
    // notes: {
    //   type: NotesConnection,
    //   args: connectionArgs,
    //   resolve: (obj, args) => connectionFromArray(getNotes(), args),
    // }
  },
  interfaces: [nodeInterface]
});

var Root = new GraphQLObjectType({
  name: 'Root',
  fields: {
    users: {
      type: new GraphQLList(GraphQLUser),
      // args: {
      //   id: {}
      // },
      resolve: () => getUsers()
    },
    user: {
      type: GraphQLUser,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: (root, {id}) => getUser(id)
    },
    node: nodeField
  },
});

var GraphQLAddUserMutation = mutationWithClientMutationId({
  name: 'AddUser',
  inputFields: {
    first_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    user: {
      type: GraphQLUser,
      resolve: (payload) => getUser(payload.id)
    }
  },
  mutateAndGetPayload: (user) => {
    return createUser(user);
  }
});

var Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: GraphQLAddUserMutation
    // addTodo: GraphQLAddTodoMutation,
    // changeTodoStatus: GraphQLChangeTodoStatusMutation,
    // markAllTodos: GraphQLMarkAllTodosMutation,
    // removeCompletedTodos: GraphQLRemoveCompletedTodosMutation,
    // removeTodo: GraphQLRemoveTodoMutation,
    // renameTodo: GraphQLRenameTodoMutation,
  },
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export var GraphQLDogoSchema = new GraphQLSchema({
  query: Root,
  mutation: Mutation
});