import React from 'react';
import { Question } from '@/components/QuestionAnswer';
import { WildCard } from '@/components/Wildcard';
import { Pepicons5050 } from '@/util/IconComponents/Pepicons5050'
import { PepiconsPrintPeople } from '@/util/IconComponents/PepiconsPrintPeople'
import { IcBaselineChangeCircle } from '@/util/IconComponents/IcBaselineChangeCircle'
import { StreamlineEmojisTelephone } from '@/util/IconComponents/StreamlineEmojisTelephone'
import { Box, Flex } from "@chakra-ui/react";
import { Timer } from '@/components/Timer';
// import styles from './inicio.module.scss';

const PlayGame = () => {

  const arrayWildcard = [
    { id: 1, name: "50:50", component: <Pepicons5050 /> },
    { id: 2, name: "Público", component: <PepiconsPrintPeople /> },
    { id: 3, name: "Cambiar Pregunta", component: <IcBaselineChangeCircle /> },
    { id: 4, name: "Llamada a un amigo", component: <StreamlineEmojisTelephone /> },
  ];


  return (
    <Flex style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '1rem 3rem' }}>
      <Box
        width={'100%'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Timer />

        <Box display={'flex'}>
          {
            arrayWildcard.map((wildc) => (
              <WildCard key={wildc.id} name={wildc.name} urlIcon={wildc.component} />
            ))
          }
        </Box>
      </Box>
      <Box width={'100%'} display={'flex'} justifyContent={'center'}>
        <Question />
      </Box>
    </Flex>
  )
}


export default PlayGame