import styles from './Navigation.module.css'
function Navigation() {
    console.log(styles);
    
    return (
        <>
            <nav className={`${styles.navbar}`}>
                <div className="brand-logo">
                    <img src='../public/brand_logo.png'></img>
                </div>

                <ul>
                    <li href='#'>Menu</li>
                    <li href='#'>Location</li>
                    <li href='#'>About</li>
                    <li href='#'>Contact</li>
                </ul>

                <button className='login-btn'>Login</button>
            </nav>
        </>
    )
}

export default Navigation;