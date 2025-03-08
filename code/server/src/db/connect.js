const mongoose = require("mongoose");
// Middleware
// const db = 'mongodb+srv://personalexpense:personalexpense@cluster0.eg4rfsk.mongodb.net/personalexpense?retryWrites=true&w=majority'
const db = 'mongodb://127.0.0.1:27017/exp'

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017