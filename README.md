# node-whm
WHM (Web Host Manager) API 1 Wrapper for NodeJS

This is a library that allows you to remotely control your web hosting server that is running cPanel.

This library is built for personal use. If you would like to use it and there is a missing feature, please submit an issue on the Github repo and I will do my best to add it ASAP.

To build this, run `tsc` at the root directory. Or install via npm `npm install node-whm`

## Usage
### JavaScript
```javascript
var WHM = require('node-whm/dist');
var whmClient = new WHM.Client({
    serverUrl: 'https://myserver.com:2087',
    remoteAccessKey: 'remoteAccessKeyHere',
    username: 'resellerOrRootUser'
});

whmClient.createAccount({
    username: 'myuser',
    password: 'mySecurePassword!',
    plan: 'Pro',
    domain: 'clientdomain.com'
}).then(
    function(success){ 
        console.log(success);
        // do something with data
    },
    function(error) {
        console.error(error);
        // do something with data
    }
);

```

### Typescript
```typescript
import {WHM} from 'node-whm/dist';

let whmClientOptions: WHM.WHMOptions = {
   serverUrl: 'https://myserver.com:2087',
   remoteAccessKey: 'remoteAccessKeyHere',
   username: 'resellerOrRootUser'
};
let client: WHM.Client = new WHM.Client(whmClientOptions);

client.createAccount({
           username: 'myuser',
           password: 'mySecurePassword!',
           plan: 'Pro',
           domain: 'clientdomain.com'
       }).then(
           success => { 
               console.log(success);
               // do something with data
           },
           error => {
               console.error(error);
               // do something with data
           }
       );
```


## Methods

### createAccount(options: CreateAccountOptions): Promise<any>

### terminateAccount(user: string): Promise<any>

### listAccounts(): Promise<AccountData[]>

### listIPAddresses(): Promise<any>

## Interfaces

### WHMOoptions
### CreateAccountOptions
### AccountData