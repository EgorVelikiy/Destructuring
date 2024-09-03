export default function getSpecialAttacks(obj) {
  const {special} = obj

  if (!special) {
    throw new Error('У персонажа нет особых атак')
  }
  
  const result = []

  for (let i of special) {
    if(!i.description) {
      i.description = 'Описание недоступно'
    }
    result.push(i)
  }
  return result
}
