import { useEffect, useState } from 'react';
import {
  Container,
  Content,
  DropDown,
  Loading,
  ContainerLoading,
  PageButtons,
  StyleButton,
} from './styles';

import Card from '../Card';
import api from '../../services/api';

interface IStypeFilter {
  filterValue: string;
  desc: string;
}

const FilterValue: IStypeFilter[] = [
  {
    filterValue: '',
    desc: 'Todos'
  },
  {
    filterValue: 'micro',
    desc: 'Micro'
  },
  {
    filterValue: 'nano',
    desc: 'Nano'
  },
  {
    filterValue: 'regional',
    desc: 'Regional'
  },
  {
    filterValue: 'brewpub',
    desc: 'Brewpub'
  },
  {
    filterValue: 'large',
    desc: 'Large'
  },
  {
    filterValue: 'planning',
    desc: 'Planning'
  },
  {
    filterValue: 'bar',
    desc: 'Bar'
  },
  {
    filterValue: 'contract',
    desc: 'Contract'
  },
  {
    filterValue: 'closed',
    desc: 'Closed'
  },
];

export default function BreweryHome() {
  const [breweries, setBreweries] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setSelectedPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    let queryString = [];

    if (selectedType) {
      queryString.push(`by_type=${selectedType}`);
    }
    if (pages) {
      queryString.push(`page=${pages}`);
    }

    api.get(`breweries?${queryString.join('&')}`).then((response) => {
      setBreweries(response.data);
      setIsLoading(false);
    });
  }, [selectedType, pages]);

  return (
    <Container>
      <p>
        Filtro:
        <DropDown onChange={(tipo) => setSelectedType(tipo.target.value)}>  
          {FilterValue.map((tipo) => (
              <option value={tipo.filterValue}>{tipo.desc}</option>
            ))}
        </DropDown>
      </p>

      {isLoading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <Content>
          {breweries.map((brewerie) => (
            <Card
              id={brewerie.id}
              name={brewerie.name}
              city={brewerie.city}
              state={brewerie.state}
              street={brewerie.street}
              number={brewerie.postal_code}
              brewery_type={brewerie.brewery_type}
            />
          ))}
        </Content>
      )}

      <PageButtons>
        <StyleButton>
          <button onClick={() => setSelectedPage(1)}>1</button>
          <button onClick={() => setSelectedPage(2)}>2</button>
          <button onClick={() => setSelectedPage(3)}>3</button>
        </StyleButton>
      </PageButtons>
    </Container>
  );
}
