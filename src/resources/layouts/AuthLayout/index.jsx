import React from 'react'
import * as Styled from './styles';
import Logo from '../../images/logo/tripler-logo.svg';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function AuthLayout({ children }) {
    return (
        <React.Fragment>
            <Nav />
            <Styled.AuthContainer>
                <Styled.AuthWrapper>
                    {/* <Logo style={{'padding': '2em'}} width={"150px"} /> */}
                    {children}
                </Styled.AuthWrapper>
            </Styled.AuthContainer>
            <Footer/>
        </React.Fragment>
    )
}