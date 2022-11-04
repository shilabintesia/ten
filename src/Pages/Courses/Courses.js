import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';


const Courses = () => {

    const allNews = useLoaderData();
    return (
        <div>
            <h2>Max Larn: {allNews.length}</h2>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="8">
                    {
                           allNews.map(news => <NewsSummaryCard
                                 key={news._id}
                            news={news}
                          ></NewsSummaryCard>)
                     }
                    </Col>
                   
                </Row>
            </Container>
           
        </div>
    );
};


export default Courses;