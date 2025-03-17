const express = require('express');

const app = express();

const users = [
    { first_name: "Alice" },
    { name: "Bob" },
    { last_name: "Charlie" }
];

const html = `<ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
</ul>`;

app.get('/', (req, res)=>{
    res.send(html);
})

// console.log(html);
app.listen(8080, ()=>{console.log('Server');
});

