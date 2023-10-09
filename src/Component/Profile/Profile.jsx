import React, { useContext, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import AuthProvider, { AuthContext } from '../../assets/AuthProvider/AuthProvider';

const Profile = (user) => {
  const {LogOut} = useContext(AuthContext)
const handleClick = () =>{
    LogOut();
}


  const { email, photoURL, displayName } = user.user;
  const [showCard, setShowCard] = useState(false);

  return (
    <div>
      <div className="relative" onClick={() => setShowCard(!showCard)}>
        {photoURL ? (
          <div>
            <img src={photoURL} className="w-10 rounded-full" />
          </div>
        ) : (
          <CgProfile />
        )}
      </div>
      {showCard && (
        <div className="card absolute shadow-xl">
          <figure>
            <img src={photoURL} alt="Profile" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{displayName}</h2>
            <p>{email}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full" onClick={handleClick}>LogOut</button>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @media (max-width: 768px) {
            /* Add responsive styles here for smaller screens */
            .card {
              /* Example responsive styling */
              max-width: 80%;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Profile;
