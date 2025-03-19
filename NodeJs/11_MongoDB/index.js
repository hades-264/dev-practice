const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const users = require('./MOCK_DATA.json');
const { type } = require('os');

const app = express();
const port = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/app-1')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('Mongo Error', err));


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String
    },
    jobTitle: {
        type: String
    }
});

const User = mongoose.model('user', userSchema);

// Middleware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    // console.log('Hello from middleware 1');
    // req.myName = 'Tony';
    // return res.json({ msg: 'This request is blocked by middleware 1'});
    fs.appendFile('./log.txt', `${Date.now()}: ${req.method} ${req.path}\n`,
        (err, data) => {
            next();
        })
});

/* app.use((req, res, next) => {
    console.log('Hello from middleware 2', req.myName);
    // return res.end('Hey');
    next();
}); */

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
    // console.log('Response from GET route', req.myName);
    // res.setHeader('myName', 'Tony');
    res.setHeader('X-myName', 'Tony'); // Custom Header
    console.log(req.headers);
    return res.json(users);
});

app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) {
            return res.status(404).json({ msg: 'No user exists with this id' });
        }
        else
            return res.json(user);
    })
    .patch((req, res) => {
        // Edit user with id
        const id = Number(req.params.id);
        const index = users.findIndex((user) => user.id === id);
        users[index].email = `${users[index].first_name}.${users[index].last_name}@gmail.com`;
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({ status: 'Success' });
        });
    })
    .delete((req, res) => {
        // Delete user with id
        const id = Number(req.params.id);
        // const user = users.find((user) => user.id === id);
        const index = users.findIndex((user) => user.id === id);
        users.splice(index, 1);
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({ status: 'Success', userid: id });
        });
    });

app.post('/api/users/', async (req, res) => {
    // Create new user
    const body = req.body;

    if (!body || !body.first_name || !body.last_name || !body.email || 
        !body.gender || !body.job_title) {
        return res.status(400).json({ msg: 'All fields are required' });
    }

    // users.push({ id: users.length + 1, ...body });
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    //     return res.status(201).json({ status: 'Success', id: users.length });
    // });
    // console.log("Body", body);

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });

    console.log(result);

    return res.status(201).json({ msg: 'Success'});
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
});