# 17MD blog page with own database

## Start with database

`Use docker`

Type in console:
`docker run --name=blogDB -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_ROOT_HOST=% -d mysql/mysql-server:8.0`
name and password of your choice

Check if docker container works:
`docker ps`

##### Go to map 17MD_DB

write `npm install`

In this map you have file `starter.sql`
Execute all commands starting from the file start

Find in map folder `src` after `utils` and open `connectionQuery.ts` file
Change password and database name

write `npm run start:nodemon`
Check if database work (In console it will be written that it started on port 3004)

##### Go to map 17MD_Blog
write `npm install`
write `npm run dev` to start page



# Ready!
