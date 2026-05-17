import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfUsePage from './pages/TermsOfUsePage'
import { ROUTES } from './constants/routes'

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.privacy} element={<PrivacyPolicyPage />} />
      <Route path={ROUTES.terms} element={<TermsOfUsePage />} />
    </Routes>
  )
}
