# App
 
 GymPass style app.

## RFs (functional requirements)

- [X] it should be possible to register;
- [X] it should be possible to authenticate;
- [ ] it should be possible to get logged profile;
- [ ] it should be possible to get number of check-ins performed by the logged-in user;
- [ ] it should be possible the user obtains your check-ins history;
- [ ] it should be possible the user get nearby gyms;
- [ ] it should be possible the user get gyms by name;
- [ ] it should be possible the user make check-in in your gym;
- [ ] it should be possible validate the check-in of one user;
- [ ] it should be possible to register a gym;


## Rn (business rules)

- [x] The user cannot register with an existing email;
- [ ] The user cannot make two check-ins in the same day;
- [ ] The user cannot make the check-in if he is not closer 100m of the gym;
- [ ] The check-in just can be validated until twenty minutes after created;
- [ ] The check-in just can be valitaded by admins;
- [ ] The gym just can be registerd by admins;

## RFNs (unfunctional requirements)

- [x] the user password needs be encrypted;
- [ ] The data of application needs be in a postgresSQL database;
- [ ] All lists od data should be paginated with twenty or more itens by page;
- [ ] The user should be identified by a JWT (Json Web Token);