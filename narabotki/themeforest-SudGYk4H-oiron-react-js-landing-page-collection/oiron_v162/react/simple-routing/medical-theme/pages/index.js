import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
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
import Facilities from '~/components/Home/Facilities';
import Speciality from '~/components/Home/Speciality';
import AskDoctors from '~/components/Home/AskDoctors';
import Testimonials from '~/components/Home/Testimonials';
import CallAction from '~/components/CallAction';
import Clinics from '~/components/Home/Clinics';
import Corner from '~/components/Home/Corner';
import Footer from '~/components/Footer';
import Notification from '~/components/Notification';
import brand from '~/public/text/brand';

function Landing(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.medical.name + ' - Home Page' }
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
          <section className={classes.spaceTop}>
            <Counter />
          </section>
          <section
            id="facility"
            className={classes.spaceTop}
          >
            <Facilities />
          </section>
          <section
            id="our-expertise"
            className={classes.spaceTop}
          >
            <Speciality />
          </section>
          <section
            id="ask-doctors"
            className={classes.spaceTop}
          >
            <AskDoctors />
          </section>
          <section
            id="testimonials"
            className={classes.spaceTopShort}
          >
            <Testimonials />
          </section>
          <div className={classes.spaceTopShort} id="call-to-action">
            <CallAction />
          </div>
          <div className={cx(classes.spaceTopShort, classes.spaceBottom)} id="clinics">
            <Clinics />
          </div>
        </main>
        <Hidden mdDown>
          <Corner />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
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
