import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { PDFDownloadLink, Page, Text, View,StyleSheet, Document, Image } from '@react-pdf/renderer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';

const News = () => {
    const news = useLoaderData();
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        image: {
            width: "20%",
            padding: 10
        },
        text: {
            fontSize: '12px',
            margin: '10px',
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    const MyDoc = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Image style={styles.image} src={image_url}></Image>
                    <Text>{title}</Text>
                    <Text  >{details}</Text>
                    {/* <Text>Price:${price}</Text> */}

                </View>

            </Page>
        </Document>
    );
    const { title, details, image_url, category_id } = news;
    return (

      
                    <Card>

<PDFDownloadLink document={<MyDoc />} fileName="detail.pdf">
     <Button className="" variant="primary">Download PDF</Button>

</PDFDownloadLink>
   <div >
 
   <Card.Img style={{width:'300px'}}  variant="top" src={image_url} />
  

   </div>
   <Card.Body>
       <Card.Title>{title}</Card.Title>
       <Card.Text>
           {details}
       </Card.Text>
       <Link to={`/news-categories/${category_id}`}>
           <Button variant="primary">All courses in this category</Button>
       </Link>
   </Card.Body>
</Card>
             
 
    );
};

export default News;