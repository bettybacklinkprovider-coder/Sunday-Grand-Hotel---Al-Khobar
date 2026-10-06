import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';

import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

import { Room, ROOMS } from './data/hotelData';

// Helper component to reset scroll position on page change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [roomDetailModal, setRoomDetailModal] = useState<Room | null>(null);

  const handleOpenBookingModal = (roomId?: string) => {
    setSelectedRoomId(roomId || ROOMS[0].id);
    setBookingModalOpen(true);
  };

  const handleOpenRoomDetail = (room: Room) => {
    setRoomDetailModal(room);
  };

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#0c0714] text-slate-100 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#0c0714]">
          
          {/* Navigation Bar */}
          <Navbar onOpenBookingModal={handleOpenBookingModal} />

          {/* Main Content Viewport */}
          <main className="flex-1">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    onOpenBookingModal={handleOpenBookingModal} 
                    onOpenRoomDetail={handleOpenRoomDetail} 
                  />
                } 
              />
              <Route 
                path="/rooms" 
                element={
                  <Rooms 
                    onOpenBookingModal={handleOpenBookingModal} 
                    onOpenRoomDetail={handleOpenRoomDetail} 
                  />
                } 
              />
              <Route 
                path="/about" 
                element={
                  <About 
                    onOpenBookingModal={handleOpenBookingModal} 
                  />
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <Contact />
                } 
              />
              {/* Fallback route */}
              <Route 
                path="*" 
                element={
                  <Home 
                    onOpenBookingModal={handleOpenBookingModal} 
                    onOpenRoomDetail={handleOpenRoomDetail} 
                  />
                } 
              />
            </Routes>
          </main>

          {/* Footer */}
          <Footer onOpenBookingModal={handleOpenBookingModal} />

          {/* Global Modals */}
          <BookingModal
            isOpen={bookingModalOpen}
            onClose={() => setBookingModalOpen(false)}
            initialRoomId={selectedRoomId}
          />

          <RoomDetailModal
            room={roomDetailModal}
            onClose={() => setRoomDetailModal(null)}
            onBookRoom={(roomId) => {
              setRoomDetailModal(null);
              handleOpenBookingModal(roomId);
            }}
          />

        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
