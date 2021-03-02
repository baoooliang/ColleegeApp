import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import Quotes from './modules/views/Quotes';
import ProductCTA from './modules/views/ProductCTA';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <Quotes />
    </React.Fragment>
  );
}

export default withRoot(Index);
