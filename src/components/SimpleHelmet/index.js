import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

const data = {
  homePage: {
    title: 'Throttl | New and used motorcycles for sale',
    description: 'Check out motorcycles for sale. New and used Cafe Racers, Bobbers, Choppers, Cruisers from BMW, Triumph, Honda, Yamaha, Ducati, Harley-Davidson, KTM, Suzuki.',
  },
  myProfilePage: {
    title: 'Throttl | My profile',
    description: 'Manage your Throttl profile.',
  },
  sellYourMotorcyclesPage: {
    title: 'Throttl | Sell my motorcycle',
    description: 'Sell your motorcycle with Throttl. Easily add customizations, maintenance, and photos to sell your motorcycle fast.',
  },
  myMotocyclesPage: {
    title: 'Throttl | My motorcycles',
    description: 'Manage your motorcycles for sale. ',
  },
};
function SimpleHelmet({ id }) {
  return (
    <Helmet
      title={data[id].title}
      meta={[
       { name: 'description', content: data[id].description },
      ]}
    />
  );
}
SimpleHelmet.propTypes = {
  id: PropTypes.string,
};
SimpleHelmet.defaultProps = {
  id: null,
};
export default SimpleHelmet;
