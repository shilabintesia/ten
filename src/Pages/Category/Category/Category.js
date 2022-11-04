import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
              <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="8">
                        <h2>This is Category has: {categoryNews?.length}Courses</h2>
                   {
                     categoryNews.map(news =><NewsSummaryCard
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

export default Category;