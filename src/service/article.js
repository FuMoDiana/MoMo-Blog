import HYRequest from './request'

export function pushDocFetch(obj){
  return HYRequest.post('articles/push')
}

export function deleteArticle(aid){
  const headers = {
    Authorization: `Bearer ${token}`
  }
  return HYRequest.delete(`articles/article/${aid}`,headers)
}
