import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoIcon } from '../components/Logo';
import { Home, MessageSquare, Search, Calendar, Settings, User, CreditCard, Package, Bell, Lock, Camera } from 'lucide-react';

interface SettingsPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings') => void;
}

type Section = 'profile' | 'billing' | 'shipping' | 'notifications' | 'privacy';

export default function SettingsPage({ onNavigate }: SettingsPageProps) {
  const [activeSection, setActiveSection] = useState<Section>('profile');

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      {/* Left Sidebar - Icon Navigation */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden lg:flex bg-[#f0ebff] flex-col items-center justify-between py-6 px-4 w-[80px]"
      >
        <div className="flex flex-col gap-10 items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#a727ce] rounded-[14px] w-[56px] h-[56px] flex items-center justify-center cursor-pointer" 
            onClick={() => onNavigate('landing')}
          >
            <LogoIcon />
          </motion.div>

          {/* Nav Icons */}
          <div className="flex flex-col gap-8 items-center">
            <motion.button 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onNavigate('dashboard')}
              className="text-black hover:text-[#a727ce] transition-all duration-300"
            >
              <Home className="w-6 h-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onNavigate('dashboard')}
              className="text-black hover:text-[#a727ce] transition-all duration-300"
            >
              <MessageSquare className="w-6 h-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-black hover:text-[#a727ce] transition-all duration-300"
            >
              <Search className="w-6 h-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-black hover:text-[#a727ce] transition-all duration-300"
            >
              <Calendar className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Settings */}
        <motion.button 
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="text-[#a727ce] hover:text-[#a727ce] transition-all duration-300"
        >
          <Settings className="w-6 h-6 fill-current" />
        </motion.button>
      </motion.div>

      {/* Profile Sidebar */}
      <div className="w-auto min-w-[280px] max-w-[320px] flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
        {/* Profile Image Section */}
        <div className="p-8 border-b border-gray-200 flex-shrink-0">
          <div className="relative w-[120px] h-[120px] mx-auto mb-4 flex-shrink-0">
            <div className="w-full h-full rounded-full bg-[#a727ce] aspect-square flex items-center justify-center">
              <User size={60} className="text-white" />
            </div>
            <button className="absolute bottom-0 right-0 bg-[#a727ce] w-[36px] h-[36px] rounded-full flex items-center justify-center shadow-lg hover:bg-[#8f1fb8] transition-colors">
              <Camera size={18} className="text-white" />
            </button>
          </div>
          <h2 className="text-center text-[20px]">My Account</h2>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <button
            onClick={() => setActiveSection('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeSection === 'profile' 
                ? 'bg-[#dedcff] text-[#a727ce]' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <User size={20} className="flex-shrink-0" />
            <span className="whitespace-nowrap">Profile</span>
          </button>
          <button
            onClick={() => setActiveSection('billing')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeSection === 'billing' 
                ? 'bg-[#dedcff] text-[#a727ce]' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <CreditCard size={20} className="flex-shrink-0" />
            <span className="whitespace-nowrap">Billing</span>
          </button>
          <button
            onClick={() => setActiveSection('shipping')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeSection === 'shipping' 
                ? 'bg-[#dedcff] text-[#a727ce]' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Package size={20} className="flex-shrink-0" />
            <span className="whitespace-nowrap">Shipping</span>
          </button>
          <button
            onClick={() => setActiveSection('notifications')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeSection === 'notifications' 
                ? 'bg-[#dedcff] text-[#a727ce]' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Bell size={20} className="flex-shrink-0" />
            <span className="whitespace-nowrap">Notifications</span>
          </button>
          <button
            onClick={() => setActiveSection('privacy')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeSection === 'privacy' 
                ? 'bg-[#dedcff] text-[#a727ce]' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Lock size={20} className="flex-shrink-0" />
            <span className="whitespace-nowrap">Privacy and Security</span>
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full overflow-y-auto bg-white">
        <div className="w-full max-w-[800px] mx-auto p-8">
          <AnimatePresence mode="wait">
            {activeSection === 'profile' && <ProfileSection key="profile" />}
            {activeSection === 'billing' && <BillingSection key="billing" />}
            {activeSection === 'shipping' && <ShippingSection key="shipping" />}
            {activeSection === 'notifications' && <NotificationsSection key="notifications" />}
            {activeSection === 'privacy' && <PrivacySection key="privacy" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-[32px] mb-6"
      >
        Profile Information
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-gray-600 mb-8"
      >
        Update your personal details and information.
      </motion.p>

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-[14px] text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              defaultValue="John"
              className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-[14px] text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              defaultValue="Doe"
              className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-[14px] text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            defaultValue="john.doe@example.com"
            className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[14px] text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            defaultValue="+1 (555) 123-4567"
            className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3 bg-[#a727ce] text-white rounded-lg hover:bg-[#8f1fb8] transition-all duration-300 shadow-[0px_0px_15px_0px_rgba(65,62,189,0.24)]"
          >
            Save Changes
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300"
          >
            Cancel
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}

function BillingSection() {
  return (
    <div>
      <h1 className="text-[32px] mb-6">Billing Address</h1>
      <p className="text-gray-600 mb-8">Manage your billing address and payment information.</p>

      <form className="space-y-6">
        <div>
          <label htmlFor="billingStreet" className="block text-[14px] text-gray-700 mb-2">
            Street Address
          </label>
          <input
            type="text"
            id="billingStreet"
            placeholder="123 Main Street"
            className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
          />
        </div>

        <div>
          <label htmlFor="billingApt" className="block text-[14px] text-gray-700 mb-2">
            Apartment, Suite, etc. (optional)
          </label>
          <input
            type="text"
            id="billingApt"
            placeholder="Apt 4B"
            className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="billingCity" className="block text-[14px] text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              id="billingCity"
              placeholder="New York"
              className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
            />
          </div>
          <div>
            <label htmlFor="billingState" className="block text-[14px] text-gray-700 mb-2">
              State / Province
            </label>
            <input
              type="text"
              id="billingState"
              placeholder="NY"
              className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="billingZip" className="block text-[14px] text-gray-700 mb-2">
              ZIP / Postal Code
            </label>
            <input
              type="text"
              id="billingZip"
              placeholder="10001"
              className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
            />
          </div>
          <div>
            <label htmlFor="billingCountry" className="block text-[14px] text-gray-700 mb-2">
              Country
            </label>
            <input
              type="text"
              id="billingCountry"
              placeholder="United States"
              className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-[#a727ce] text-white rounded-lg hover:bg-[#8f1fb8] transition-colors shadow-[0px_0px_15px_0px_rgba(65,62,189,0.24)]"
          >
            Save Address
          </button>
          <button
            type="button"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function ShippingSection() {
  return (
    <div>
      <h1 className="text-[32px] mb-6">Shipping Address</h1>
      <p className="text-gray-600 mb-8">Manage your shipping address for deliveries.</p>

      <form className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            id="sameAsBilling"
            className="w-4 h-4 text-[#a727ce] rounded focus:ring-[#a727ce]"
          />
          <label htmlFor="sameAsBilling" className="text-[14px] text-gray-700">
            Same as billing address
          </label>
        </div>

        <div>
          <label htmlFor="shippingStreet" className="block text-[14px] text-gray-700 mb-2">
            Street Address
          </label>
          <input
            type="text"
            id="shippingStreet"
            placeholder="123 Main Street"
            className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
          />
        </div>

        <div>
          <label htmlFor="shippingApt" className="block text-[14px] text-gray-700 mb-2">
            Apartment, Suite, etc. (optional)
          </label>
          <input
            type="text"
            id="shippingApt"
            placeholder="Apt 4B"
            className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="shippingCity" className="block text-[14px] text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              id="shippingCity"
              placeholder="New York"
              className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
            />
          </div>
          <div>
            <label htmlFor="shippingState" className="block text-[14px] text-gray-700 mb-2">
              State / Province
            </label>
            <input
              type="text"
              id="shippingState"
              placeholder="NY"
              className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="shippingZip" className="block text-[14px] text-gray-700 mb-2">
              ZIP / Postal Code
            </label>
            <input
              type="text"
              id="shippingZip"
              placeholder="10001"
              className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
            />
          </div>
          <div>
            <label htmlFor="shippingCountry" className="block text-[14px] text-gray-700 mb-2">
              Country
            </label>
            <input
              type="text"
              id="shippingCountry"
              placeholder="United States"
              className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-[#a727ce] text-white rounded-lg hover:bg-[#8f1fb8] transition-colors shadow-[0px_0px_15px_0px_rgba(65,62,189,0.24)]"
          >
            Save Address
          </button>
          <button
            type="button"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function NotificationsSection() {
  return (
    <div>
      <h1 className="text-[32px] mb-6">Notification Preferences</h1>
      <p className="text-gray-600 mb-8">Manage how you receive notifications and updates.</p>

      <div className="space-y-6">
        <div className="bg-[#f3f3f3] p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[16px] mb-1">Email Notifications</h3>
              <p className="text-[14px] text-gray-600">Receive updates via email</p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 text-[#a727ce] rounded focus:ring-[#a727ce]"
            />
          </div>
        </div>

        <div className="bg-[#f3f3f3] p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[16px] mb-1">Push Notifications</h3>
              <p className="text-[14px] text-gray-600">Receive push notifications on your device</p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 text-[#a727ce] rounded focus:ring-[#a727ce]"
            />
          </div>
        </div>

        <div className="bg-[#f3f3f3] p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[16px] mb-1">SMS Notifications</h3>
              <p className="text-[14px] text-gray-600">Receive text messages for important updates</p>
            </div>
            <input
              type="checkbox"
              className="w-5 h-5 text-[#a727ce] rounded focus:ring-[#a727ce]"
            />
          </div>
        </div>

        <div className="bg-[#f3f3f3] p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[16px] mb-1">Marketing Updates</h3>
              <p className="text-[14px] text-gray-600">Receive promotional content and offers</p>
            </div>
            <input
              type="checkbox"
              className="w-5 h-5 text-[#a727ce] rounded focus:ring-[#a727ce]"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="button"
            className="px-6 py-3 bg-[#a727ce] text-white rounded-lg hover:bg-[#8f1fb8] transition-colors shadow-[0px_0px_15px_0px_rgba(65,62,189,0.24)]"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

function PrivacySection() {
  return (
    <div>
      <h1 className="text-[32px] mb-6">Privacy and Security</h1>
      <p className="text-gray-600 mb-8">Manage your privacy settings and security preferences.</p>

      <div className="space-y-6">
        <div className="bg-[#f3f3f3] p-6 rounded-lg">
          <h3 className="text-[16px] mb-4">Change Password</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-[14px] text-gray-700 mb-2">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-[14px] text-gray-700 mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-[14px] text-gray-700 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
              />
            </div>
            <button className="px-6 py-3 bg-[#a727ce] text-white rounded-lg hover:bg-[#8f1fb8] transition-colors">
              Update Password
            </button>
          </div>
        </div>

        <div className="bg-[#f3f3f3] p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[16px] mb-1">Two-Factor Authentication</h3>
              <p className="text-[14px] text-gray-600">Add an extra layer of security to your account</p>
            </div>
            <button className="px-4 py-2 bg-[#a727ce] text-white rounded-lg hover:bg-[#8f1fb8] transition-colors text-[14px]">
              Enable
            </button>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
          <h3 className="text-[16px] text-red-900 mb-2">Delete Account</h3>
          <p className="text-[14px] text-red-700 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Delete My Account
          </button>
        </div>
      </div>
    </div>
  );
}