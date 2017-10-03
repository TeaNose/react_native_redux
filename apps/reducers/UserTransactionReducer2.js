export default function (state = {}, action){
  state = action

  switch(action.type){
    case 'EDIT_USER':
      alert("MASUK REDUCER 2")

      return {

      }
    default:
      return state
    }
  return state
}
