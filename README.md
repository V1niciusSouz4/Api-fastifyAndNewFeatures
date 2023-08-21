# App
 
 GymPass style app.

## RFs (functional requirements)

- [X] it should be possible to register;
- [X] it should be possible to authenticate;
- [X] it should be possible to get logged profile;
- [X] it should be possible to get number of check-ins performed by the logged-in user;
- [X] it should be possible the user obtains your check-ins history;
- [X] it should be possible the user get nearby gyms (up to 10km);
- [X] it should be possible the user get gyms by name;
- [X] it should be possible the user make check-in in your gym;
- [x] it should be possible validate the check-in of one user;
- [X] it should be possible to register a gym;


## Rn (business rules)

- [x] The user cannot register with an existing email;
- [x] The user cannot make two check-ins in the same day;
- [x] The user cannot make the check-in if he is not closer 100m of the gym;
- [x] The check-in just can be validated until twenty minutes after created;
- [ ] The check-in just can be valitaded by admins;
- [ ] The gym just can be registerd by admins;

## RFNs (unfunctional requirements)

- [x] the user password needs be encrypted;
- [x] The data of application needs be in a postgresSQL database;
- [x] All lists od data should be paginated with twenty or more itens by page;
- [ ] The user should be identified by a JWT (Json Web Token);