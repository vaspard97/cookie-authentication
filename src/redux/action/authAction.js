import * as api from "../../API";

export const fetchUser = () => async (dispatch) => {
	dispatch({ type: "FETCH_USER" });
	try {
		const { data } = await api.getCurrentUser();
		console.log(data);
		dispatch({ type: "FETCH_USER_SUCCESS", payload: data });
	} catch (error) {
		dispatch({ type: "FETCH_USER_ERROR" });
		console.log(error);
	}
};

export const signIn = (formData, navigate) => async (dispatch) => {
	dispatch({ type: "SIGNIN" });
	try {
		const { data } = await api.signInUser(formData);
		console.log(data);
		dispatch({ type: "SIGNIN_SUCCESS", payload: data });
		navigate("/dashboard");
	} catch (error) {
		console.log(error);
		dispatch({ type: "SIGNIN_ERROR", payload: error.response.data.message });

		setTimeout(() => {
			dispatch({
				type: "CLEAR_SIGNIN_ERROR",
			});
		}, 3000);
	}
};

export const signOut = (navigate) => async (dispatch) => {
	dispatch({ type: "SIGNOUT" });
	try {
		await api.signOutUser();
		dispatch({ type: "SIGNOUT_SUCCESS" });
		navigate("/");
	} catch (error) {
		console.log(error);
	}
};
