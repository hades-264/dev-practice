const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');

const app = express();
const port = 8000;

// Middleware
app.use(express.urlencoded({ extended: false}));

// app.get('/users', (req, res) => {
//     return res.json(users);
// });

app.get('/users', (req, res) => {
    const html = 
        `<ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>`;
    res.send(html);
});

app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.route('/api/users/:id')
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(user === null || user === undefined){
        return res.json("No such user");
    }
    else
        return res.json(user);
})
.patch((req, res) => {
    // Edit user with id
    return res.json({ status: 'Pending'});
})
.delete( (req, res) => {
    // Delete user with id
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    users.pop(user);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: 'Success', userid: id});
    });
});

app.post('/api/users/', (req, res) => {
    // Create new user
    const body = req.body;
    users.push({id: users.length + 1, ...body});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: 'Success', id: users.length});
    });
    console.log("Body", body);
});

/* app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.patch('/api/users/:id', (req, res) => {
    // Edit user with id
    return res.json({ status: 'Pending'});
});

app.delete('/api/users/:id', (req, res) => {
    // Delete user with id
    return res.json({ status: 'Pending'});
}); */


app.listen(port, () => {
    console.log(`Server Started at port: ${port}`);
})