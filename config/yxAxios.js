import axios from 'axios'
/**
 * 后端接口都是表单键值对的形式，而且都是post方法，可以直接封装
 * */
export default function (url, params) {
  return axios({
    method: 'post',
    url: url,
    params: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  })
}
