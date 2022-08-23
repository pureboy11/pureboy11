import Carousel from 'react-bootstrap/Carousel';

function Explorer() {

    return (
        <div className="contentArea">
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://188654906-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FxTjPznTD44a3IuB4apWZ%2Fuploads%2FT5Vl5bCVDBk7bjcHSDCF%2FMobile-Banner-(1600x480).jpg?alt=media&token=b5eeb095-92ee-4cea-8590-49c9339d6407"
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
                            src="https://188654906-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FxTjPznTD44a3IuB4apWZ%2Fuploads%2FT5Vl5bCVDBk7bjcHSDCF%2FMobile-Banner-(1600x480).jpg?alt=media&token=b5eeb095-92ee-4cea-8590-49c9339d6407"
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
                            src="https://188654906-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FxTjPznTD44a3IuB4apWZ%2Fuploads%2FT5Vl5bCVDBk7bjcHSDCF%2FMobile-Banner-(1600x480).jpg?alt=media&token=b5eeb095-92ee-4cea-8590-49c9339d6407"
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
            </div>
        </div>
    );
}

export default Explorer;
