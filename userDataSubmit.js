const querystring = require('querystring');

function userDataSubmit(req, resp) {

    let dataBody = [];

    req.on("data", (chunk) => {
        dataBody.push(chunk);
    });

    req.on("end", () => {

        let rawData = Buffer.concat(dataBody).toString();

        let readableData = querystring.parse(rawData);
        let datastring="My email is "+readableData.Email+" and Password:"+readableData.password

        console.log(datastring);

        resp.end();
    });
}

module.exports = userDataSubmit;