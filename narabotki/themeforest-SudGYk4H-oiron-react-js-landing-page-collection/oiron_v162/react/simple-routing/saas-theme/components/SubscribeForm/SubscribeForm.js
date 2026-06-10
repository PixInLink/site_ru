import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './subscribe-style';

function SubscribeForm() {
  const { classes: text } = useText();
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const [value, setValue] = useState('');
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <p className={text.subtitle2}>
          {t('blog_subscribe_desc')}
        </p>
        <div className={classes.form}>
          <form>
            <TextField
              variant="standard"
              className={classes.field}
              fullWidth
              placeholder={t('form_email')}
              onChange={(e) => handleChange(e)}
              value={value}
            />
            <Button variant="contained" color="primary" className={classes.btn}>
              <span>
                {t('blog_subscribe')}
              </span>
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SubscribeForm;
