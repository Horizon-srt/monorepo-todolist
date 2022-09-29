import type { NextPage } from 'next'
import { TitleHead } from '../src/components/TitleHead'
import { Content } from '../src/Content'

const Home: NextPage = () => {
  return (
    <>
      <TitleHead />
      <Content />
    </>
  )
}

export default Home
