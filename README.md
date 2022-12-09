# Project Overview

## Summary

This project was part of the Northcoders bootcamp, October 2022 - December 2022.

In this project, I:

```
1. Built a back-end API, in order to access application data.
2. Built a front-end, which utilised the back-end API.
```

The intention was to mimic the building of a real world backend service, such as reddit. The database used was PSQL, and interactions were done through node-postgres. The front end application was constructed using React.

## Using the app

The front end application satisfies the following user desires:

```
1. View a list of all articles
2. View a list of all articles of a certain topic
3. View an individual article
4. Like on an article
5. View a list of comments associated with an article
6. Post a new comment to an existing article (as a valid user)
7. Sort articles based on: date, author, or number of likes
8. Order sorted articles in ascending or descending order
9. Delete comments (as a valid user)
10. Have responsive error handling for invalid URL paths
```

As the Guest user - the default user for the Home page - you can browse articles, topics, and view comments. You will not be able to comment on an article without being a valid user. You can also not delete comments as the Guest user.

To be recognised as a valid user, select the login button in the top right corner. You will then be able to comment on articles (using that username), and you will be able to delete your comments.

## Links

| Description               |                          Link                          |
| :------------------------ | :----------------------------------------------------: |
| Hosted version of project |         https://oliverholt-ncnews.netlify.app/         |
| Back-end API              | https://long-pink-goat-wear.cyclic.app/api/healthCheck |
| Back-end repo             |     https://github.com/OliverHolt/BE-news-project      |
| Creator's Github profile  |             https://github.com/OliverHolt/             |

# Set-up instructions

## Install Node.js

Ensure that you have Node.js installed with these minimum requirements:

```
Node.js: v18.7.0
```

To check which version you currently have installed:

```
node --version
```

## Cloning the repo

In order to clone this repo use the following:

```
git clone https://github.com/OliverHolt/NC-News
```

If you would like to make changes to this repo yourself, fork the repo then clone it.

## Installing dependencies

To install all dependencies required run:

```
npm install
```

## Running dev site locally

Once you have installed all dependencies run:

```
npm start
```
