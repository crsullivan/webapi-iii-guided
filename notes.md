# middleware notes

everything (almost everything) is middleware

# Types (based on how we got it or who built it):

-built in: included in express (you need to opt in ex. json parsing)

-custom: code we write to function as middleware

-Third party: must be installed from `npm` `yarn`

# types (based on how its being used):
-global: runs on every request that comes into the server
-

Order MATTERS! 
-top to bottom
-left to right
