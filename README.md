
## Backend FAVS


### Installing dependencies

To install the project in local execute the next line in terminal:

```
npm install
```

### Run instructions

To run the project execute the next line:
```
npm start 
```
To test the project execute the next line:
```
npm test
```
	
### Endpoinst information

Here some additional information for endpoints created:

```
├── AUTH
     |-- POST   /auth/local/register  : Register user by email/password
     |-- POST   /auth/local/login     : Login user by email/password
├── LISTFAVS
     |-- GET     /api/favs/             : Get all list of favorites
     |-- POST    /api/favs/             : Creates a new list of favorites
     |-- GET     /api/favs/:favsId      : Get a single list of favorites
     |-- DELETE  /api/favs/:favsId      : Deletes a list of favorites
├── FAV
     |-- POST    /api/fav/:favsId       : Creates a single fav for favorite list
     
LISTFAVS and FAV endpoinst use isAuthenticated() middleware function to verify user authentication.

```
### Models

Here some additional information for models created:
```
  -- User
  -- ListFavs
  -- Favs
```
