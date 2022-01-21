import { publicRequest } from "../requestMethods"
import { loginSuccess, loginError, loginStart } from "./userRedux";

export const login = async (dispatch, user) => {

    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch {
        dispatch(loginError())
    }
}