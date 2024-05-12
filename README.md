# Travel-Buddy_Web-Project

A web application built using MERN stack. 

<img width="1668" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/5c5b78fa-ed23-492a-9a0b-2ac14d349991"><img width="1668" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/ccb88810-b808-46ba-9591-80361719ddd9">

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

# Interface of the Web Application

# Login Page
<img width="1668" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/703cf7f4-7f63-456d-a58d-2017113f32cb">

# Register Page
<img width="1668" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/2da24721-d3bd-4fd7-a0b3-97fce836961d">

# Home Page (before logging in)
<img width="1668" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/44b89524-5ac3-4272-9e3f-a793b6fdbcad">
<img width="1668" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/4edfd8fe-b444-4ede-b534-1505bb0baaaf">
<img width="1668" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/d4a3cce1-f2bc-44ff-b2b8-72473f714993">

# Home Page (after logging in)
Once the user is logged in, more options are displayed on the nav bar that the user can perform.

<img width="1668" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/71fe086f-97fb-488c-9394-69fabb01d79e">

# Create Trip form
<img width="1636" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/25524576-f73b-4b1c-97de-d73a36ad4f0d">

# Trips page
it displays the trips created by the logged in user.

# Search for Trips (based on destination and starting and ending dates)
<img width="1636" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/5ce9677f-ef46-4af2-829e-59e0a44ab633">

# Invite Friends page 
User can invite friends by entering the email address and the trip destination.

<img width="1636" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/759ba289-ab05-4c89-a334-287faf09aa47">

# View invites page
User can delete the invite by clicking on the red bin icon.
<img width="1636" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/ba25c176-31fb-4f3d-92f3-7b1a9e1c5f29">

# search the place
<img width="1636" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/435711ce-479c-4f5a-97cd-eab5d64cc6cf">
<img width="1636" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/563f3c38-a7cd-42b2-bcdf-27803e8689b8">

# Profile Page
contains the bucketlist, you can remove items from bucketlist by clicking on the icon (red bin)
<img width="1636" alt="image" src="https://github.com/aizakhurram/Travel-Buddy-Web-Project/assets/102323528/fd4740ff-0b54-47a9-b060-b432503b1862">


