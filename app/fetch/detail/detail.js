import { get } from '../get'

export function getInfoData(id) {
    var data={
        id:id
    }
   const result = get('/api/detail/info' , data)
   return result
}

export function getCommentData(page, id) {
    let data={
        page:page,
        id:id
    }
    const result = get('/api/detail/comment' ,data)
    return result
}