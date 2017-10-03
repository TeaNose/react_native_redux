export default function (state = {}, action){
  state = action

  switch(action.type){
    case 'EDIT_USER':
      let updatedUser = action.userPayload
      let id = updatedUser.id

      let oldUserList = action.userListPayload
      let newUserList = oldUserList.slice(0)

      newUserList[id-1] = updatedUser

      return {
        ...state,
        userListPayload: newUserList,
        userPayload: updatedUser
      }
    case 'REMOVE_USER':
      let updatedUser2 = action.userPayload
      let id2 = updatedUser2.id

      let oldUserList2 = action.userListPayload
      let newUserList2 = oldUserList2.slice(0)
      newUserList2.splice(id2-1, 1)
      return{
        ...state,
        userListPayload: newUserList2
      }
    default:
      return state
    }
  return state
}
