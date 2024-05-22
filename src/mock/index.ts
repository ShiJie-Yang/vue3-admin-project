import mock from 'mockjs'

mock.mock('/api/login', 'post',(options: any) => {
  if(options) {
    return {
      code: 200,
      msg: '登录成功',
      data: {
        token: '123456'
      }
    }
  }
});

mock.mock('/api/userInfo', 'get', {
  code: 200,
  msg: '登录成功',
  data: {
    id: '13dd48b33af3423c80468fa955920677',
    name: 'admin',
    avatar: '',
    buttons: [],
    roles: [],
    routes:['/','/home']
  }
});