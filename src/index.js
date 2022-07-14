import { React } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

  //initializing the apollo client
  const client = new ApolloClient({
    uri: "https://flyby-gateway.herokuapp.com/",//specifies the URL of our GraphQL server.
    cache: new InMemoryCache() //the cache is an instance of the InMemoryCache, 
    //which Apollo Client uses to cache query results after fetching them.
  });
  //our client is now ready to start fetching data.

  const root = ReactDOM.createRoot(document.getElementById('root'));
  
//connect Apollo Client to React with the ApolloProvider component
  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )