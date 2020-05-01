import React from 'react';
import ContactView from "./views/contact-view";
import { Container } from "semantic-ui-react";

export default function App() {
  return (
    <Container>
      <h1>React Hooks</h1>
      <ContactView />
    </Container>
  );
}
