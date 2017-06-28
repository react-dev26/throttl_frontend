import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Responsive from 'components/Responsive';
import { getStyle } from 'utils';
import styles from './styles';


const items = [
  { id: 1, year: '2009', make: ' Kawasaki', model: ' ZX-6R', content: <p>$5,675<br /><br />50,678 Miles<br /><br />Sportbike, SuperSport, Street</p> },
  { id: 2, year: '2009', make: ' Kawasaki', model: ' ZX-6R', content: <p>$5,675<br /><br />50,678 Miles<br /><br />Sportbike, SuperSport, Street</p> },
  { id: 3, year: '2009', make: ' Kawasaki', model: ' ZX-6R', content: <p>$5,675<br /><br />50,678 Miles<br /><br />Sportbike, SuperSport, Street</p> },
  { id: 4, year: '2009', make: ' Kawasaki', model: ' ZX-6R', content: <p>$5,675<br /><br />50,678 Miles<br /><br />Sportbike, SuperSport, Street</p> },
  { id: 5, year: '2009', make: ' Kawasaki', model: ' ZX-6R', content: <p>$5,675<br /><br />50,678 Miles<br /><br />Sportbike, SuperSport, Street</p> },
  { id: 6, year: '2009', make: ' Kawasaki', model: ' ZX-6R', content: <p>$5,675<br /><br />50,678 Miles<br /><br />Sportbike, SuperSport, Street</p> },
];

function ListingCard() {
  const getCardStyle = isMobile =>
    <div style={styles.wrapper}>
      {
        items.map(item =>
          <Card style={getStyle(styles.container, isMobile)}>
            <CardHeader
              key={item.id} title={item.year + item.make + item.model}
              subtitle={item.content}
            />
            <CardActions>
              <FlatButton label="active" />
              <FlatButton label="edit" labelStyle={styles.custom} style={styles.editStyle} />
            </CardActions>
          </Card>,
        )
      }
    </div>;
  const getCard = (
    <div>
      <Responsive size="mobile">
        {getCardStyle(true)}
        console.log(getCardStyle(true));
      </Responsive>
      <Responsive size="tablet+desktop">
        {getCardStyle(false)}
      </Responsive>
    </div>
  );
  return (
    <div>
      { getCard }
    </div>
  );
}

export default ListingCard;
