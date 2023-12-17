'use client'

import React, { useEffect, useState } from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { OptionResponse } from '../OptionResponse';
import styles from './home.module.scss';
import axios from '../../util/axios'

export const Question = () => {

  const [questions, setQuestions] = useState([])
  const letter = ['A', 'B', 'C', 'D'];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('/questions/Easy');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error al obtener las preguntas:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <VStack align="start" spacing={4} p={4} borderRadius="lg">
      <Flex
        borderRadius="xl"
        p={6}
        borderBottomWidth="4px"
        borderBottomColor="black.800"
        bg={'#000'}
      >
        <Box fontSize="xl" fontWeight="bold" mb={4}>
          {questions.question}
        </Box>
      </Flex>

      <Box className={styles.option_response}>
        {questions.options_answer?.map((option, index) => (
          <OptionResponse key={index} option={option} letter={letter[index]} />
        ))}
      </Box>
    </VStack>
  );
};
