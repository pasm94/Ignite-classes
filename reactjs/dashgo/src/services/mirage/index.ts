import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer, // para lidar com relacionamentos
    },

    models: {
      // qual tipo de dado vou ter dentro do miragejs, ou seja,
      // quais dados vou armazenar dentro dessa db ficticia
      user: Model.extend<Partial<User>>({
        // partial pra n precisar ter todos campos de user
      }),
    },

    factories: {
      // criar varios dados de vez
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        }, // miragejs ja entende q camelcase se refere ao snakecase
      }),
    },

    seeds(server) {
      server.createList('user', 200);
    },

    routes() {
      // configs das rotas, quais rotas vou ter dentro do miragejs

      this.namespace = 'api';
      this.timing = 750;

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user'))
          .users.sort((a, b) => a.createdAt - b.createdAt)
          .slice(pageStart, pageEnd);

        return new Response(200, { 'x-total-count': String(total) }, { users });
      });

      this.get('/users/:id'); // shorthands do miragejs ja automatizam a rota

      this.post('/users');

      this.namespace = ''; // resetar pra n atrapalhar a pasta api do proprio nextjs
      this.passthrough(); // as chamadas passam primeiro pelo mirage, depois passam a diante
    },
  });

  return server;
}
