if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: /*Your Mongodb url*/}
} else {
    module.exports == {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
