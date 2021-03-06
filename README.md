



                                                                      
                                         ▄▖▟█▛▄▄     ▄▄▄▄▄▖           
                                       ▗▜██▜█▛██▐▄ ▗█▘ ▀████▖         
                                      ▗█▘▜█▞▜▌██▟█▌▐▙      ▀▀▖        
                 ▄▄█████▄             ▜▞▀▙█▐█▗▜▚█▛▟▖▜▙▖               
                 ▀███████▙               ▝▄▛▙█▌█▜▟█▌  ▀▜█▄▄▄          
                ▗▛▛▄▐█████▄             ▗▟▙█▀▙█▟█▛▙▌       ▀▜▙▄       
               ▗███████▌███▖          ▗▟█▜▄█▛▜▌█▟██▘         ▝▜▙      
                ▝███▟██▙▟███▖      ▗▄██▜▟████▛▟▀▜█▞▟▙▄▖       ▐█▌     
                 ███▐██▌▙▜███▙  ▗▄█▛▜▙▛▜███▛▚████▜█████▙▖▄▄▄▄▄██▘     
                  ▗█▟██▌█▙▜█▀▚▟█▝▜▄▛█▟▛▜▛█▄▄▄▄▄▄▟████████▙▜██▛▀       
                  ▐▚███▌▜█▄█▜██▚▛█▟▜▙▐▀▟█▄▄█▛█▟███████████▙           
                  ▟▞▜▙▟████▙██▚▟▜ ▛▄▄▛▜█▄▀█▟███████▜████████▖         
                  ▙██████▜▟█▛ ▙▗▙▛▜▙█▀█▄█████████▀▀█▞▜███████▙▄       
                ▗▟█████▜▟█▛▙█▙▜█▟▀▙▄███▀▀▀▀▘      ███▙▟▜██████████▙   
                ▟████▛▟██▚▞██▀█▄▀▀▀▘              ▝████▌ ▝▀▀▀▀▀▀▜██▖  
             ▗▄▟████▚██▛▞▘▘▝█▄██▄                  ▝▜██▙         ▜██  
          ▗▄███████▚▀▀▘       ▀██▙▖                 ▗██▛         ▝██  
        ▗▟█████▀▀▘              ▜██               ▗▟█▛▘           ██  
 # What do you get when you combine a high performance load balancer and your CLI?
 ### that's right, a NGINX SPHINX!
 Give our sphinx your poor, your tired, and your access logs and she will parse and query them for you. You don't even have to solve any riddles.
 
 ## Context
 The project MVP was created as a technical exercise for an interview with Slalom Portland.
 A provided spec included sample data, functionality requirements, and a schema for the parsed nginx data.
 
 ## Technologies
 - `Node.js`
 - `Mocha` and `Chai`
 - `Commander`
 - `Chalk`
 
 ## Intial Setup
 - clone down this repository (if you don't already have it)
 - `cd` into `nginx-sphinx` and run `npm install`
 - then, to link the app to your CLI, run `npm link`
 - you're good to go!

## Using the App

### view all the commands and their descriptions: `nginx-sphinx`
Just type `nginx-sphinx` into the command line to see a list of commands and associated options. Commands are displayed alongside their arguments, so if you're ready to leave this README behind you can use that command to find out everything you need to know about the app.

Additionally, for more detail, you can run `nginx-sphinx --help` or `nginx-sphinx --h`.

<p align = "center">
<img src="https://media.giphy.com/media/z1Xqaxq8mupqmc2cOH/giphy.gif">
</p>

### convert a nginx log to JSON: `nginx-sphinx parse <source> <destination>`
To convert a log file to a JSON file, run `nginx-sphinx parse <source> <destination>` where source is the filepath of the original log and destination is the desired filepath for the JSON.

Note that you will recieve an error message if (a) the source filepath does not exist/cannot be found, (b) the destination filepath already exists, or (c) one of the provided paths is of the wrong type: the source should be a `.log` file (e.g. access.log) and the destination path should be for a `.json` file (e.g. access.json).

If you the conversion was successful, you will recieve the following message:
```
Looks good 👍
Entries from [source] have been successfully converted to JSON and stored in [destination]
```

<p align = "center">
<img src="https://media.giphy.com/media/9MIyNk3fyzWDuFVW78/giphy.gif">
</p>

### query the converted log: `nginx-sphinx query -param <query type> <log> <date>`
To query for the agent with the most hits on a given day, run `nginx-sphinx query -p agent <log> <date>` where `log` is the filepath of a parsed nginx log and the data is formatted `[day]/[month]/[year]`, e.g. `10/Nov/2020`.

To query for the most popular HTTP method and path on a given day, use the same query but using `request` instead of `agent` as the parameter following `-p`.

<p align = "center">
<img src="https://media.giphy.com/media/hMuaUYUiCMLYBQublR/giphy.gif">
</p>


## Notes for Future Iterations

### Improve Resilience of Parsing Functionality 
To solve performance issues caused by the synchronous use of regular expressions, a simpler parsing logic was implemented using basic string and array methods. This makes the app sufficiently fast, but the parsing funtionality is no longer dynamic enough to handle even slight changes in the format of the incoming logs. To improve the resilience of the app, a next iteration of this project could return to the use of regex in combination with [Node streams](https://nodejs.org/api/stream.html), so that reading of source file, parsing, and writing of JSON file can happen in parallel.

### Refining the UI
Error handling can be made more robust for a variety of CLI input issues, and the handling of user arguments can be made more dynamic (e.g. to handle a variety of date inputs for queries). Additionally, the CLI styling can be further enhanced via the selection of a custom app color scheme. Ideally, some amount of user experience research should be undertaken with users of Nginx to ensure that the current command selection is aligned with user needs.

### Testing
Unit tests can be made more thorough with additional threads of sad path testing. It would also be beneficial to look into testing for performance.

### More Features
- parsing nginx error logs (or other varieties of logs)
- more query options (return total hits for every agent, total frequency for every HTTP method+path combo, date range of log, etc)
- ability to update previously parsed logs with new data
- enhanced `--help`section with a more complete description of each command and errors to look out for
- this app could be directly integrated with the Nginx API so that user logs could stream directly into the parser and the user could bypass reference to a log source file

