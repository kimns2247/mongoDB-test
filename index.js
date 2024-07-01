const express = require('express') // 다운받은 express 모듈 가져오기
const app = express()  // function을 이용해서 새로운 app 만들기
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kimns2247:QYhjePHpmEykGqnA@testcluster.5ausesq.mongodb.net/' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('MongoDB Connect Complete'))
  .catch(err => console.log(err))


app.get('/',(req,res)=>res.send('Test중입니다! 다른 내용'))
// root 디렉토리 접근시 send 안에 내용 출력

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// // const port 번호에서 app 실행