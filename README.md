# Shootsta Simplified Youtube - Developer Coding Challenge
![](https://img.shields.io/node/v/mocha)
![code size](https://img.shields.io/github/languages/code-size/zhongchengli/simple-youtube)


## Description
This is a small web stack. It is a simplifed Youtube applicatoin where you can upload, store/retrieve and watch video.

## Backend Project:
Back-end project is placed in *server* folder. It is developed with Typescript, TypeGraphql, Nodejs and Express.
The API is built with ApolloServer as a stand-alone GraphQL server.

## Front Project:
Front-end project is placed in *client* folder. It is developed with ReactJS and ApolloClient

## Requirements:

1. [X] Upload a video
2. [X] Store videos including records and video files
3. [X] Retrieve videos
4. [X] Stream/watch video
5. [X] Show thumbnail of video

> Note: All records and files are saved in local file system. No database in use.

## Installation
Use the package manager [npm](https://www.npmjs.com/) to install the dependencies in the backend/frontend project.

```bash
npm install
```

## Testing Backend --> Server
You need to have a mp4 file in the place of */server/test/assets* folder to make integration testing run properly.
Rename your file as *test.mp4* to make test code recognise it.
The file is ignored by git so it will not be submitted to git repository.

Once you had a mp4 file in place, execute following commands to run the testings for backend project.

```bash
$ tsc
$ npm run coverage
```

## Code Coverage
As a result of execute unit/function tests above, there will be two folders (*.nyc_output* and *coverage*) automatically created at the root of the server application.
Go to *coverage* folder and open *index.html* file with any browser, you can view the report of code coverage.

## Start up application
> Note: Before you start up the applicatoin, please make sure your ports of *3000* and *4000* are free to go on your local.

Execute following script in both *client* and *server* folder to start up application

```bash
$ yarn start
```

The following output indicates that the *server* is up
```
🚀 Server ready at http://localhost:4000/graphql
```

Once a browser poped up for you by starting up client project, you are free to go and play around with this simplified youtube application.

> Note: All the uploaded video files are in the place of */server/dist/videos* folder where you can verify the feature of uploading video.

# Author
* Jason Li - [LinkedIn](https://www.linkedin.com/in/jason-li-5a943a135/)<br>
*Java & Full stack JavaScript Developer*<br>
Thanks for your time to review my code. I expect you are able to understand the design of the project and functions that I have implemented in this application.

<br>
As an candidate doing this code challenge, I have been enjoying hands-on coding, issue investigation, knowledge deep diving and problem solving in this project.
<br>
<br>
I expect this project has exposed my tech stack and skill set to your development and recruitment teams in terms of my job application at Shootsta.



