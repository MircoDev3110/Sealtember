import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';

const Header : React.FC = () => {

    const mobileThreshold : number = 1000;
    const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

    const onWindowResize = () => {
        setWindowSize(window.innerWidth);
    }

    useEffect(() => {
        
        // On first loading
        onWindowResize();

    }, []);

    window.addEventListener('resize', onWindowResize);

    return (
        <>
            { windowSize && windowSize > mobileThreshold ? <DesktopHeader /> : <MobileHeader /> }
        </>
    );
}

const DesktopHeader = () => {

    return (

        <>
            <nav className='desktop-header'>
                <div className='header-content'>

                    <Link className='logo-container' to="/">
                        <img alt='logo' className='logo' src={logo} />
                    </Link>

                    <div className='page-links'>
                        <Link to="/">Home</Link>
                    </div>

                </div>
            </nav>
            <span className='desktop-header-placeholder' />
        </>

    );

}

const MobileHeader = () => {

    const [menuState, setMenuState] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuState(!menuState);
    }

    return (
        <>
            <nav className='mobile-header'>
                <div className='header-content'>

                    <span className="icon material-symbols-outlined" onClick={() => { toggleMenu(); }}>menu</span>

                    <Link className='logo-container' to="/">
                        <img alt='logo' className='logo' src={logo} />
                    </Link>

                    <div className={ 'menu-container ' + (menuState? 'open' : '') } >
                        <div className='menu-container-overlay' onClick={() => { toggleMenu() }}></div>
                        <div className='menu-container-popover'>

                            <div className='close-btn-container'>
                                <span onClick={() => { toggleMenu() }} className='close-icon material-symbols-outlined'>close</span>
                            </div>

                            <div className='menu-links'>
                                <Link className='menu-item' to='/'>Home</Link>
                            </div>

                        </div>
                    </div>

                </div>
            </nav>
            <span className='mobile-header-placeholder'></span>
        </>
    );
}

export default Header;