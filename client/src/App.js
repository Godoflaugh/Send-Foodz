import './App.css';
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recipeform from './components/Recipeform'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Signup from './pages/Signup'


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}
        />
        <Route path="recipes" element={<Recipeform />} />
        <Route path="blog" element={<Blog />} />
        <Route path="signup" element={<Home />} />
        <Route path="login" element={<Login />} />

      </Routes>
    </ApolloProvider>
  );
}

export default App;
