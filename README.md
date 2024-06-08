# Travel-Buddy_Web-Project

A web application built using MERN stack. 

<img width="1668" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/5c5b78fa-ed23-492a-9a0b-2ac14d349991">

# Features 
1. User can login/register with full security as jswebtoken is used to encode the password and then save it in the db
2. Users can search for the destination they want to visit. Apis are integrated to get the weather forecast, news, overviews and map location about the place being searched
3. Users can add the place they find interesting into their bucketlist, it will be displayed on their profile. They can remove the places from the bucketlist as well.
4. Users can create their own trips by filling the trip form.
5. Users can view the trips they have created.
6. Users can invite their friends for a specific trip they have created.
7. Users can view the invites they have got and delete them.
8. Users can logout from their accounts.

# How to setup the project locally
1. Clone this repository
2. go to terminal and write
   - cd client
   - npm install
   - cd server
   - npm install
   - cd client
   - npm run build
   - cd client
   - npm start
   - cd server
   - npm start
     
3. As this project uses mongo Db, make sure to change the path of connection string that is present in the server/config/dev folder.



