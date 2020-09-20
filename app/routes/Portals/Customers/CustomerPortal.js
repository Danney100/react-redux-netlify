import React, {useContext, useEffect, useState} from 'react'
import {cssHeading, cssHeadingUpSm, cssCard, cssCardUpMd} from 'styles/sc-jss-components'
import {makeStyles, useTheme} from '@material-ui/styles'
import Slider from 'react-slick'
import {Link} from 'react-router-dom'
import Prismic from 'prismic-javascript'
import {Client, PrismicLang} from 'helpers/util'

import {setPortal} from 'duck/actions/process'
import AppContext from 'components/App/AppContext'
import {useDispatch} from 'react-redux'
import {Container} from 'components'

const CustomerPortal = () => {
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
  const dispatch = useDispatch()
  const [banners, setBanners] = useState(null)

  const BannerLink = (props) => {
    return props.type === 'Web' ? (
      <a key={props.index} href={props.url} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    ) : (
      <Link to={props.url} key={props.index}>
        {props.children}
      </Link>
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.query(
          Prismic.Predicates.at('document.type', 'customer-portal-header-image'),
          {
            ...PrismicLang,
            orderings: '[document.last_publication_date desc]',
          },
        )
        if (response.results.length > 0) {
          setBanners(response.results)
        } else {
          console.warn(
            'customer-portal-header-image document was not found. Make sure it exists in your Prismic repository',
          )
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

    setTitle('Customer Portal')
  }, [])

  var bannerSlider = {
    dots: false,
    arrows: false,
    autoplay: true,
    draggable: false,
    autoplaySpeed: 10000,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  useEffect(() => {
    dispatch(setPortal(3))
  }, [])

  return (
    <Container fluid={true} className={classes.root}>
      <div className="sc-heading-bar d-flex mt-3">
        <h1 className="sc-heading">Customer Portal</h1>
      </div>
      {banners ? (
        <Slider {...bannerSlider}>
          {banners.map((banner, index) => {
            const data = banner.data
            return (
              <BannerLink key={index} type={data.button_link.link_type} url={data.button_link.url}>
                <img width="100%" src={data.header_image.url} alt={data.title[0].text} />
              </BannerLink>
            )
          })}
        </Slider>
      ) : null}
    </Container>
  )
}

export default CustomerPortal
