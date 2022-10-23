import { User } from 'components/User/User'
import { UsersList  } from 'components/UsersList/UsersList';
import { Section } from 'components/Section/Section';
import { users } from 'data/user';
const { name, email } = users[0];
import { GlobalStyle } from 'utils/GlobalStyles'

export const App = () => {
  return (
    <>
    <Section>
      <User name={name} email={email} />
    </Section>
    <Section>
      <UsersList users={users} />
    </Section>
    <GlobalStyle />
    </>
  );
};
