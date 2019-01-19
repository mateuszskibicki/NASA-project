import PropTypes from 'prop-types';
import Router from 'next/router';
import NProgress from 'nprogress';

import { Navbar } from './Navbar';
import { Footer } from './Footer';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export const MainLayout = props => {

    const {
        isFooter
    } = props;

    return (
    <div className={`main-layout`}>
        <Navbar/>
        {props.children}
        {isFooter && <Footer />}
    </div>
    )
};

MainLayout.propTypes = {
    isFooter: PropTypes.bool
}
