/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => App,
                enhanceComponent: (Component) => Component,
            });

        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html lang="en" className="">
                <Head />
                <body className="fixed-bottom-bar">
                    <Main />
                    <script src="/Assets/js/jquery.min.js"></script>
                    <script src="/Assets/js/bootstrap.bundle.min.js"></script>
                    <script src="/Assets/js/slick.min.js" ></script>
                    <script src="/Assets/js/hc-offcanvas-nav.js"></script>
                    <script src="/Assets/js/osahan.js"></script>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
