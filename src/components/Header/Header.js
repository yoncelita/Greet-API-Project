import './Header.css';

export const Header = () => {
    return (
        <>
            <div className='logo-container'>
                <img src='/images/logo.png' alt='' />

            </div>
            <nav className="navbar">
                <div className="container">
                    <div>
                        <ul className="category-dropdown">
                            <li className="category">
                            </li>
                            <li className="category">
                            </li>
                            <li className="category">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}