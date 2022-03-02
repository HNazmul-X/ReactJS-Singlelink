import Layout from '../Layout/Layout'
import "../styles/global/bootstrap.min.css"
import "../styles/global/NavbarSidebar.css"
import "../styles/global/theme_custom.css"
import "../styles/global/feather.css"
import "../styles/global/slick/slick.min.css"
import "../styles/global/slick/slick-theme.min.css"

function MyApp({ Component, pageProps }) {
  
  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp
