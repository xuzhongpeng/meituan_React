import 'whatwg-fetch'
import 'es6-promise'

export function get(url,data){
  console.log("进入到get方法："+url);
  return fetch(url,{    
    method: 'POST',
    headers:{
      'Accept':'application/json, text/plain,*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
