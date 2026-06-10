import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
// Use this below for Server Side Render/Translation (SSR)
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
// import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import MarketPrice from '~/components/Home/MarketPrice';
import Header from '~/components/Header';
import BannerSlider from '~/components/Home/BannerSlider';
import About from '~/components/Home/About';
import Feature from '~/components/Home/Feature';
import Benefit from '~/components/Home/Benefit';
import TopCoin from '~/components/Home/TopCoin';
import Testimonials from '~/components/Home/Testimonials';
import NewsEvent from '~/components/Home/NewsEvent';
import DownloadBanner from '~/components/Home/DownloadBanner';
import Corner from '~/components/Home/Corner';
import Footer from '~/components/Footer';
import FooterExtend from '~/components/Footer/FooterExtend';
import Notification from '~/components/Notification';
import brand from '~/public/text/brand';

function Landing(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.crypto.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Hidden lgDown>
          <MarketPrice />
        </Hidden>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={cx(classes.containerWrap, classes.containerFront)}>
          <section id="home">
            <BannerSlider />
          </section>
          <section id="about" className={classes.spaceTop}>
            <About />
          </section>
          <section id="feature" className={isTablet ? classes.spaceTop : classes.spaceTopShort}>
            <Feature />
          </section>
          <section id="benefit">
            <Benefit />
          </section>
          <section id="view-market" className={classes.spaceTop}>
            <TopCoin />
          </section>
          <section id="testimonials" className={classes.spaceTopShort}>
            <Testimonials />
          </section>
          <section id="news" className={classes.spaceTopShort}>
            <NewsEvent />
          </section>
          <DownloadBanner />
        </main>
        <FooterExtend withCounter>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
        <Hidden mdDown>
          <Corner />
        </Hidden>
        <Hidden lgDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;

// Use this below for Server Side Render/Translation (SSR)
export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
// const getStaticProps = makeStaticProps(['common']);
// export { getStaticPaths, getStaticProps };
