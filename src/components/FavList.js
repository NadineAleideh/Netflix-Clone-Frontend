import { useState, useEffect } from 'react';
// import MemeList from './MemeList';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function FavList() {

    const posterUrl = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`;

    const [favArr, setFavArr] = useState([]);

    const getFavMovies = () => {
        const serverURL = `http://localhost:3001/getFavMovies`;
        fetch(serverURL)
            .then((response) => {
                response.json()
                    .then(data => {
                        setFavArr(data)
                        console.log(data)
                    })
            })
    }


    useEffect(() => {
        getFavMovies()
    }, [])


    return (
        <section  style={{ display: 'flex', flexDirection: 'row',margin: 'auto 200px'}}>
        <div style={{ width: '16rem' }}>
           
            {favArr.map(item => {
                return (
                    <Card style={{ width: '100%',margin: '50px auto' }} key={item.id}>
                        <Card.Img variant="top" src={posterUrl+item.poster_path} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                <p>{item.overview}</p>
                            </Card.Text>
                            <Card.Text>
                                <h6 style={{ margin: '3% 0 1.5% 0', display: 'inline-block' }}>Comment:</h6>
                                <p>{item.comment}</p>
                            </Card.Text>
                            <Button variant="danger" >Watch now</Button>
                        </Card.Body>
                    </Card>
                )
            })}

            
        </div>
        </section>
    )
}

export default FavList;