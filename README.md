# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

<hr>

#  Testing Credentials
<br>
> There are 20 testing users. 
10 admins and 10 standarts users. (Please check the rolesId to determinate which one is Admin) 
<br>
To make it easier to handle, all user data has the following structure: 
<br>

 
-  => replace {N} with a number between 1 and 20:

<br>

``` 
{
      firstName: 'Usuario{N}',
      lastName: 'Demo',
      email: 'test@test{N}.com',
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    }
```
