const express = require('express');
const mysql = require('mysql');
const app = express();
var bodyParser = require('body-parser');
var methodOvereide = require('method-override');
var cors = require('cors');
// Hashing and salting password
const bcrypt = require('bcrypt');
const saltRounds = 10;
app.use(cors());
app.use(bodyParser.json());
app.use(methodOvereide());


const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100'
];
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    }
}
app.options('*', cors(corsOptions));

app.get('/', cors(corsOptions), (req, res, next) => {
    res.json({ message: 'ITJ153 Server App is alive.' });
    

})
// Update the details if DB's details changed --important
const db = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Scums'
});

//Test for connection
db.getConnection((err1) => {
    console.log('Connecting mySQL....')
    if (err1) {
        throw err1;
    }

    console.log('Mysql connected....')
    db.query('select * from Profile;', function (err2, result, field) {
        if (!err2) {
            console.log(result);
        }
        else {
            console.log(err2)
        }
    });
});
/*
test
app.route('/testMessage', cors(corsOptions)).post(function (request, resp) {
    console.log("Using the console feature");
    resp.json({ message: 'testMessage has been executed.' });
});

app.route('/signup', cors(corsOptions)).post(function (request, response) {
    var email = request.body.Email;
    var password = request.body.Password;


    db.query('SELECT * FROM UserAccountBabyG WHERE email = ?;', [email], function (error, result, fields) {
        if (!error) {
            if (result.length > 0) {
                response.send(false)
            } else {
                // Hashing and salting password
                bcrypt.hash(password, saltRounds, function (err, hash) {
                    db.query("INSERT INTO UserAccountBabyG (email,password) VALUES(?,?);",
                        [email, hash], function (error, result, fields) {
                            if (!error) {
                                console.log('Row inserted:', result);
                            } else {
                                console.log(error);
                            }
                            response.send(true);
                        })
                });
            }
        } else {
            console.log(error);
        }
    });
});
app.route('/login', cors(corsOptions))
    .post(function (request, response) {
        var Email = request.body.Email;
        var Password = request.body.Password;

        // Check account details
        db.query('SELECT * FROM UserAccountBabyG WHERE email = ?;', [Email], function (error, result, fields) {
            if (!error) {
                console.log(result);

            } else {
                console.log(error);
            }
            if (result.length > 0) {
                response.send(result);
                // Compare the password with hashing and salting
                 bcrypt.compare(Password, result[0].password, function (err, res) {
                    if (res == true) {
                        response.send(result);

                    } else {
                        response.send(null);

                    }
                }); 
            } else {
                response.send(null);

            }
        })
    })
*/
   
       


// Basic things to include
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log("listening to Port", app.get("port"));
});
