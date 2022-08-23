import './App.css';
import React from 'react';
import Homepage from './Pages/homepage/Homepage.components'
import Shop from './Pages/Shops/Shop.component';
import SignInsignOut from './Pages/signIn-signOut/signIn-signOut.component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header.component';
import {auth, createUserProfileDocument,db} from './firebase/firebase-utils'
import { doc, onSnapshot } from "firebase/firestore";


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubiscribeFromAuth = null

  componentDidMount(){
   this.unsubiscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth)
      
      onSnapshot((userRef), (doc) => {
        this.setState({
          currentUser: {
            id: doc.id,
            ...doc.data()
          }
        })
        console.log(this.state)
      })
    }
    this.setState({currentUser: userAuth})

    })
  }

  componentWillUnmount(){
    this.unsubiscribeFromAuth()
  }

  render(){
    return (
      <>
        <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signIn" element={<SignInsignOut />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

}

export default App;
