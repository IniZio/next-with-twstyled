import Head from 'next/head'
import { styled, css } from '@twstyled/core'

const Box = styled.div`
  @tailwind font-semibold;

  margin-top: 40px;
  margin-left: 40px;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`

const anotherClass = css`
  color: blue;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>With Linaria</title>
      </Head>
      <Box className={anotherClass}>Zero runtime CSS in JS</Box>
      <p tw="font-semibold text-3xl md:text-4xl lg:text-5xl not-italic">ABC</p>
    </>
  )
}
