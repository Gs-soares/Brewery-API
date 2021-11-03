import { Container, Top, Bottom, CardContent, Line, TypeCard } from './styles';
import Link from 'next/link';

const colors = {
  micro: '#00bbf8',
  brewpub: '#ffc83d',
  regional: '#3660ff',
  contract: '#393939',
  large: '#FF8F00',
  nano: '#00E000',
  bar: '#EA00E6',
  closed: '#EA0000',
};

export default function Card(props) {
  return (
    <Link href={`/${props.id}`} onClick={() => console.log(props.id)}>
      <Container>
        <Top>
          <h1> {props.name} </h1>
          <CardContent>
            {props.street}
            <div>
              {props.city}
              {props.state} - {props.number}
            </div>
          </CardContent>
        </Top>

        <Bottom>
          <Line />
          <TypeCard>
            <div
              style={{
                backgroundColor: colors[props.brewery_type],
                color: props.brewery_type === 'brewpub' ? 'black' : 'white',
              }}
            >
              {props.brewery_type}
            </div>
          </TypeCard>
        </Bottom>
      </Container>
    </Link>
  );
}
