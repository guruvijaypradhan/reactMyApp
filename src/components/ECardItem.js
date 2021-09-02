import React from 'react';
import data from '../dummydata/BirthDayData';
import Card from '../ui/card';

const ECardItem = () => {
 return (
     data.map((row)=>{
       return <Card message={row.message} messageFrom={row.messageFrom}/>
     })     
 );

}

export default ECardItem;

