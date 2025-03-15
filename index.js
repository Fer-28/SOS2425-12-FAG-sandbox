const express = require("express");
const app = express();
const PORT = process.env.PORT || 16078;
const BASE_API = "/api/v1";

app.use("/", express.static("./public"));

let contacts = [
    {
        name: "peter",
        phone: 123456
    },
    {
        name: "pablo",
        phone: 987654
    }
];

app.get(BASE_API+"/contacts",(request, response)=>{
    console.log("New GET to /contacts");
    response.send(JSON.stringify(contacts));
});

app.get("/hello", (request, response) => {
    response.send("Hello from the server!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});

console.log(`Finish setup`);