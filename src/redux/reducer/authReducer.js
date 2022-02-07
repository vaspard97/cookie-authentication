export const authenticationReducer = (
	state = { success: null, loading: true },
	action
) => {
	switch (action.type) {
		case "FETCH_USER":
			return {
				...state,
				loading: true,
			};

		case "FETCH_USER_SUCCESS":
			return {
				...state,
				data: action.payload,
				success: true,
				loading: false,
			};
		case "FETCH_USER_ERROR":
			return {
				...state,
				success: false,
				loading: false,
			};
		case "SIGNIN":
			return {
				...state,
				data: null,
				success: false,
				loading: true,
			};

		case "SIGNIN_SUCCESS":
			return {
				...state,
				data: action.payload, //change later
				success: true,
				loading: false,
			};

		case "SIGNIN_ERROR":
			return {
				...state,
				data: action.payload,
				success: false,
				loading: false,
			};

		case "CLEAR_SIGNIN_ERROR":
			return {
				...state,
				data: null,
				success: false,
				loading: false,
			};

		case "SIGNOUT":
			return {
				...state,
				success: null,
				loading: true,
			};

		case "SIGNOUT_SUCCESS":
			return {
				...state,
				data: null,
				success: true,
				loading: false,
			};

		default:
			return state;
	}
};
