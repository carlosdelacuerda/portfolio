import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Container from '@mui/material/Container';


const AppCarousel = () => {

const CarouselData = [
  {
    headerText: 'UI Kankuro',
    subText: null,
    image: './images/img01.jpg',
  },
  {
    headerText: 'UX MiDieta',
    subText: null,
    image: './images/img02.webp',
  },
  {
    headerText: 'UI Ruta Interactiva',
    subText: null,
    image: './images/img03.webp',
  },
  {
    headerText: 'UX MiDieta',
    subText: null,
    image: './images/img04.webp',
  },
  {
    headerText: 'UI DStudio',
    subText: null,
    image: './images/img06.webp',
  },
  {
    headerText: 'UI Drive Smart',
    subText: null,
    image: './images/img05.webp',
  },
  {
    headerText: 'UI DStudio',
    subText: null,
    image: './images/img07.webp',
  },
  {
    headerText: 'UI Home Finder',
    subText: null,
    image: './images/img08.webp',
  },
  {
    headerText: 'UI Take a walk',
    subText: null,
    image: './images/img09.webp',
  },
  {
    headerText: 'UI Pedagogía y salud',
    subText: null,
    image: './images/img10.webp',
  },
  {
    headerText: 'UI Somos Corazón',
    subText: null,
    image: './images/img11.webp',
  },
  {
    headerText: 'UI DriveSmart',
    subText: null,
    image: './images/img12.webp',
  },
  {
    headerText: 'UI WeAlert',
    subText: null,
    image: './images/img13.webp',
  }
]
  return (   
  <Container>
    <h1 className='title-section'>Portfolio</h1>
    <Carousel
                data={CarouselData}
                autoPlay={true}
                rightItem={<FaArrowRight />}
                leftItem={<FaArrowLeft />}
                animationDuration={3000}
                headerTextType="black"
                subTextType="white"
                size="normal"
              />
  </Container>
  )
}

export default AppCarousel