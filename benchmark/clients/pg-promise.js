const pg = require('pg-promise');

const db = pg()({
  max: 4,
  user: 'postgres',
});

module.exports = {
  name: 'pg-promise',
  tests: {
    select: () => {
      return db.query('select 1 as x');
    },
    select_arg: () => {
      return db.query('select $1 as x', [
        1,
      ]);
    },
    select_args: () => {
      return db.query(`select
      $1::int as int,
      $2 as string,
      $3::timestamp with time zone as timestamp,
      $4 as null,
      $5::bool as boolean,
      $6::bytea as bytea,
      $7::jsonb as json
    `, [
        1,
        'foo',
        new Date().toISOString(),
        null,
        false,
        Buffer.from('bar'),
        JSON.stringify([
          {
            foo: 'bar',
          },
          {
            bar: 'baz',
          },
        ]),
      ]);
    },
    select_where: () => {
      return db.query('select * from pg_catalog.pg_type where typname = $1', [
        'bool',
      ]);
    },
  },
  url: 'https://github.com/vitaly-t/pg-promise',
};
