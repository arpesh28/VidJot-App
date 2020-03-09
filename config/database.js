if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: 'mongodb://<desmond>:<Desmond@28>@ds127362.mlab.com:27362/vidjot-app'}
} else {
    module.exports == {mongoURI: 'mongodb://localhost/vidjot-dev'}
}