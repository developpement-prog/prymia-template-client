import ProdetekHero from './ProdetekHero';
import ProdetekRecentDetections from './ProdetekRecentDetections';
import ProdetekFeatures from './ProdetekFeatures';
import ProdetekTalents from './ProdetekTalents';
import ProdetekCoaching from './ProdetekCoaching';
import ProdetekClubsShowcase from './ProdetekClubsShowcase';


export default function ProdetekHome() {
  return (
    <main>
      <ProdetekHero />
      <ProdetekRecentDetections />
      <ProdetekFeatures />
      <ProdetekTalents />
      <ProdetekCoaching />
      <ProdetekClubsShowcase />
    </main>
  );
}