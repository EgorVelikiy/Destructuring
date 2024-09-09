export default function getSpecialAttacks(obj, attack) {
  const {special} = obj

  if (!special) {
    throw new Error('У персонажа нет особых атак')
  }
  
  const result = []


  for (let i of special) {
    if (i.name === attack) {
      if(!i.description) {
        i.description = 'Описание недоступно';
      }
      result.push(i)
      return result
    }
  }
}
