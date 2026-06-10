import React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import AddressCard from '../../Cards/AddressCard';
import useStyles from './clinics-style';

const clinicData = [
  {
    img: imgAPI.medical[37],
    name: 'Central Clinic',
    phone: '+123 456 78 91',
    email: 'hello@awrora.com',
    address: 'Lorem ipsum street no.14 Block A'
  },
  {
    img: imgAPI.medical[38],
    name: 'Dental Clinic',
    phone: '+123 456 78 91',
    email: 'hello@awrora.com',
    address: 'Lorem ipsum street Block C - Vestibullum Building'
  },
  {
    img: imgAPI.medical[39],
    name: 'Mother and Baby Care',
    phone: '+123 456 78 91',
    email: 'hello@awrora.com',
    address: 'Lorem ipsum street no.14 Block A'
  },
  {
    img: imgAPI.medical[40],
    name: 'Orthopedic Clinic',
    phone: '+123 456 78 91',
    email: 'hello@awrora.com',
    address: 'Lorem ipsum street Block C - Vestibullum Building'
  },
  {
    img: imgAPI.medical[41],
    name: 'Mother and Baby Care',
    phone: '+123 456 78 91',
    email: 'hello@awrora.com',
    address: 'Lorem ipsum street no.14 Block A'
  },
  {
    img: imgAPI.medical[42],
    name: 'Orthopedic Clinic',
    phone: '+123 456 78 91',
    email: 'hello@awrora.com',
    address: 'Lorem ipsum street Block C - Vestibullum Building'
  }
];

function Clinics() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation Function
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Box py={3} px={{ sm: 3 }}>
          <h4 className={cx(text.title, text.capitalize)}>
            {t('medical-landing.clinic_title')}
          </h4>
          <p className={text.subtitle2}>Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.</p>
        </Box>
        <Grid container spacing={3}>
          {clinicData.map((item, index) => (
            <Grid key={index.toString()} item md={6} xs={12}>
              <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={-50} delay={(index * 200)} duration={0.4}>
                <div>
                  <AddressCard
                    img={item.img}
                    name={item.name}
                    phone={item.phone}
                    email={item.email}
                    address={item.address}
                    link={link.medical.contactMap}
                  />
                </div>
              </ScrollAnimation>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Clinics;
