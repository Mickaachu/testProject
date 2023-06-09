import React from 'react';
//chakra
import { ChakraProvider } from '@chakra-ui/react'
//
import customTheme from 'theme';
import GlobalCss from 'theme/components/GlobalCss';
import GuideLines from './GuideLines';
export default function Layout({children}) {

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalCss />
     

      <main>
        {children}
      </main>
    </ChakraProvider>

  )
}
