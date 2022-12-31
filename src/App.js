import React from 'react';
import { Routes,Route,useParams} from "react-router-dom";
import HomePage from './pages/HomePage';
import AwardsPage from './pages/AwardsPage';
import ResearchMyProblemPage from './pages/ResearchMyProblemPage';
import PublishAnArticlePage from './pages/PublishAnArticlePage';
import BeAResearcherPage from './pages/BeAResearcherPage';
import ReqestHelpForResearchPage from './pages/ReqestHelpForResearchPage';
import ApplyForProjectFundingPage from './pages/ApplyForProjectFundingPage';
import ResearcherPartnerRequirementPage from './pages/ResearcherPartnerRequirementPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ResearchPage from './pages/ResearchPage';
import PublicationPage from './pages/PublicationPage';
import ArticlePage from './pages/ArticlePage';
import {InternshipPage,WorkPage} from './pages/ApplyPage';
import SponsorPage from './pages/SponsorPage';
import DonateUsPage from './pages/DonateUsPage';
// import ChallengesPage from './pages/ChallengesPage';
// import ChallengePage from './pages/ChallengePage';
import AboutPage from './pages/AboutPage';
import ModeratorsPage from './pages/ModeratorsPage';
import OurTeamPage from './pages/OurTeamPage';
import OurVisionPage from './pages/OurVisionPage';
import ResearchLabsPage from './pages/ResearchLabsPage';
import TopChallengersPage from './pages/TopChallengersPage';
import BlogsPage from './pages/BlogsPage';
import BlogPage from './pages/BlogPage';
import GalleryPage from './pages/GalleryPage';
import Dashboard from './components/dashboard/Dashboard';
import ExpandedPost from './components/expandedPost/ExpandedPost';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/awards' element={<AwardsPage />} />
      <Route path='/research-my-problem' element={<ResearchMyProblemPage />} />
      <Route path='/publication-request' element={<PublishAnArticlePage />} />
      <Route path='/be-a-researcher' element={<BeAResearcherPage />} />
      <Route path='/request-help-for-research' element={<ReqestHelpForResearchPage />} />
      <Route path='/apply-for-project-funding' element={<ApplyForProjectFundingPage />} />
      <Route path='/researcher-partner-requirement' element={<ResearcherPartnerRequirementPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/research/:id' element={<ResearchPage />} />
      <Route path='/publications' element={<PublicationPage />} />
      <Route path='/article/:id' element={<ArticlePage />} />
      <Route path='/apply/internship' element={<InternshipPage />} />
      <Route path='/apply/work' element={<WorkPage />} />
      <Route path='/sponsor_our_program' element={<SponsorPage />} />
      <Route path='/donate_us' element={<DonateUsPage />} />
      {/*<Route path='/challenges' element={<ChallengesPage />} />
      <Route path='/challenge/:id' element={<ChallengePage />} />*/}
      <Route path='/about_us' element={<AboutPage />} />
      <Route path='/moderators' element={<ModeratorsPage />} />
      <Route path='/our_team' element={<OurTeamPage />} />
      <Route path='/our_vision' element={<OurVisionPage />} />
      <Route path='/research_labs' element={<ResearchLabsPage />} />
      <Route path='/top_challengers' element={<TopChallengersPage />} />
      <Route path='/dashboard/:type' element={<Dashboard />} />
      <Route path='/view/post/:id' element={<ExpandedPost />} />
      <Route path='/blogs' element={<BlogsPage />} />
      <Route path='/view/blog/:id' element={<BlogPage />} />
      <Route path='/gallery' element={<GalleryPage />} />
    </Routes>
    </>
  )
}

export default App;