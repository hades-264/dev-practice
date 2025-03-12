const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
       return res.end();
    }
    // console.log(req.headers);
    const log = `${Date.now()}: ${req.url} New request received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    // console.log(myUrl.pathname);
    
    fs.appendFile('./log.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case '/': 
                res.end("HomePage");
                break;
            case '/about': 
                const username =  myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;
            default: 
                res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Server Started!"));


