// -------------------------------------------------
// Packages
// -------------------------------------------------
import { Model, Server } from 'miragejs';
// -------------------------------------------------
// JSON
// -------------------------------------------------
import blouseStock from './blouseStock.json';

export const Mirage = () => {
  new Server({
    models: {
      users: Model,
    },

    fixtures: {
      users: blouseStock,
    },

    seeds(server) {
      server.loadFixtures();
    },

    routes() {
      this.namespace = 'api';
      this.get('users', (schema) => schema.db.users);
    },
  });
};
