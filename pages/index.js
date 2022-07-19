import { getJsonData } from '../utils/tools';
import CarouselComp from '../components/UI/carousel';

const Home = ({ data }) => {

  return (
    <>
      <CarouselComp data={data.carousel} />

    </>
  )
}

export const getStaticProps = async () => {
  const data = await getJsonData();
  return {
    props: {
      data: data
    }
  }
}

export default Home;
