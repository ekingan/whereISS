# Where is ISS?

## to spin up this project
1. clone repo
2. npm install
3. npm run start
4. view project at localhost:8080
5. use the ID 25544 as the API currently only supports one satallite.

## to run tests
1. after above steps, in command line type: npm run test

## The challenge:

This coding challenge asked to write a javascript module that given an ID and request rate would return a readable stream with the location data
for the corresponding satellite using http://wheretheiss.at/w/developer for data.
The stream was to be implimented by sub classing the node.js class ReadableStream and include tests.
We were to then, implement a stream that calculated change of lat/long per second.


## What I did:

I created a front-end project using React/Redux. The user is prompted to enter the id of a satellite and a rate. Based on the info entered, 
the whereISS API returns the lat/long and name of that satellite.

I also wrote a server-side node.js module that does a similar task. It uses a function called getData which takes a URL and an ID and returns
the name, latutude, and longitude of the satellite. The code for this can be found in the src/services directory. These files are not linked to the front-end.


## Successes

1. I have been focusing on using React/Redux and I was able to easily create a front-end application which queried the API and returned
JSON data and rendered the data to the DOM. 

2. I was comfortable with Node enough to make the same API query and return similar data.

3. I wrote several tests for the project that test the components, actions, and reducers. See above for how to run tests.

4. I was glad to get a Node.js refresher and am enthusiastic about continuing to deepen my knowledge of Node. (Node is so cool!)

## Issues

1. I wish I had more time to work on this challenge! This week I was working full time and had family visiting which made it challenging to 
set aside time to work on it.

2. Using ReadableStream proved challenging and I was stumped on how to get it to work directly with an external API. Some thoughts I had were to set up
my own server to stream data or to try to use localStorage.

3. If I had been able to use ReadableStream, I would have incorporated the rate variable to start and pause the stream at the requested intervals. Currently, entering a rate has no effect.

4. Due to time limitations, I did not link the back-end and front-end portions of the project but wanted to include them both so you could see what I had done.

5. I am pretty sure React/Redux was not the best choice for this project since there was not much support on how to use ReadableStream with these frameworks.

6. I did not have time to write documentation for the gist provided  at https://gist.github.com/hayes/348246e0060b93077b34 .
I wanted to submit this to you by Friday morning. I do have time this weekend and if you are interested in seeing how I would approach this I
would love the opportunity.

##Thanks so much! - Emily
