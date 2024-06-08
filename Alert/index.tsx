import React from 'react';
import styled from 'styled-components';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import styles from './styles';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(p) => p.theme.spacing.md};
  align-items: start;
  ${styles}
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.md};
`;

function Alert({ children }) {
  return (
    <Container>
      <ExclamationCircleIcon width={24} />
      <MessageContainer>{children}</MessageContainer>
    </Container>
  );
}

export default Alert;
