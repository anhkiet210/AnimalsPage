import axios from "axios"
import { createDispatchHook } from "react-redux"
import postSlice from "../../redux/postSlice"
import { setUserInfo } from "../../redux/userSlice";

export const getAllPost = (dispatch, setLoading) => {
    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await axios.get("http://localhost:5000/api/animals")
            const resData = await res.data
            dispatch(postSlice.actions.getAllPost(resData))
            // console.log(resData);
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            console.log(err);
        }
    }

    fetchData()
}

//get post  by id
export const getPostById = (id, setLoading, setPostUpdate) => {
    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`http://localhost:5000/api/animals/${id}`)
            const resData = await res.data
            console.log(resData);
            setPostUpdate(resData)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log(err);
        }
    }

    fetchData()
}

//get profile
export const getProfile = (token, setUser, setLoading) => {
    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios.get("http://localhost:5000/api/users/profile", {
                headers: {
                    x_authorization: token
                }
            })
            const resData = await res.data
            setUser(resData)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log(err);
        }
    }

    fetchData()
}