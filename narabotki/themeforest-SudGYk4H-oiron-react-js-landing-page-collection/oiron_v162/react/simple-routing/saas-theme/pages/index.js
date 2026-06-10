import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Head from 'next/head';
import Hidden from '@mui/material/Hidden';
// Use this below for Server Side Render/Translation (SSR)
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
// // import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BannerSlider from '~/components/Home/BannerSlider';
import Counter from '~/components/Home/Counter';
import Feature from '~/components/Home/Feature';
import Integration from '~/components/Home/Integration';
import Testimonials from '~/components/Home/Testimonials';
import NewsEvent from '~/components/Home/NewsEvent';
import CallAction from '~/components/CallAction';
import SubscribeForm from '~/components/SubscribeForm';
import CompanyLogo from '~/components/CompanyLogo';
import Corner from '~/components/Home/Corner';
import Footer from '~/components/Footer';
import Notification from '~/components/Notification';
import brand from '~/public/text/brand';

function Landing(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.saas.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <BannerSlider />
          </section>
          <section>
            <CompanyLogo />
          </section>
          <section className={!isMobile ? classes.spaceTopShort : ''}>
            <Counter />
          </section>
          <section id="feature" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
            <Feature />
          </section>
          <section id="integration">
            <Integration />
          </section>
          <section id="testimonials" className={classes.spaceTopShort}>
            <Testimonials />
          </section>
          <section id="call-action">
            <CallAction />
          </section>
          <section id="blog" className={cx(classes.spaceTopShort, classes.spaceBottomShort)}>
            <NewsEvent />
          </section>
          <section className={classes.spaceTop}>
            <SubscribeForm />
          </section>
        </main>
        <Footer bg toggleDir={onToggleDir} />
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

// Use this below for Server Side Render/Translation (SSR)
export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
// // const getStaticProps = makeStaticProps(['common']);
// // export { getStaticPaths, getStaticProps };

export default Landing;
