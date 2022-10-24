import { User } from 'components/User/User'
import { UsersList  } from 'components/UsersList/UsersList';
import { Section } from 'components/Section/Section';
import { users } from 'data/user';
import { GlobalStyles } from 'utils/GlobalStyle';

const { name, email } = users[0];

export const App = () => {
  return (
    <>
    <Section>
      <User name={name} email={email} />
    </Section>
    <Section title="list of users">
      <UsersList users={users} />
    </Section>
    <GlobalStyles />
    </>
  );
};
