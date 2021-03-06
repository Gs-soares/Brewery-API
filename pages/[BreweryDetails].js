import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import api from '../services/api';
import CardDetails from '../components/CardDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BreweryDetails() {
  const router = useRouter();
  const [brewerie, setBrewerie] = useState({});

  useEffect(() => {
    api.get(`breweries/${router.query.BreweryDetails}`).then((response) => {
      setBrewerie(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <CardDetails
        id={brewerie.id}
        name={brewerie.name}
        brewery_type={brewerie.brewery_type}
        street={brewerie.street}
        city={brewerie.city}
        state={brewerie.state}
        postal_code={brewerie.postal_code}
        country={brewerie.country}
        website={brewerie.website_url}
        phone={brewerie.phone}
        maps_lat={brewerie.latitude}
        maps_long={brewerie.longitude}
      />
      <Footer />
    </>
  );
}
