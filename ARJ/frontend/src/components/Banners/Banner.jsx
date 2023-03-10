import React from 'react';
import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useDisclosure,
    Box,
    CloseButton,
    Button
  } from '@chakra-ui/react'


export const Banner = () => {
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: true })
  
    return isVisible ? (
        <div className='bg-indigo-600'>
      <Alert status='success' bg="indigo-600">
       
        <Box>
          <AlertTitle>
          <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </AlertTitle>
          <AlertDescription color={"white"} className="ml-10">
            
            We announced free posting of Remote Jobs
          </AlertDescription>
        </Box>
        <CloseButton
          alignSelf='flex-start'
          position='relative'
          top={-1}
          onClick={onClose}
          color="white"
        />
      </Alert>
      </div>
) : (
      null
    )
  }