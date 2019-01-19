import PropTypes from 'prop-types';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout = props => {

    const {
        isBackground,
        isFooter
    } = props;

    return (
    <div className={`main-layout ${isBackground && 'main-layout--bg'}`}>
        <Navbar/>
        {props.children}
        {isFooter && <Footer />}
    </div>
    )
};

MainLayout.propTypes = {
    isBackground: PropTypes.bool
}
