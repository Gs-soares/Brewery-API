import Link from 'next/link'

import { Container, Content, Detail } from "./styles"

export default function Details(props) {
    return (
        <Container>
            <Link href="/">Voltar</Link>
            <Content>
                <Detail>
                    <h1>{props.name}</h1>
                    <p>Type: {props.brewery_type}</p>
                    <p>Street: {props.street}</p>
                    <p>City: {props.city}</p>
                    <p>State: {props.state}</p>
                    <p>Postal code: {props.postal_code}</p>
                    <p>Country: {props.country}</p>
                    <p>Website: {props.website}</p>
                    <p>Phone: {props.phone}</p>
                    <p>Open in maps: {props.maps_lat}, {props.maps_long}</p>
                </Detail>
            </Content>
        </Container>
    )

}