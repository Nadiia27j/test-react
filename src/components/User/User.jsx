import PropTypes from 'prop-types';
import { UseData, UserSpan } from './User.styled'

export const User = ({ name, email }) => {
  const isTrue = email.endsWith('biz')
  return (
    <>
      <UseData>
        Name: <UserSpan>{name}</UserSpan>
      </UseData>
      <UseData>
        Email: <UserSpan isRed={isTrue}>{email}</UserSpan>
      </UseData>
    </>
  );
};


User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};