## Advtr - Search Microfrontend

> This is a WIP

The main map view and tester for what will be `https://map.advtr.co.uk`, where we can allow users to view their destinations, pin things on their map, and view new locations easier

### Todo

- [ ] Remove any useless files and components
- [ ] Streamline containers and components to be more (Components -> Styling, Containers -> Stateful)
- [ ] Adjust Setting UI to be smoother and fit all devices better
- [ ] All round refactoring
- [ ] Tests


## Components

Preferably should be built generic, as certain ideas will be shared with multiple frontends, so while not everything, will help reduce creation time

## Architecture

> Very, very simplified, and doesn't show where redux connects

```
+---------------+                                                                      
|               |                                                                      
|               |                                                  +------------------+
|     Redux     |                                                  |                  |
|               |                                                  |                  |
|               |                                                  |    SearchInput   |
+---------------+                                                  |                  |
        |                                                          |                  |
        |                                                          +------------------+
        |                                                                   ^          
        v                                                                   |          
+---------------+                +----------------------+         +-------------------+
|               |                |                      |         |                   |
|               |                |                      |         |                   |
|               |                |                      |         |                   |
|ConnectedRouter|                |    DetailCard***     |         |     SearchView    |
|               |                |                      |         |                   |
|               |                |                      |         |                   |
|               |                +----------------------+         |                   |
+---------------+                           ^                     +-------------------+
        |                                   |                               ^          
        |                                   |                               |          
        |                                   |                               |          
        v                                                                              
+----------------+                +-------------------+             +-----------------+
|                |                |                   |             |                 |
|                |                |                   |             |                 |
|                |                |       Detail      | ----------> |    SearchCard   |
| container/App  |                |                   |             |                 |
|                |                |                   |             |                 |
|                |                |                   |             |                 |
|                |                +-------------------+             +-----------------+
+----------------+                          ^                                          
        |                                   |                                ^         
        |                                   | /place/*                       | /*         
        |                                   |                                |         
        v                                                                    |         
+----------------+                 +-----------------+              +-----------------+
|                |                 |                 |              |                 |
|                |                 |                 |              |                 |
|   SearchPage   | --------------> |     Routing     | -----------> |     Search*     |
|                |                 |                 |              |                 |
|                |                 |                 |              |                 |
+----------------+                 +-----------------+              +-----------------+
        |                                                                              
        |                                                                              
        |                                                                              
        v                                                                              
+-----------------+                                                                    
|                 |                                                                                                                                    
|                 |                                                                    
|   MapProvider** |                                                                    
|                 |                                                                                                                                   
|                 |                                                                    
+-----------------+                                                                    
```

> - \* This container doesn't exist but is a visualisation of the routing changing for any URI without `/place`
>
> - \** This is a collection of containers, with MapProvider handling the map updates, and MapView displaying the map
>
> - \*** This is a HOC for both `DetailCard` and `DetailCardModal`, should note this isn't the way it will stay, soon to change

