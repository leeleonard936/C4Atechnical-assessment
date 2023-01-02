# Devlog

## Plans

I plan to do all 4 of the front end tasks

Unfortunately I can't get the reroute to work

## Installs
installed angular material to make building the front end easier

## Initial test
I manually added a hero named arthur to the hero array in the backend to test my code for the first frontend challenge

## Routing
First attempted to route to a new hero page using ts, then opted to use routerlink in the html page.

used this documentation to determine the best way to send hero data to the viewhero page https://www.digitalocean.com/community/tutorials/angular-query-parameters

## Issue #1
Ran into an issue when attempting to inject a typescript variable into html, did not realize it was as easy as it is. I was attempting to add brackets around the variable name when i did not need to.

## Issue #2
Matformfield will not show until clicked. I do not know how to fix this and none of the documentation has any hints, nothing on stackoverflow either *** to be fixed. I used ngmodel to take input using this documentation: https://angular.io/api/forms/NgModel

## Issues with post
post request to create a hero would not execute, I troubleshooted using the angular documentation. I was not currectly implementing the request

## Issues with delete
The same issue with delete is occuring as with post, I think im not correctly formatting the data to go to the api
**update - this was exactly what was happening, I was attempting to send a body instead of appending the id to the end of the url

## Issues with edit
Edit does not excute correctly, I do not know if it is potentially a problem with the backend.service that I wrote or with the call to it. I forgot that you had to subscribe to the patch request in order for it to execute - fixed

## Functionality completed
all functionality is completed aside from the error message from the first task.

