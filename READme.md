>## RESTFUL-API
#### Description 
>A simple Restful API built with NodeJS, ExpessJS and MongoDB, it can perform basic CRUD operations and it persist the data on MongoDB
____

#### Tech Used:
 1. HTML 
 2. CSS 
 3. JavaScript 
 4. NodeJS
 5. ExpressJS 
 6. MongoDB 
 7. cors
 8. dotenv 
 9. mongoose 
 10. nodemon 
 11. git 
 12. github.
___

> #### Things i have learnt: 
1. How tom setup a Atlas Application on mongoDB
2.  How to setup the DB using mongoose package
3.  How to use HTTP method  etc
```JavaScript
// Connecting to the DB 
    const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const connect = await mongoose.connect(process.env.DB_CONNECTION);
    console.log("connected to the DB");
    app.listen(5000, () => console.log("server is listening on port 5000"));
  } catch (err) {
    console.error(err);
  }
};
```
---
> #### Desktop View
![Frontend SS](/public/RestfulApiSS.png "Desktop View")


> #### Credits: 
Scythe,

DevEd
