import { createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [shouldRenderLogin, setShouldRenderLogin] = useState(false);
  const [shouldRenderRegister, setShouldRenderRegister] = useState(false);

  const renderLoginForm = () => setShouldRenderLogin(true);
  const hideLoginForm = () => setShouldRenderLogin(false);
  const renderRegisterForm = () => setShouldRenderRegister(true);
  const hideRegisterForm = () => setShouldRenderRegister(false);

  return(
    <AuthContext.Provider value={{ shouldRenderLogin, shouldRenderRegister, renderLoginForm, renderRegisterForm, hideLoginForm, hideRegisterForm }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
