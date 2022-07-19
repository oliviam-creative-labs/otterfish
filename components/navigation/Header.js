import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap'
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <header>
                <Container>
                    <Navbar variant="light" >
                        <Navbar.Brand>
                            <Link href="/">
                                <img
                                    src="/images/logos/logo-img-3.png"
                                    width="150"
                                    height="150"
                                    className="d-inline-block align-top"
                                    alt="Ottherfish logo"
                                />
                            </Link>
                        </Navbar.Brand>
                        <Nav>
                            <Link href="/" passHref>
                                <Nav.Link>OTTERFISH</Nav.Link>
                            </Link>

                            <Link href="/bio" passHref>
                                <Nav.Link>About Us</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar>
                </Container>
            </header>

        </>
    );
}

export default Header