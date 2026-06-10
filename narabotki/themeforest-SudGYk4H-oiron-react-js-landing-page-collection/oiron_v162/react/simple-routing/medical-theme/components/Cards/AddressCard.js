import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import LocationIcon from '@mui/icons-material/LocationOn';
import { pink } from '@mui/material/colors';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './address-card-style';

function AddressCard(props) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const {
    img, name, phone,
    email, address, link,
  } = props;

  return (
    <Card className={classes.addressCard}>
      <div className={classes.paper}>
        <figure>
          <img src={img} alt="clinic" />
        </figure>
        <div className={classes.detailInfo}>
          <Box mb={3}>
            <h6 className={text.subtitle2}>
              {name}
            </h6>
          </Box>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <Box display="flex">
                <PhoneIcon className={classes.icon} color="primary" />
                {phone}
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Hidden smDown>
                <Box display="flex">
                  <EmailIcon className={classes.icon} color="secondary" />
                  {email}
                </Box>
              </Hidden>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex">
                <LocationIcon className={classes.icon} style={{ color: pink[500] }} />
                <Typography noWrap>{address}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Button
              href={link}
              variant="outlined"
              color="secondary"
              fullWidth
              size="small"
              className={classes.btn}
            >
              {t('header_contact')}
            </Button>
          </Hidden>
        </div>
        <ButtonBase href={link} className={classes.mobileLink} />
      </div>
    </Card>
  );
}

AddressCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  link: PropTypes.string,

};

AddressCard.defaultProps = {
  link: '#'
};

export default AddressCard;
