import React, { useEffect } from 'react';
import styled from 'styled-components';
import Section from '../../components/Atoms/Section';
import Container from '../../components/Atoms/Container';
import ContactHeader from '../../components/Contact/ContactHeader';
import theme from '../../styles/theme';
import Row from '../../components/Atoms/Row';
import Column from '../../components/Atoms/Column';
import { createHbsptForm } from '../../utilis/createHbsptForm';

const SectionWrapper = styled(Section)`
  background: linear-gradient(
    180deg,
    ${props => props.theme.color.blackBlue} 20%,
    transparent 0%,
    transparent 100%
  );
`;


function Index() {
  const ContactForm = createHbsptForm({ id: 'contact-form' });

  console.log(ContactForm);

  return (
    <>
      <ContactHeader />
      <SectionWrapper>
        <Container>
          <Row justifyContent="center">
            <Column col="is-10">
              <Row>
                <Column col="is-6">
                  {ContactForm}
                </Column>
                <Column col="is-6" />
              </Row>
            </Column>
          </Row>
        </Container>
      </SectionWrapper>
    </>
  );
}

export default Index;
