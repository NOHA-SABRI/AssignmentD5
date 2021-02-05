export const studentDetails = (state = null, action) => {
    if (action.type === "STUDENT_DETAILS"){
    console.log('in reducer',action)
        return action.payload}
    return state
}