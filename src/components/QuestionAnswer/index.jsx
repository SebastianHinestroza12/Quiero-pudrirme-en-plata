'use client'

import React, { useEffect, useState } from 'react';
import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import { OptionResponse } from '../OptionResponse';
import styles from './question.module.scss';
import axios from '../../util/axios';

export const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedAnswerText, setSelectedAnswerText] = useState('');
  const letter = ['A', 'B', 'C', 'D'];

  const handleOptionClick = (option, index) => {
    setSelectedAnswer(index);
    setSelectedAnswerText(option);
  };

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
    <VStack
      className={styles.container_vstack}
      align="start"
      spacing={4}
      p={2}
      borderRadius="lg"
      bg={'white'}
      maxWidth={'50%'}
    >
      <Flex
        p={6}
        display={'flex'}
        flexDirection={'column'}
      >
        <Box fontSize="xl" fontWeight="bold" mb={4}
          borderBottomWidth="4px"
          padding={4}
          bg={'#000'}
          borderBottomColor="black.800"
          borderRadius="xl">
          <Text textAlign={'center'} onClick={() => play()}>
            {questions.question}
          </Text>
        </Box>

        <Box className={styles.option_response}>
          {questions.options_answer?.map((option, index) => (
            <Box
              key={index}
              className={styles.container_options}
              bg={selectedAnswer === index ? '#FFC720' : '#000'}
              onClick={() => handleOptionClick(option, index)}
            >
              <OptionResponse option={option} letter={letter[index]} />
            </Box>
          ))}
        </Box>
      </Flex>
    </VStack>
  );
};
