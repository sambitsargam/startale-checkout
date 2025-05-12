import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SessionContextValue {
  sessionToken: string | null;
  setSessionToken: (token: string | null) => void;
}
const SessionContext = createContext<SessionContextValue | undefined>(undefined);

export const SessionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sessionToken, setSessionToken] = useState<string | null>(() => {
    return localStorage.getItem('startale_sessionToken');
  });

  useEffect(() => {
    if (sessionToken) {
      localStorage.setItem('startale_sessionToken', sessionToken);
    } else {
      localStorage.removeItem('startale_sessionToken');
    }
  }, [sessionToken]);

  return (
    <SessionContext.Provider value={{ sessionToken, setSessionToken }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = (): SessionContextValue => {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error('useSessionContext must be used within SessionProvider');
  return ctx;
};
