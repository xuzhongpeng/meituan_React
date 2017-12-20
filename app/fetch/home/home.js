import { get } from '../get'

export function getAdData(){
  return get('api/homead');
}

export function getListData(city, page){
  var data={city:city,page:page}
  var result = get('api/homelist',data);
  return result;

}
