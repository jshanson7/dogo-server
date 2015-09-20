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
  Admin,
  User,
  Dog,
  Note,
  getUser,
  getUsers,
  createUser,
  getDog,
  createDog,
  getNote,
  createNote,
  Widget,
  getViewer,
  getWidget,
  getWidgets,
  getAdmin,
} from './database';

var {nodeInterface, nodeField} = nodeDefinitions(
  async (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'Admin') {
      return getAdmin();
    } else if (type === 'User') {
      return await getUser(id);
    } else if (type === 'Widget') {
      return getWidget(id);
    // } else if (type === 'Dog') {
    //   return getDog(id);
    // } else if (type === 'Note') {
    //   return getNote(id);
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof Admin) {
      return GraphQLAdmin;
    } else if (obj instanceof User) {
      return GraphQLUser;
    } else if (obj instanceof Widget) {
      return GraphQLWidget;
    // } else if (obj instanceof Dog) {
    //   return GraphQLDog;
    // } else if (obj instanceof Note) {
    //   return GraphQLNote;
    }
    return null;
  }
);

var GraphQLAdmin = new GraphQLObjectType({
  name: 'Admin',
  description: 'An app administrator',
  fields: () => ({
    id: globalIdField('Admin'),
    users: {
      type: userConnection,
      description: 'Application users',
      args: connectionArgs,
      resolve: async (_, args) => {
        let users = await getUsers();
        return connectionFromArray(users, args);
      },
    },
  }),
  interfaces: [nodeInterface]
});

var GraphQLUser = new GraphQLObjectType({
  name: 'User',
  description: 'A person who uses our app',
  fields: () => ({
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
    //   type: GraphQLString
    // },
    widgets: {
      type: widgetConnection,
      description: 'A person\'s collection of widgets',
      args: connectionArgs,
      resolve: (_, args) => connectionFromArray(getWidgets(), args),
    },
    // notes: {
    //   type: NotesConnection,
    //   args: connectionArgs,
    //   resolve: (obj, args) => connectionFromArray(getNotes(), args),
    // }
  }),
  interfaces: [nodeInterface]
});


var GraphQLWidget = new GraphQLObjectType({
  name: 'Widget',
  description: 'A shiny widget',
  fields: () => ({
    id: globalIdField('Widget'),
    name: {
      type: GraphQLString,
      description: 'The name of the widget',
    },
  }),
  interfaces: [nodeInterface],
});

var {connectionType: widgetConnection} =
  connectionDefinitions({name: 'Widget', nodeType: GraphQLWidget});

var {connectionType: userConnection} =
  connectionDefinitions({name: 'User', nodeType: GraphQLUser});

var GraphQLRoot = new GraphQLObjectType({
  name: 'Root',
  fields: {
    node: nodeField,
    viewer: {
      type: GraphQLUser,
      resolve: () => getViewer(),
    },
    admin: {
      type: GraphQLAdmin,
      resolve: () => getAdmin(),
    },
    // users: {
    //   type: new GraphQLList(GraphQLUser),
    //   // args: {
    //   //   id: {}
    //   // },
    //   resolve: () => getUsers()
    // },
    // user: {
    //   type: GraphQLUser,
    //   args: {
    //     id: {
    //       type: GraphQLString
    //     }
    //   },
    //   resolve: (root, {id}) => getUser(id)
    // },
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

var GraphQLMutation = new GraphQLObjectType({
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
  query: GraphQLRoot
  // mutation: GraphQLMutation
});
