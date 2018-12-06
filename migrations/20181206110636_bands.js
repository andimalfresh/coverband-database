exports.up = function(knex, Promise) {
  return knex.schema.createTable("bands", band => {
    band.increments("id");
    band.string("band_name");
    band.string("genre");
    band.string("bio");
    band.string("origin");
    band.string("song");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("bands");
};
