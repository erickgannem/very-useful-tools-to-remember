# very-useful-tools-to-remember

Very-useful-tools-to-remember (VUTTR) is a simple REST API which let you list, add and remove node packages from a database. 


## Usage

To use it, you just need to clone this repository, open a terminal and run the following commands:

``` bash
$ yarn install
```
to install all the needed packages and then run:

``` bash
yarn start
```

once the server is running, you can make calls to the following routes:


```bash
(GET) /tools ## list all tools 

(GET) /tools/?tag=anytag ## find a tool by tag

(POST) /tools ## add a new tool 

(DELETE) /tools/:id ## delete a existing tool
```



```

## Informations
The server will run on port 3000.

