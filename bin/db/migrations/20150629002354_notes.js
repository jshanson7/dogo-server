'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('notes', function (t) {
    t.increments('id').primary();
    // t.uuid('uuid').primary();
    t.text('text').notNull();
    t.integer('dog_id').notNull().references('id').inTable('dogs');
    t.integer('user_id').notNull().references('id').inTable('users');
    t.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('notes');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiL21pZ3JhdGlvbnMvMjAxNTA2MjkwMDIzNTRfbm90ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxPQUFPLENBQUMsRUFBRSxHQUFHLFVBQVMsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUNuQyxTQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUMsRUFBRTtBQUNsRCxLQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDOztBQUU3QixLQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3pCLEtBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvRCxLQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakUsS0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0dBQ2hCLENBQUMsQ0FBQztDQUNKLENBQUM7O0FBRUYsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFTLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDckMsU0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUN2QyxDQUFDIiwiZmlsZSI6ImRiL21pZ3JhdGlvbnMvMjAxNTA2MjkwMDIzNTRfbm90ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydHMudXAgPSBmdW5jdGlvbihrbmV4LCBQcm9taXNlKSB7XG4gIHJldHVybiBrbmV4LnNjaGVtYS5jcmVhdGVUYWJsZSgnbm90ZXMnLCBmdW5jdGlvbih0KSB7XG4gICAgdC5pbmNyZW1lbnRzKCdpZCcpLnByaW1hcnkoKTtcbiAgICAvLyB0LnV1aWQoJ3V1aWQnKS5wcmltYXJ5KCk7XG4gICAgdC50ZXh0KCd0ZXh0Jykubm90TnVsbCgpO1xuICAgIHQuaW50ZWdlcignZG9nX2lkJykubm90TnVsbCgpLnJlZmVyZW5jZXMoJ2lkJykuaW5UYWJsZSgnZG9ncycpO1xuICAgIHQuaW50ZWdlcigndXNlcl9pZCcpLm5vdE51bGwoKS5yZWZlcmVuY2VzKCdpZCcpLmluVGFibGUoJ3VzZXJzJyk7XG4gICAgdC50aW1lc3RhbXBzKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kb3duID0gZnVuY3Rpb24oa25leCwgUHJvbWlzZSkge1xuICByZXR1cm4ga25leC5zY2hlbWEuZHJvcFRhYmxlKCdub3RlcycpO1xufTtcbiJdfQ==