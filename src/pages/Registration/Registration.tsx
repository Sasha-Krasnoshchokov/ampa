import React, { useState } from 'react';

import './Registration.scss';
import SignUp from '../../components/Forms/SignUp';
import LogIn from '../../components/Forms/Login';
// import CreateAccount from '../../components/Forms/CreateAccount';
// import Invitation from '../../components/Forms/Invitation';
// import ClubInfo from '../../components/Forms/ClubInfo';
import LayoutSpots from '../../components/Layouts/LayoutSpots';

type Props = {
  type: string;
};

interface Type {
  [key: string]: JSX.Element,
}

const Registration: React.FC<Props> = ({ type }): JSX.Element => {
  const [registrationTypes] = useState<Type>({
    signUp: <SignUp />,
    logIn: <LogIn />,
    // createAccount: <CreateAccount />,
    // invitation: <Invitation />,
    // clubInfo: <ClubInfo />,
  });

  return (
    <div className="registration">

      <LayoutSpots>
        <section className="registration_content">
          {registrationTypes[type]}
        </section>
      </LayoutSpots>

    </div>
  );
};

export default Registration;
