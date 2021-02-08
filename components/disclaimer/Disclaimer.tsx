import { ContainerWrapper, PaperWrapper } from 'components'
import { Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(
  theme => ({
    disclaimer: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white
    }
  }),
  {
    name: 'Disclaimer'
  }
)

const Disclaimer = (): React.ReactElement => {
  const classes = useStyles()

  return (
    <PaperWrapper className={classes.disclaimer} square>
      <ContainerWrapper>
        <Typography gutterBottom variant="h6">
          IMPORTANT DISCLAIMER
        </Typography>
        <Typography>
          All content provided here in our website, hyperlinked sites,
          associated applications, forums, blogs, social media accounts and
          other platforms (“Site”) is for your general information only,
          procured from third party sources. We make no warranties of any kind
          in relation to our content, including but not limited to accuracy and
          updatedness. No part of the content that we provide constitutes
          financial advice, legal advice or any other form of advice meant for
          your specific reliance for any purpose. Any use or reliance on our
          content is solely at your own risk and discretion. You should conduct
          your own research, review, analyse and verify our content before
          relying on them. Trading is a highly risky activity that can lead to
          major losses, please therefore consult your financial advisor before
          making any decision. No content on our Site is meant to be a
          solicitation or offer.
        </Typography>
      </ContainerWrapper>
    </PaperWrapper>
  )
}

export { Disclaimer }
