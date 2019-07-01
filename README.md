## VegAnalytics
A prototype end-to-end solution for local marts and vegetable sellers.

### How to run 
Follow the instructions to run : 

#### Change the directory to production
1. Install all the dependencies
2. If mongodb is installed, run init_db.js to initialize the database, this will create all the collections and schema.
3. Terminate the program and then run populate.py , this will populate the database with random data.
4. Check the database to make sure database is populated properly.
5. Now start the server 

#### Commands : 
```
$cd production
$npm install
$node init_db.js
$cd ..
$python3 populate.py
$cd production
$node index.js
```

Go to browser, open `http://localhost:5000/` to use the app.

