import { ClothesBLock } from '../../type';
import ClothesItem from './ClothesItem.tsx';

interface Props {
  clothes: ClothesBLock[];
}

const Clothes: React.FC <Props> = ({clothes}) => {
  return (
    <>
      <h3 className="text-center mt-4 mb-4">New collection</h3>
      <div className="d-flex flex-column ps-5 ms-5">
        <div className="d-flex">
          {clothes.map((clothe) => (
            <ClothesItem key={clothe.id} clothes={clothe}/>
          ))}
        </div>
      </div>
    </>

  );
};

export default Clothes;