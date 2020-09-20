import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import MoonLoader from 'react-spinners/MoonLoader'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import {setLoadingStatus} from 'duck/actions/process'
import {Client, PrismicLang, customLink} from 'helpers/util'
import Slider from "react-slick"
import {makeStyles, useTheme} from '@material-ui/styles'
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Row,
  HolderProvider,
  CardImg,
} from 'components'
import { scBase, scColor } from 'styles/sc-jss-components/_variables'
import { cssBreakpoint } from 'styles/sc-jss-components'

const Announcements = () => {
  const scVar = {
    stickyFontBase: 24,
    ...scBase(),
    ...scColor(),
    ...cssBreakpoint(),
  }
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      '& .card-header': {
        borderTopLeftRadius: `${4 / scVar.rootFontBase}rem`,
        borderTopRightRadius: `${4 / scVar.rootFontBase}rem`,
      },
      '& .slick-slide': {
        padding: `${15 / scVar.rootFontBase}rem`,
      },
      '& .inner': {
        padding: `0 ${15 / scVar.rootFontBase}rem`,
        height: `${330 / scVar.rootFontBase}rem`,
        color: scVar.textContent,
        overflowY: 'auto',
      },
      '& .sticky-indicator': {
        position: 'absolute',
        top: `${8 / scVar.stickyFontBase}em`,
        fontSize: `${scVar.stickyFontBase / scVar.rootFontBase}rem`,
        left: `${7 / scVar.stickyFontBase}em`,
        color: '#BB3B63',
      },
      '& .text-content': {
        width: '100%',
        borderLeft: `1px solid ${scVar.borderColor}`,
      },
      '& .text-content a': {
        textDecoration: 'underline',
      },
      [theme.breakpoints.down('sm')]: {
        '& .sc-card__full-row': {
          marginLeft:`${-15 / scVar.rootFontBase}rem`,
          marginRight:`${-15 / scVar.rootFontBase}rem`,
        },
      },
    },
  })
  const classes = useStyles()
  const isLoading = useSelector(({process}) => process.get('isLoading'))
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(true)
  const [announcements, setAnnouncements] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.query(
          Prismic.Predicates.dateAfter('my.consultant-portal-announcemen.finish_date', new Date()),
          {
            ...PrismicLang,
            orderings : '[my.consultant-portal-announcemen.start_date desc]',
          },
        )
        if (response.results.length > 0) {
          setAnnouncements(response.results)
          dispatch(setLoadingStatus(false))
        } else {
          console.warn('consultant-portal-announcement document was not found. Make sure it exists in your Prismic repository')
          dispatch(setLoadingStatus(false))
        }
      } catch (error) {
        console.log(error)
        dispatch(setLoadingStatus(false))
      }
    }

    dispatch(setLoadingStatus(true))
    fetchData()
  
  }, [])

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  var announcementSlider = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: scVar.breakpoints.values.xl,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: scVar.breakpoints.values.md,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
  }

  return (
    <Card className={`${classes.root} sc-card mb-3 pt-0`} color="info" type="border">
      <CardHeader
        className="sc-card__full-row bg-info text-white sc-collapse-menu d-flex align-items-center justify-content-between sc-sfui-text-semibold"
        style={{ cursor: 'pointer' }}
        onClick={toggle}
      >
        <span className="sc-collapse-label">Announcements</span>
        <i className={`
            sc-collapse-arrow
            ${isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}
          `}
        />
      </CardHeader>
      <Collapse className="sc-card__full-row" isOpen={isOpen}>
        <CardBody>
          {
            isLoading ? (
              <div className="d-flex justify-content-center mt-5">
                <MoonLoader size={75} color={'#de8b6d'} loading={isLoading} />
              </div>
            ) :
            announcements ? (
              <Slider className="mb-3" {...announcementSlider}>
                {announcements.map((announcement, index) => {
                  const data = announcement.data
                  const title = data.title[0].text
                  const imgUrl = data.image.url
                  const description = data.description
                  return (
                    <div className="inner" key={index}>
                      { data.is_sticky ? (
                        <i className="fa fa-bookmark sticky-indicator" aria-hidden="true"></i>
                      ) : null }
                      { imgUrl ? (
                        <Row>
                          <HolderProvider.Icon className="mb-2" iconChar="" size={32}>
                            <CardImg
                              className="img-fluid mb-2"
                              src={ imgUrl }
                              alt={ title }
                            />
                          </HolderProvider.Icon>
                        </Row>
                      ) : null }
                      <Row>
                        <div className="text-content pl-3">
                          {
                            title ? (
                              <h2 className="sc-heading">{ title }</h2>
                            ) : null
                          }
                          <p>{ data.start_date }</p>
                          {
                            description ? (
                              <RichText
                                render={description}
                                serializeHyperlink={customLink}
                              />
                            ) : null
                          }
                        </div>
                      </Row>
                    </div>
                  )
                })}
              </Slider>
            ) : (
              <p className="mt-5 text-center">
                Announcements not found.
              </p>
            )
          }
        </CardBody>
      </Collapse>
    </Card>
  )

}

export default Announcements
