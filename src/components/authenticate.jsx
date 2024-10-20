import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase';
import Leftpanel from './leftpanel';
import Login from './login';
import Signup from './signup';
import { toggleAuth, setUser } from '../store/authSlice';

export default function Authenticate() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setUser(currentUser));
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleToggleAuth = () => {
    dispatch(toggleAuth());
  };

  if (user) {
    // Render your main application component here
    return <div>Welcome, {user.email}!</div>;
  }

  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <Leftpanel className="max-w-md text-center" />
      </div>
      {/* Right Panel */}
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        {isLogin ? (
          <Login toggleAuth={handleToggleAuth} />
        ) : (
          <Signup toggleAuth={handleToggleAuth} />
        )}
      </div>
    </div>
  );
}
