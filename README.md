# Full-stack-Elibrary-project

 Requirements:
1) Install node js with npm.
2) Install angular CLI.
3) Install mysql with wrokbench.

 To run the backend APIs:
Open Book_Api folder
Execute below command in terminal
>> node bookAPI.js

 To run the front end code:
Open elibraryProject-V2-enhanced-with-error-handling folder
Execute below command in terminal
>> ng serve

 Create databases in mysql workbench:

CREATE DATABASE elibrary;

CREATE TABLE elibrary.books(
   id INT NOT NULL AUTO_INCREMENT unique,
   bookid VARCHAR(100) NOT NULL,
   bookname VARCHAR(100) NOT NULL,
   author VARCHAR(100) NOT NULL,
   price INT(100),
   isdeleted boolean ,
   isassigned boolean
   
);

  CREATE TABLE elibrary.users(
   username VARCHAR(100) NOT NULL,
   userid VARCHAR(100) NOT NULL
);

CREATE TABLE elibrary.booksandusers(	
   assignedbookid VARCHAR(100) NOT NULL,
   username VARCHAR(100) NOT NULL
);



