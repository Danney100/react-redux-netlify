import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import MoonLoader from 'react-spinners/MoonLoader'
import Prismic from 'prismic-javascript'

import {setLoadingStatus} from 'duck/actions/process'
import {Client, PrismicLang} from 'helpers/util'
import {makeStyles} from '@material-ui/styles'
import {Row, Col} from 'components'

import Header from './Header'
import Player from './Player'
import {useContext} from 'react'
import AppContext from 'components/App/AppContext'

const ImagesResults = () => {
  const useStyles = makeStyles({
    root: {
      '& .card': {
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 3px 15px 0 rgba(195, 185, 185, 0.12)',
      },
      '& .r-player > div > iframe': {
        borderRadius: '5px',
      },
      '& .title': {
        fontFamily: 'Oswald-Semibold',
        fontWeight: 'bold',
      },
    },
  })
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context
  const isLoading = useSelector(({process}) => process.get('isLoading'))

  const dispatch = useDispatch()
  
  const [videos, setVideos] = useState(null)
  const [filters, setFilter] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.query(
          Prismic.Predicates.at('document.type', 'video-page-content'),
          {
            ...PrismicLang,
            orderings : '[document.last_publication_date desc]',
          },
        )
        if (response.results.length > 0) {
          setVideos(response.results)
          setFilter(response.results)
          dispatch(setLoadingStatus(false))
        } else {
          console.warn('Video-Page-Content document was not found. Make sure it exists in your Prismic repository')
          dispatch(setLoadingStatus(false))
          setNotFound(true)
        }
      } catch (error) {
        console.log(error)
        dispatch(setLoadingStatus(false))
        setNotFound(true)
      }
    }

    dispatch(setLoadingStatus(true))
    fetchData()
  
    setTitle('Videos > Vimeo')
  }, [])

  const handleSearch = e => {
    let currentVideos = []
    let newVideos = []

    if (e.target.value !== '') {
      currentVideos = filters
      newVideos = currentVideos.filter(video => {
        const ls = video.data.description[0].text.toLowerCase()
        const filter = e.target.value.toLowerCase()

        return ls.includes(filter)
      })
    } else {
      newVideos = videos
    }
    setFilter(newVideos)
  }

  return (
    <div className={`${classes.root} px-lg-0 px-3`}>
      <Header title="Videos" notFound={notFound} handleSearch={handleSearch}/>
      {
        isLoading ? (
          <div className="d-flex justify-content-center mt-5">
            <MoonLoader size={75} color={'#de8b6d'} loading={isLoading} />
          </div>
        ) :
        filters ? (
          <Row>
            {filters.map((video, index) => (
              <Col sm={6} lg={4} key={index}>
                <Player
                  url={video.data.url_to_the_video.url}
                  description={video.data.description[0].text}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <p className="mt-5 text-center">
           Videos not found.
         </p>
        )
      }
    </div>
  )
}

export default ImagesResults
