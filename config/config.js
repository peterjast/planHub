var connection;


connection = {
    "development": {
        "username": "root",
        "password": "Nordby2015",
        "database": "users_db",
        "host": "localhost",
        "dialect": "mysql"
      },
      "test": {
        "username": "root",
        "password": null,
        "database": "testdb",
        "host": "localhost",
        "dialect": "mysql",
        "logging": false
      },
      "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
      }
    };
    

module.exports = connection;