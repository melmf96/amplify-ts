import React from 'react';
import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import {
  Authenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import './App.css';

//@ts-ignore
export default function App() {
  return (
    <Authenticator>
      {//@ts-ignore
      ({ signOut, user }: { signOut: (data: any) => void, user: any }) => (
        <View className="App">
          <Card>
            <Image src={logo} className="App-logo" alt="logo" />
            <Heading level={1}>We now have Auth!</Heading>
          </Card>
          <Button onClick={signOut}>Sign Out</Button>
        </View>
      )}
    </Authenticator>
  );
}

// export default withAuthenticator(App);
