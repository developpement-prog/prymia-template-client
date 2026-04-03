import { Outlet } from 'react-router-dom';
import ProdetekHeader from './ProdetekHeader';
import './prodetek.css'; 

export default function ProdetekLayout() {
  return (
    // 🟢 On utilise "bg-darkbg" ici pour écraser le vert de Prymia
    <div className="min-h-screen theme-prodetek bg-darkbg">
      <ProdetekHeader />
      <Outlet />
    </div>
  );
}