import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Container, Content, DropDown, Loading, ContainerLoading } from './styles'
import Card from '../../components/Card'
import api from '../../services/api'


const typesValues = [
    '',
    'micro',
    'brewpub',
    'contract',
    'regional'
]

export default function BreweryHome(){

    const [breweries, setBreweries] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        api.get(`breweries?by_type=${selectedType}`).then(response => {
            setBreweries(response.data);
            setIsLoading(false);
        })
    }, [selectedType]);

    return(
        <Container>
            <p>
                Filtro: 
                <DropDown placeholder='selecione um tipo' onChange={(tipo) => setSelectedType(tipo.target.value)}>
                    {typesValues.map(type => (
                        <>
                        <option value="" disabled selected hidden>Please Choose...</option>
                        <option value={type}>{type}</option>
                        </>
                    ))}
                </DropDown>
            </p>

            {isLoading ? (
                <ContainerLoading>
                    <Loading />
                </ContainerLoading>
            ) : (
                <Content>
                    {breweries.map(brewerie => (
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
        </Container>
    )
}