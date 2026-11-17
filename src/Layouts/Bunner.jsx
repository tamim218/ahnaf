
import React from 'react'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Bunner1 from '../assets/bunner.png'
import Flex from '../Components/Flex'

const Bunner = () => {
  return (
    <div className='py-16'>
      <Container>
        <Flex>
          <div className='w-full lg:w-1/2'>
            <Image src={Bunner1} alt="Newron Academy" />
          </div>

          <div className='w-full lg:w-1/2 px-6 flex flex-col justify-center'>
            <h1 className='text-4xl font-bold text-blue-950 mb-5'>
              THIS IS NEWRON ACADEMY
            </h1>

            <p className='text-lg text-gray-600 leading-8'>
              Newron Academy provides quality educational services for school and college students.
              We offer experienced teachers, personalized guidance, regular classes,
              special coaching, model tests, and academic support.
              Our goal is to improve students' knowledge, build confidence,
              and help them achieve excellent results.
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Bunner
