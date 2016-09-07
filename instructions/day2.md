## Day 2 
### In-class exercise
- convert Pets (in your own repo) to use Model Driven Forms.
### Homework

#### 1st stage :
  - Make a component for user registration
    - Username
    - Email 
    - Password
    - Submit button - runs   ```` alert(JSON.stringify(userForm.value))````
    
#### 2nd Stage
  - Clone https://github.com/misterBIT/misterBIT-simple-rest-server.git
  - run npm install && npm start 
  - add HTTP module, create a service
            - submit -> POST data via Http localhost:3003/data/user
  - make your submit button use the service to post data there
  
#### 3rd stage
 - convert to model driven forms
 - Add validation + validation messages:
    - Username - required, min 2 letters,a-z only
    - Password -required, min  6 letters, must have a digit (any number)
    - Email - valid email
 - Add a list component that calls a new method on the service -> GET localhost:3003/data/user  
   and displays the users list
   
- Extra points: 
    - add unique (via async validator) to the username field
