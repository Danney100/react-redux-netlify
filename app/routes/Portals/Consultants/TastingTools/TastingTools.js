import React, {useContext, useEffect} from 'react'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Container} from 'components'
import TastingToolCard from './components/TastingToolCard'

import AppContext from 'components/App/AppContext'

import {cssHeading, cssHeadingUpSm, cssCard, cssCardUpMd} from 'styles/sc-jss-components'

export const TastingTools = () => {
  const theme = useTheme()
  const useStyles = makeStyles({
    root: {
      ...cssHeading(),
      ...cssCard(),
      [theme.breakpoints.up('sm')]: {
        ...cssHeadingUpSm(),
      },
      [theme.breakpoints.up('md')]: {
        ...cssCardUpMd(),
      },
    },
  })
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Tastings > Tasting Tools')
  }, [])

  return (
    <div className={classes.root}>
      <div className="sc-heading-bar d-flex mt-3">
        <h1 className="sc-heading">Tasting Tools</h1>
      </div>
      <TastingToolCard />
    </div>
  )
}

export default TastingTools
