
// type?"随机":"顺序"
export const randomSort = (list,type=true)=>{
  if(type){
    return list?.map(item=>0.5-Math.random())
  }
  return list
} 