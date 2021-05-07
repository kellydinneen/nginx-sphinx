



                                                                      
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
 
 ## Intial Setup
 - clone down this repository (if you don't already have it)
 - `cd` into `nginx-sphinx` and run `npm install`
 - then, to link the app to your CLI, run `npm link`
 - you're good to go!

## Using the App

### view all the commands and their descriptions: `nginx-sphinx`
Just type `nginx-sphinx` into the command line to see a list of commands and associated options. Commands are displayed alongside their arguments, so if you're ready to leave this README behind you can use that command to find out everything you need to know about the app.

Additionally, for more detail, you can run `nginx-sphinx -help` or `nginx-sphinx -h`.

### convert a nginx log to JSON: `nginx-sphinx parse <source> <destination>`
To convert a log file to a JSON file, run `nginx-sphinx parse <source> <destination>` where source is the filepath of the original log and destination is the desired filepath for the JSON.

Note that you will recieve an error message if (a) the source filepath does not exist/cannot be found, (b) the destination filepath already exists, or (c) one of the provided paths is of the wrong type: the source should be a `.log` file (e.g. access.log) and the destination path should be for a `.json` file (e.g. access.json).

If you the conversion was successful, you will recieve the following message:
```
Looks good 👍
Entries from [source] have been successfully converted to JSON and stored in [destination]
```

### query the converted log: `nginx-sphinx query -param <query type> <log> <date>`
To query for the agent with the most hists on a given day, run `nginx-sphinx query -p agent <log> <date>` where `log` is the filepath of a parsed nginx log and the data is formatted `[day]/[month]/[year]`, e.g. `10/Nov/2020`.

To query for the most popular HTTP method and path on a given day, use the same query but using `request` instead of `agent` as the parameter following `-p`.


                                                                      



