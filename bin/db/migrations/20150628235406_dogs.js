'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('dogs', function (t) {
    t.increments('id').primary();
    // t.uuid('uuid').primary();
    t.string('name').notNull();
    t.string('breed').nullable();
    t.text('description').nullable();
    // t.string('thumbnail_url').nullable();
    // t.json('picture_ids').nullable();
    t.string('dot_color').nullable();
    // t.json('note_ids');
    t.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('dogs');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiL21pZ3JhdGlvbnMvMjAxNTA2MjgyMzU0MDZfZG9ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE9BQU8sQ0FBQyxFQUFFLEdBQUcsVUFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ25DLFNBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFVBQVMsQ0FBQyxFQUFFO0FBQ2pELEtBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7O0FBRTdCLEtBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDM0IsS0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM3QixLQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7QUFHakMsS0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7QUFFakMsS0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0dBQ2hCLENBQUMsQ0FBQztDQUNKLENBQUM7O0FBRUYsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFTLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDckMsU0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUN0QyxDQUFDIiwiZmlsZSI6ImRiL21pZ3JhdGlvbnMvMjAxNTA2MjgyMzU0MDZfZG9ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0cy51cCA9IGZ1bmN0aW9uKGtuZXgsIFByb21pc2UpIHtcbiAgcmV0dXJuIGtuZXguc2NoZW1hLmNyZWF0ZVRhYmxlKCdkb2dzJywgZnVuY3Rpb24odCkge1xuICAgIHQuaW5jcmVtZW50cygnaWQnKS5wcmltYXJ5KCk7XG4gICAgLy8gdC51dWlkKCd1dWlkJykucHJpbWFyeSgpO1xuICAgIHQuc3RyaW5nKCduYW1lJykubm90TnVsbCgpO1xuICAgIHQuc3RyaW5nKCdicmVlZCcpLm51bGxhYmxlKCk7XG4gICAgdC50ZXh0KCdkZXNjcmlwdGlvbicpLm51bGxhYmxlKCk7XG4gICAgLy8gdC5zdHJpbmcoJ3RodW1ibmFpbF91cmwnKS5udWxsYWJsZSgpO1xuICAgIC8vIHQuanNvbigncGljdHVyZV9pZHMnKS5udWxsYWJsZSgpO1xuICAgIHQuc3RyaW5nKCdkb3RfY29sb3InKS5udWxsYWJsZSgpO1xuICAgIC8vIHQuanNvbignbm90ZV9pZHMnKTtcbiAgICB0LnRpbWVzdGFtcHMoKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRvd24gPSBmdW5jdGlvbihrbmV4LCBQcm9taXNlKSB7XG4gIHJldHVybiBrbmV4LnNjaGVtYS5kcm9wVGFibGUoJ2RvZ3MnKTtcbn07XG4iXX0=