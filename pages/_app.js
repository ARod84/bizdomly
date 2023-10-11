import '../styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import PageProvider from '../context/PageProvider';

config.autoAddCss = false

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <ApolloProvider client={client}>
                <PageProvider>
                    <Component {...pageProps} />
                </PageProvider>
            </ApolloProvider>
        </ThemeProvider>
    );
}