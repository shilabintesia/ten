import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
<Container>
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/keep-learning-concept-letters-of-the-alphabet-on-a-chalk-board-drawn-picture-id1337381696?b=1&k=20&m=1337381696&s=170667a&w=0&h=hQc5cLMDFG3MobpC5Gt-GgKSlEP9H2KZFnONIhjEwfE="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.cae.net/wp-content/uploads/2015/11/consejos-sacar-maximo-partido-elearning.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bdmariners.org/wp-content/uploads/2021/10/learning.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Container>
  );
}

export default UncontrolledExample;