import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex, Heading, Center } from '@chakra-ui/react'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'

export default function SampleSection() {

  return (
    <Box className='intro'  bg='#007FA3'>
      <Container>
        <Flex direction={{sm: 'column' , base: 'column', lg: 'row-reverse'}} >
          <Flex direction='column' w={{lg: '50%', sm: '100%', base: '100%'}}  zIndex='10' p={{base: '10% 20px 55px' , lg: '10% 60px 55px 5px'}}>
            <Heading  as='i' w='280px' textAlign='start' {...texts.heading} >“We found the perfect place to stay”</Heading>
            <Text maxW='428px' pt='30px' {...texts.content}>Relaxed seaside villages, home to creative types and those drawn by the region’s wild nature, swell in warmer months when Aucklanders make a beeline to The Coromandel – long regarded as their summer playground. Everywhere from campsites to luxury lodges throw out the welcome mat for visitors or why not holiday like a local with a bach (Kiwi slang for holiday house) stay. <br/><br/> A short stroll from Pauanui Beach, the Grand Mercure Puka Park Resort is a place to rest your head surrounded by native forest. Choose from self-contained chalet, luxury safari tent or glamping accommodation at Slipper Island Resort. Check in to the laidback Admiralty Lodge in Whitianga or the Hahei Beach Resort for a prime waterfront position to wake to the sun rising over the sea.</Text>
          </Flex>

          <Flex  pos='relative' w={{lg: '50%', sm: '100%', base: '100%'}} direction='column' align={{base: 'center', sm: 'center', lg: 'end'}} p={{lg: '6% 50px 10px 0px ',base: '6% 0px 0px 0px',  sm: '6% 0px 0px 0px'}}>
            <Figure >
              <Img dimension='709x479'  w={{base: 'full'}}  fit='cover' alt='sample alt' src='/Images/Hahei Blowhole .jpeg' />
            </Figure>
          
            <Figure pt={6}>
              <Img dimension='709x574' w='100%'  maxW={{base: '242px', lg:'420px'}} fit='cover' alt='another image' src='/Images/Puka Park 3.jpeg' />
            </Figure>
          </Flex>
        </Flex>
        
        <Flex mt={{base: '0px', sm: '0px', lg: '-4%'}}  direction={{sm: 'column' , base: 'column', lg: 'row'}} >
          
          <Flex  direction='column' align={{base: 'start', lg: 'end'}}   w={{lg: '50%', sm: '100%', base: '100%'}} pos='relative' zIndex='10' p={{base: '15% 20px 55px', sm:'15% 20px 55px', lg: '15% 60px 55px 0px'}}>
            <Heading as='i' w={{base: '300px', lg: '400px'}}  textAlign={{base:'start', lg: 'end'}} pl={{base: '0px', lg: '30px'}} {...texts.heading} >“This was one experience I’ll never forget”</Heading>
            <Text pt='30px' maxW='400px'  {...texts.content}>Can you even say you’ve visited The Coromandel without hiring a spade and digging out your own spa bath at Hot Water Beach at low tide? Soaking in warm water sourced from underground thermal springs doesn’t get any better. <br/><br/> Or why not take a tour of New Zealand’s spectacular southern night sky, hot drink in hand? Learn how stars and planets move and how Māori and Polynesian voyagers navigated across the Pacific Ocean in a fascinating astronomy tour overlooking the dark night sky of the village of Kūaotunu.</Text>
          </Flex>

          <Flex w={{lg: '50%', sm: '100%', base: '100%'}} direction='column' align='start'  p={{base: '0% 20px 55px' , lg: '0% 60px 55px 5px'}}>
            <Figure >
              <Img dimension='709x479' w={{base: '100%'}} maxW='560px' fit='cover' alt='sample alt' src='/Images/The Lost Spring.jpeg' />
            </Figure>
            <Figure pt={6}>
              <Img dimension='709x574' w={{base: '242px', lg: '300px'}} fit='contain' alt='another image' src='/Images/Pahi3K3A7620.jpeg' />
            </Figure>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

// font styles
const texts = {
  heading: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'medium',
    
    fontSize: {base: '18px', sm: '30px', d: '30px', lg: '30px'},
    lineHeight: {base: '28px', d: '50px'},
  },
  content: {
    fontFamily: 'body',
    fontWeight: 'regular',
    color: 'white',
    fontSize: {base: '17px', lg: '16px'},
    lineHeight: {base: '30px', lg: '29px'}
  }
}