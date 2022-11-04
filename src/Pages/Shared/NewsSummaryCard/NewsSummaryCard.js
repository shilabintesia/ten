import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    console.log(news);
    const { _id, title, author, details, image_url, rating, total_view } = news;
    
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img  variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details.slice(0,80)}
          </Card.Text>
          <Link to={`/news/${_id}`}>
          <Button variant="primary">Get Course</Button>
          </Link>
        </Card.Body>
      </Card>
    );
};

export default NewsSummaryCard;