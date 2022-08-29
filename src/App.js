import './App.css';
import React from 'react';
import Homepage from './Pages/homepage/Homepage.components'
import Shop from './Pages/Shops/Shop.component';
import SignInsignOut from './Pages/signIn-signOut/signIn-signOut.component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase-utils'
import { onSnapshot } from "firebase/firestore";
import { setCurrentUser } from './redux/user/user.actions'
import { connect } from 'react-redux'


class App extends React.Component {

  unsubiscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubiscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        onSnapshot((userRef), (doc) => {
          setCurrentUser({
            id: doc.id,
            ...doc.data()
          })
        })
      }
      setCurrentUser(userAuth)

    })
  }

  componentWillUnmount() {
    this.unsubiscribeFromAuth()
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signIn" element={< SignInsignOut />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
