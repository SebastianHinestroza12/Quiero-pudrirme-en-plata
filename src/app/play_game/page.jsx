import React, { Fragment } from 'react';
import { Question } from '@/components/QuestionAnswer';
import styles from './inicio.module.scss';
import { Box, Flex } from "@chakra-ui/react";

const PlayGame = () => {
  return (
    <Fragment>
      <Flex bgGradient="linear(to-br, #000, #000048)" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Box width={'100%'} display={'flex'} justifyContent={'center'}>
          <Question />
        </Box>
      </Flex>
    </Fragment>
  )
}


export default PlayGame