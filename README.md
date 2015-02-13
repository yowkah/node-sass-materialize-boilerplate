# node-sass-materialize-boilerplate #

Since I was having trouble finding a boilerplate where i could use sass in node with the materialize framework, i did some searching and came across this beautiful boilerplate with top-notch instructions made by [anotheruiguy](https://github.com/anotheruiguy/node-sass-boilerplate). Since this template helped me on my way to getting a nice little boilerplate for materialized i decided to place this version on git to help other people get started with materialize in node. Again, massive props to [anotheruiguy](https://github.com/anotheruiguy/).

How is this repo different: [anotheruiguy](https://github.com/anotheruiguy/)'s github repo is more or less a walkthrough of the steps that he took to create his boilerplate. There is no need to actually clone his repo if you follow the walkthrough. For this project it will be a quick clone small clone and some extra steps to get you a working boilerplate in a couple of minutes tops. 

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

3  edit the package.json to change the project name and author and any extra packages you wish to install. ( i use gedit for this)
```shell
        $ cd git-test | gedit package.json
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




