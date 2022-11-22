import React from 'react';
import { Routes,Route,useParams} from "react-router-dom";
import Home from './pages/Home';
import Home_2 from './pages/Home_2';
import AwardsPage from './pages/AwardsPage';
import ResearchMyProblemPage from './pages/ResearchMyProblemPage';
import PublishAnArticlePage from './pages/PublishAnArticlePage';
import BeAResearcherPage from './pages/BeAResearcherPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ResearchPage from './pages/ResearchPage';
import PublicationPage from './pages/PublicationPage';
import UserDashboard from './pages/UserDashboard';
import ModeratorDashboard from './pages/ModeratorDashboard';
import {InternshipPage,WorkPage} from './pages/ApplyPage';
import SponsorPage from './pages/SponsorPage';
import DonateUsPage from './pages/DonateUsPage';
import ChallengesPage from './pages/ChallengesPage';
import ChallengePage from './pages/ChallengePage';
import AboutPage from './pages/AboutPage';
import ModeratorsPage from './pages/ModeratorsPage';
import OurTeamPage from './pages/OurTeamPage';
import OurVisionPage from './pages/OurVisionPage';
import ResearchLabsPage from './pages/ResearchLabsPage';
import TopChallengersPage from './pages/TopChallengersPage';
import Dashboard from './components/dashboard_2/Dashboard';

function App() {

  return (
    <>
    <Routes>
      {/*<Route path='/' element={<Home />} />*/}
      <Route path='/' element={<Home_2 />} />
      <Route path='/awards' element={<AwardsPage />} />
      <Route path='/research-my-problem' element={<ResearchMyProblemPage />} />
      <Route path='/publication-request' element={<PublishAnArticlePage />} />
      <Route path='/be-a-researcher' element={<BeAResearcherPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/research' element={<ResearchPage />} />
      <Route path='/publication' element={<PublicationPage />} />
      {/*<Route path='/dashboard/user/' element={<UserDashboard />} />
      <Route path='/dashboard/user/:page' element={<UserDashboard />} />
      <Route path='/dashboard/moderator/' element={<ModeratorDashboard />} />
      <Route path='/dashboard/moderator/:page' element={<ModeratorDashboard />} />
      <Route path='/dashboard/moderator/:page/:id' element={<ModeratorDashboard />} />*/}
      <Route path='/apply/internship' element={<InternshipPage />} />
      <Route path='/apply/work' element={<WorkPage />} />
      <Route path='/sponsor_our_program' element={<SponsorPage />} />
      <Route path='/donate_us' element={<DonateUsPage />} />
      <Route path='/challenges' element={<ChallengesPage />} />
      <Route path='/challenge/:id' element={<ChallengePage />} />
      <Route path='/about_us' element={<AboutPage />} />
      <Route path='/moderators' element={<ModeratorsPage />} />
      <Route path='/our_team' element={<OurTeamPage />} />
      <Route path='/our_vision' element={<OurVisionPage />} />
      <Route path='/research_labs' element={<ResearchLabsPage />} />
      <Route path='/top_challengers' element={<TopChallengersPage />} />
      <Route path='/dashboard/:type' element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App;