import React from 'react'
import Nav from '../component/Nav.tsx'
import NavItem from '../component/NavItem.tsx'
import List from '../component/List.tsx'
import ListItem, { MovieType } from '../component/ListItem.tsx'
import { BackgroundImage, createRequire } from 'react-puppeteer'
export type DataType = {
  name: string
}
export type PropsType = {
  data: DataType
  movies: MovieType[]
}
const require = createRequire(import.meta.url)
/**
 *
 * @param param0
 * @returns
 */
export default function App({ data, movies }: PropsType) {
  return (
    <section className="flex flex-col">
      <BackgroundImage
        url={require('../../../assets/exp.png')}
        size={'100% auto'}
      >
        <Nav>
          <NavItem href="./music">New {data.name}</NavItem>
        </Nav>
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id} movie={movie} />
          ))}
        </List>
      </BackgroundImage>
    </section>
  )
}
