# node-sass-materialize-boilerplate #

Since I was having trouble finding a boilerplate where i could use sass in node with the materialize framework, i did some searching and came across this beautiful boilerplate made by [anotheruiguy](https://github.com/anotheruiguy/node-sass-boilerplate). Since this template helped me on my way to getting a nice little boilerplate for materialized i decided to place it on git to help other people find it.

## Installing##
Since i am using linux, i will explain the instructions by using linux commands. Don't worry tho, it should primarily be the same across all OS's.

1  Create a local directory to clone the repository in.
```shell
        $ mkdir materialize-boilerplate | cd materialize-boilerplate
```

2  Clone the github repo to your local directory
```shell
        $ git clone https://github.com/yowkah/git-test.git
```

3  edit the package.json to change the porject name and author. ( i use gedit for this)
```shell
        $ cd git-test | gedit package.son
```

4  install all dependencies using NPM ( node package manager)
```shell
        $npm install
```

5  install materialize css with bower ( [bower.io](http://www.bower.io)
```shell
        $bower install materialize
```

6  install [grunt](gruntjs.com) if you don't have it yet and run grunt once. This will run the following tasks:  bower_concat ( concatinates all javascripts in bower to 1 big _bower.js in our public/js/ directory), sass and concat:dist. about the latter two you will find information in the next section. 
```shell
        $grunt
```

7  to copy the static resources from the materialize component. we run the gruntfile's copy task. This task will copy all the contents from the materialize/fonts directory to our public/fonts directory.
```shell
        $grunt copy
```
8  You are done. launch your app.js using node to see if everything works:
```shell
        $node app.js
```

##Workflow##
My workflow with this boilerplate is as follows:

1. I open a first new terminal window to run the 'grunt watch' task. This task runs the 'sass' and 'concat' task whenever i change a file. The sass task will compile all the sass files into a big application.css inside my public/stylesheets/ directory. The 'concat' task will merge the _bower.js file and my javascript files in /scripts/ directory to one big js file ( public/js/scripts.js).
2. I open a second terminal window in which i run [nodemon](http://nodemon.io/). This will automaticly restart the server when i save one of the files in my working directory (any file, app.js, a sass file, whatever).

This way i only have to click the refresh button of my browser when I am making changes. For a guy like me that saves a file after every word he types and requires 16 attempts to get something simple to work, it can be quite useful. 




