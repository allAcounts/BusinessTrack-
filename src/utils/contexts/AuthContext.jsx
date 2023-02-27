import { createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    id: 0,
  });

  loginUser = (userEmail, userId) => setUser({ email: userEmail, id: userId });

  return(
    <AuthContext.Provider value={{ user, loginUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
