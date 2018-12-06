exports.up = function (knex, Promise) {
  return knex.schema.createTable("bands", band => {
    band.increments("id");
    band.string("band_name", 500);
    band.string("genre", 500);
    band.string("bio", 500);
    band.string("origin", 500);
    band.string("song", 500);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("bands");
};