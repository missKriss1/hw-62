import { NavLink } from 'react-router-dom';

const ToolBar = () => {
  const imgLogo = 'https://i.pinimg.com/564x/9e/9b/ae/9e9baed1ac93bbf9418309d5764718b2.jpg'
  return (
    <div className="row bg-black ps-5">
      <img className="w-25 col-4 ms-5" alt="img" src={imgLogo} />
      <ul className="col-4 mt-5 text-white">
        <li>
          <NavLink className="text-white text-decoration-none" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="text-white text-decoration-none" to="/collection">New collection</NavLink>
        </li>
        <li>
          <NavLink className="text-white text-decoration-none" to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ToolBar;