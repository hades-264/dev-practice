const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
       return res.end();
    }
    // console.log(req.headers);
    const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    // console.log(myUrl.pathname);
    
    fs.appendFile('./log.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case '/': 
                if(req.method === 'GET')
                    res.end("HomePage");
                break;
            case '/about': 
                const username =  myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;
            case '/signup':
                if(req.method === 'GET')
                    res.end('This is a signup form');
                else
                    if(req.method === 'POST')
                        res.end('Success');
            break;
            default: 
                res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Server Started!"));


