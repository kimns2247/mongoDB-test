const express = require('express') // 다운받은 express 모듈 가져오기
const app = express()  // function을 이용해서 새로운 app 만들기
const port = 5000
const bodyParser = require('body-parser');

const {User} = require("./models/User");

const config = require('./config/key');

app.use(bodyParser.urlencoded({extended:true}));
//application/x-www-form-urlencoded

app.use(bodyParser.json());
// application/json파일로 된것을 분석

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('MongoDB Connect Complete'))
  .catch(err => console.log(err))


app.get('/',(req,res)=>res.send('Test중입니다! 다시테스트'))
// root 디렉토리 접근시 send 안에 내용 출력

app.post('/register', async (req, res) => {

    // 회원가입할때 필요한 정보를 client에서 가져오면
    // 그것들은 DB에 넣어줌.

    const user = new User(req.body)
    try{
      await user.save();
      return res.status(200).json({
        success: true
      });
    } catch (err){
      return res.json({success: false, err});
    }
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// // const port 번호에서 app 실행