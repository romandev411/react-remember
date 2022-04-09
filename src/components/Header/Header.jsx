import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>Components</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/form-tab'}>form</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/form-tab/login'}>Log in</NavLink>
                    </li>
                </ul>


            </nav>
        </header>
    )
}