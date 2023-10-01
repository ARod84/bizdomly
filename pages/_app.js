import '../styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import PageProvider from '../context/PageProvider';

config.autoAddCss = false

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <PageProvider>
                <Component {...pageProps} />
            </PageProvider>
        </ThemeProvider>
    );
}