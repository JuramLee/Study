import { Link } from "react-router-dom";
import LoginForm from "./components/Form/Login";
import SignUpForm from "./components/Form/SignUp";

function HomePage() {
    let form = 'login';
    
    const onFormChange = (e) => {
        const {innerText} = e.target;
            form = innerText.toLowerCase();
            console.log(form);
        };
    

    return (
        <div>
            <header>
                <div onClick={onFormChange}>Login</div>
                <div onClick={onFormChange}>Sign</div>
            </header>
            {form === 'login' ? <LoginForm/> : <SignUpForm/>}
            <a href="/todo">일반 투두페이지로 이동</a>
            <Link to="/todo">라우터 투두페이지로 이동</Link>
        </div>

    )
}

export default HomePage;