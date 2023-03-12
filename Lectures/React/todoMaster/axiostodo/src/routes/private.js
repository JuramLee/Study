import { useAuth } from "contexts/auth";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import TokenService from "repository/TokenService";


function PrivateRoute() {

	const access_token = TokenService.getToken();
	const auth = useAuth();
	const navigate = useNavigate();
	const { pathName } = useLocation();
	/*
		react router dom
		navigate을 통해 전달된 state객체를 전달 받을 수 있고
		현재 주소의 url을 가지고 올 수 있음
		{
			...
			pathName: '/todo/',
			state: null
		}
	*/

	useEffect(() => {
		if(!auth.accessToken) {
			navigate('/', {
				state: {
					from: pathName,
				}
			// navigate로 이동 될 페이지에 데이터 전달
			// param으로 전달하는 방법도 있으나 그럴 필요가 없는 데이터
			// 상품번호와 같은 데이터는 필요. 해당 데이터로 백엔드에 요청하고 결과값이 달라지니까..
			// 사용자가 눈으로 확인할 수 있음
			});
		}
	}, [auth])

	return access_token ? <Outlet /> : <Navigate to={'/'} />
}

export default PrivateRoute;