1. Create a .env file in the root directory
2. Set the postgres DB credentials like DBUSERNAME, DBPASSWORD,
   DBHOST("127.0.0.1"), DBDIALECT 
3. Before Running the type the following command 
   "npm run db:create" to create the database 
4. Run the following command in the teminal to create the Table
   and migrate the data (if any).
   "npm run db:migrate".
5. Run the following to start the app
   "npm run dev"