import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap'
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <header>
                <Container>
                    <Navbar Variant="light">
                        <Navbar.Brand>
                            <Link href="/">
                                <img
                                    src="/images/logos/logo-img-2.png"
                                    width="100"
                                    height="100"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Link>
                        </Navbar.Brand>
                    </Navbar>
                </Container>
            </header>

        </>
    );
}

export default Header