import {BASE_URL} from '../../api/url';

export function* doLogin(payload){
  const response = yield fetch(`${BASE_URL}/auth/login`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      "email":payload.userData.email,
      "password":payload.userData.password
    })
  })
  const responseJSON = yield response.json()
  return responseJSON
}
