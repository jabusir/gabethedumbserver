const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Text, Checkbox, Password } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');
const initialiseData = require('./initial-data');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const dotenv = require('dotenv');
dotenv.config();

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'gabethedumbserver';
const adapterConfig = { mongoUri: 'mongodb://mongo/gabethedumbserver' };

const User = require('./lists/User');
const ArchiveImage = require('./lists/ArchiveImage');


const keystone = new Keystone({
  secureCookies: false,
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
  adapter: new Adapter(adapterConfig),
  cookieSecret: 'GABETHEDUMBIDIOT',
  sessionStore: new MongoStore({ url: 'mongodb://mongo/gabethedumbserver' }),
  cookie: {
    secure: false, // Defaults to true in production
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: false,
  }
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList('User', User);
keystone.createList('ArchiveImage', ArchiveImage);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
    new StaticApp({
      src: './archive',
      path: '/archive',
    }),
  ],
};