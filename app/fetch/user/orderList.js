import { get } from '../get'
import { post } from '../post'

export function getOrderListData(username) {
    let data={
        username:username
    }
    const result = get('/api/orderlist' , username)
    return result
}

export function postComment(id, comment, star) {
    const result = get('/api/submitComment', {
        id: id,
        comment: comment,
        star: star
    })
    return result
}
