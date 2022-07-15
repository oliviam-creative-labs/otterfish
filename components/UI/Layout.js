import Head from 'next/head'
import Header from '../navigation/Header';
import Link from 'next/link'

const Layout = (props) => {
    return (
    <>
        <Head>
            <title>Otterfish</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name="description" content="Lojong exercises for everyday practice" />
            <meta name='keywords' content='Lojong, meditation, mindfulness, Buddhism' />
            <meta name='author' content='Stackmetric' />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="container">
            {props.children}
        </div>
    </>
    )
}

export default Layout;