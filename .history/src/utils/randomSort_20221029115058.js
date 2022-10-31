
// type?"随机":"顺序"
export const randomSort = (list,type=true)=>{
  if(type){
    return list?.sort(item=>{
      return Math.random()-0.5
    })
  }
  return list
} 