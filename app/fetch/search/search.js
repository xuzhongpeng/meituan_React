import { get } from '../get'

export function getSearchData(page, cityName, category, keyword){
  const keywordStr = keyword ? '/' + keyword : ''
  var data={
    page:page,
    cityName:cityName,
    category:category,
    keyword:keywordStr
  }
  const result = get('api/search',data)
  //const result = get('/api/search/' + page +'/'+cityName+'/'+category + keyword)
  return result
}
