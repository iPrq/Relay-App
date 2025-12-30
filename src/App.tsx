import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import AddFriendPage from './pages/AddFriendPage';

type PageType = 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings' | 'home' | 'search' | 'add-friend';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [activeNav, setActiveNav] = useState('home');
  const [contacts, setContacts] = useState<{ id: number; name: string; text: string; time: string }[]>([]);
  const [selectedContact, setSelectedContact] = useState<number | null>(null);

  const handleNavigate = (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings' | 'home' | 'search' | 'add-friend') => {
    setCurrentPage(page as PageType);
  };

  const handleAddFriend = (friend: { id: number; name: string; text: string; time: string }) => {
    setContacts(prev => [...prev, friend]);
  };

  const handleSelectContact = (id: number) => {
    setSelectedContact(id);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'register':
        return <RegisterPage onNavigate={handleNavigate} />;
      case 'home':
        return <HomePage onNavigate={handleNavigate} setActiveNav={setActiveNav} />;
      case 'search':
        return <SearchPage onNavigate={handleNavigate} activeNav={activeNav} setActiveNav={setActiveNav} />;
      case 'dashboard':
        return <DashboardPage onNavigate={handleNavigate} activeNav={activeNav} setActiveNav={setActiveNav} contacts={contacts} selectedContact={selectedContact} onSelectContact={handleSelectContact} />;
      case 'forgot-password':
        return <ForgotPasswordPage onNavigate={handleNavigate} />;
      case 'settings':
        return <SettingsPage onNavigate={handleNavigate} />;
      case 'add-friend':
        return <AddFriendPage onNavigate={handleNavigate} onAddFriend={handleAddFriend} onSelectContact={handleSelectContact} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return <div className="min-h-screen bg-white">{renderPage()}</div>;
}