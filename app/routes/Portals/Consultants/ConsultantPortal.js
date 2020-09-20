import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Prismic from 'prismic-javascript'

import {Client, PrismicLang} from 'helpers/util'

import Slider from 'react-slick'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Container} from 'components'
import Announcements from './components/Announcements'

import AppContext from 'components/App/AppContext'

import {cssHeading, cssHeadingUpSm, cssCard, cssCardUpMd} from 'styles/sc-jss-components'
import {useDispatch} from 'react-redux'
import {setPortal} from 'duck/actions/process'

const ConsultantPortal = () => {
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

  const [banners, setBanners] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPortal(2))
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.query(
          Prismic.Predicates.at('document.type', 'consultant-portal-header-image'),
          {
            ...PrismicLang,
            orderings: '[document.last_publication_date desc]',
          },
        )
        if (response.results.length > 0) {
          setBanners(response.results)
        } else {
          console.warn(
            'consultant-portal-header-image document was not found. Make sure it exists in your Prismic repository',
          )
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

    setTitle('Consultant Portal')
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

  return (
    <Container fluid={true} className={classes.root}>
      <div className="sc-heading-bar d-flex mt-3">
        <h1 className="sc-heading">Consultant Portal</h1>
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
      <Announcements />
    </Container>
  )
}

export default ConsultantPortal
