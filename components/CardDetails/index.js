import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Container, Content, Detail, Voltar } from './styles';

export default function Details(props) {
  return (
    <Container>
      <Link href="/">
        <Voltar>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Voltar</span>
        </Voltar>
      </Link>
      <Content>
        <Detail>
          <h1>{props.name}</h1>
          <p>Type: {props.brewery_type}</p>
          <p>Street: {props.street}</p>
          <p>City: {props.city}</p>
          <p>State: {props.state}</p>
          <p>Postal code: {props.postal_code}</p>
          <p>Country: {props.country}</p>
          <p>
            Website: <span> {props.website}</span>
          </p>
          <p>Phone: {props.phone}</p>
          <p>
            Open in maps: <span> {props.maps_lat} </span>,
            <span>{props.maps_long}</span>
          </p>
        </Detail>
      </Content>
    </Container>
  );
}
