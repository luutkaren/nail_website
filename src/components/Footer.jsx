import React from 'react';
import {
    Container,
    Icon,
    Input,
    Button }
 from '@chakra-ui/react';
import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div className='text-center' color='white' bgColor='dark'>
            <Container className='p-4'>

                <section className=''>
                    <form action=''>
                        <Row className='d-flex justify-content-center'>
                            <Col size="auto">
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </Col>

                            <Col md='5' start='12'>
                                <Input placeholder='email' size='md' type='email' label='Email address' />
                            </Col>

                            <Col size="auto">
                                <Button rounded={ 'full' }
                                    size={ 'lg' } variant='outline'>
                                    Subscribe
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </section>

                <section className='mb-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                        voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                        sequi voluptate quas.
                    </p>
                </section>

                <section className=''>
                    <Row>
                        <Col lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        <Col lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        <Col lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        <Col lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>
            </Container>

            <div className='text-center p-3' style={ { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }>
                © 2020 Copyright:
                <a className='text-white' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div>
        </div>
    );
}

export default Footer;