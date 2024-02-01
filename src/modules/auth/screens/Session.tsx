import { Outlet } from 'react-router-dom';

import { useSessionsNavigation } from '../routes/auth.navigations';

export const Session = () => {
  const { navigateToTest, navigateToCreate } = useSessionsNavigation();
  return (
    <>
      <button onClick={navigateToTest}>Navigation button</button>
      <button onClick={navigateToCreate}>Open nested component</button>
      <Outlet />
    </>
  );
};
