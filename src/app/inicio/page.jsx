import React, { Fragment } from 'react';
import { Question } from '@/components/Home';
import styles from './inicio.module.scss';
import { Box, Image } from "@chakra-ui/react";

const Inicio = () => {
  return (
    <Fragment>
      <Box bgGradient="linear(to-br, #000, #000048)" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div>

        </div>
        <div>
          <Box my={5}>
            <Image
              width={200}
              height={200}
              src={
                "https://res.cloudinary.com/dafsjo7al/image/upload/v1699408622/Screenshot_10_fpqnyo.png"
              }
              alt="Logo Quiero Pudrirme En Plata"
            />
          </Box>
        </div>
        <div>
          <Question />
        </div>
      </Box>
    </Fragment>
  )
}


export default Inicio