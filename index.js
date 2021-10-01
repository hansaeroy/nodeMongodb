const express = require("express");
const app = express();
const port = 5000;
// const bodyParser = require('body-parser');
// const { User } = require ('./models/User');

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://hansaeroy:abcd1234@hans.mh77e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

app.get("/", (요청, 응답) => {
  응답.send("Hello World!");
});

// app.post('/register', (req, res) => {
//   //회원가입 할때 필요한 정보들은 client에서 가져오면  데이터베이스에 넣어준다.
//   const user = new User(req.body)

//   user.save((err, userInfo) => {
//     if (err) return res.json({success: false, err})
//     return res.status(200).json({
//       success:true
//     })
//   })

// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
