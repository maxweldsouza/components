import React from 'react';
import styled from 'styled-components';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import styles from './styles';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(p) => p.theme.spacing.md};
  align-items: center;
  ${styles}
`;

function Alert({ children }) {
  return (
    <Container>
      <ExclamationCircleIcon width={24} />
      {children}
    </Container>
  );
}

export default Alert;
