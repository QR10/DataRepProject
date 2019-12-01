# Data Representation and Querying Project 2019
Mearn application that allows the user to store, delete and update information about 
books that the user finished reading, is currently reading or desires to read in the future.  

### Prerequisites

You are required to have **npm** (Node Package Manager) installed.

## Getting Started

After cloning the repository, run the following from your Terminal (Mac / Linux) or Command Prompt (Windows), with the project as your current working directory.

```
npm install
```
This will install all the required dependencies for the application to run correctly

After running that command you are now ready to run the application, to do so type the following command in your terminal
(note that the command should be executed with the project as your currently working directory):

```
npm start
```
![npm Start](/userGuideImages/npmStart.png)

The application will launch on http://localhost:3000/  
The next step is to navigate to the "BackEnd" and launch a console on that directory to execute the following command:

```
node server.js
```

This will start the server names server.js  
Alternatively you can open server.js in terminal if using VS Code as the following gif demonstrates:

![server start](/userGuideImages/serverStart.gif)

If you proceed to use the aplication without starting the server, you will eventually run into an error when loading your bookshelf
as in the following gif:

![Server Error](/userGuideImages/noServer.gif)

## User Guide

When the app initializes you will be on the home page, you can then use the navigation bar to navigate to the bookshelf
if there are no books on the database a simple message will be displaying instead

![Home navigation](/userGuideImages/homeNav.gif)

When you navigate to add book you will be required to fill the book details and then submit the new book, if successfull an alert will be displayed and you will be redirected to your bookshelf 
**Sample test data is available on the file testdata.txt if required** 

![add book](/userGuideImages/addBook.gif)

You can then edit the book details by pressing the edit button on the desired book

![edit book](/userGuideImages/editBook.gif)

To delete a book you can use the delete button on the desired book, this will prompt you to confirm the deletion, if cancel the book will remain in your bookshelf but if you confirm the book will be deleted

![delete book](/userGuideImages/deleteBook.gif)

A different color will be displayed based on the book status:

![book status] (/userGuideImages/bookStatus.png)
