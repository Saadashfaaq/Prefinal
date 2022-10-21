const init_state = {
    fullName: "",
    username: "",
    email: "",
    password: "",
    profilepic: "assets/person/profile.jpg",
    backgroundpic: "assets/background/background.jpg",
    bio: "Hello My Friend!",
    city: "-",
    from: "-",
    relationship: "-",
    id: 0,
    errMsg:"",
    storageIsChecked: false,
}

export default (state = init_state, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return {...state, ...action.payload, storageIsChecked: true}
        case "USER_ERROR":
            return {...state, errMsg: action.payload}
        case "USER_LOGOUT":
            return {...init_state, storageIsChecked: true}
        case "CHECK_STORAGE":
            return {...state, storageIsChecked: true}
        case "REGISTER_ERROR":
            return {...state, errMsg: action.payload}
        default:
            return state;
    }
}