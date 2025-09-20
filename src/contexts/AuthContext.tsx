import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  businessName?: string;
  membershipTier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  joinDate: string;
  totalOrders: number;
  totalSpent: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Check for existing auth state on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('desireplay_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('desireplay_user');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock user data - in real app, this would come from API
      const mockUser: User = {
        id: '1',
        name: 'Rajesh Kumar',
        email: email,
        businessName: 'Kumar Enterprises',
        membershipTier: 'Gold',
        joinDate: '2023-08-15',
        totalOrders: 12,
        totalSpent: 45680
      };

      setUser(mockUser);
      localStorage.setItem('desireplay_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock user data from Google
      const mockUser: User = {
        id: 'google_' + Date.now(),
        name: 'Google User',
        email: 'user@gmail.com',
        businessName: 'Google Business',
        membershipTier: 'Silver',
        joinDate: new Date().toISOString().split('T')[0],
        totalOrders: 5,
        totalSpent: 995
      };

      setUser(mockUser);
      localStorage.setItem('desireplay_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Google login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock user data for new signup
      const mockUser: User = {
        id: 'user_' + Date.now(),
        name: name,
        email: email,
        businessName: '',
        membershipTier: 'Bronze',
        joinDate: new Date().toISOString().split('T')[0],
        totalOrders: 0,
        totalSpent: 0
      };

      setUser(mockUser);
      localStorage.setItem('desireplay_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('desireplay_user');
    setShowAuthModal(false);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    loginWithGoogle,
    signup,
    logout,
    showAuthModal,
    setShowAuthModal
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};