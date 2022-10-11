const app =  require('./routes/app');
const port = 3005

app.listen(port, () => console.log(`this app runing on port ${port}!`))