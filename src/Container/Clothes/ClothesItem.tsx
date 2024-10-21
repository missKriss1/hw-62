import { ClothesBLock } from '../../type';
import * as React from 'react';

interface Props {
  clothes: ClothesBLock;
}
const ClothesItem: React.FC <Props> = ({clothes}) => {
  return (
    <div className='row mt-2 '>
      <img className="w-50 h-75" alt={clothes.name} src={clothes.photo} />
      <strong>{clothes.name}</strong>
      <strong>Price: {clothes.price} KGS</strong>
    </div>
  );
};

export default ClothesItem;