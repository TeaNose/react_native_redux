export const doSomething = (type, user) => {
    let specificUser = {
      name: user.name,
      spmoves: user.spmoves,
      style: user.style,
      id: user.id,
      key: user.key
    }
    let userList = user.userList.splice(0)
    return {
      type,
      userPayload: specificUser,
      userListPayload: userList
    }
}
