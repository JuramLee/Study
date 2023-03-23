import TokenService from "repository/TokenService";

const { createContext, useState, useContext, useEffect } = require("react");

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(TokenService.getToken());

  useEffect(() => {
    const token = TokenService.getToken();
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const login = (token) => {
    TokenService.setToken(token);
    setAccessToken(token);
  };

  const logout = () => {
    TokenService.deleteToken();
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
