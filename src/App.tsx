import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ReactFundamentals from './pages/ReactFundamentals/ReactFundamentals.tsx';
import { REACT_ADVANCED_ROUTES, REACT_FUNDAMENTALS_ROUTES, ROUTES, STUDENTS } from './constants.ts';
import ReactAdvanced from './pages/ReactAdvanced';
import Layout from './containers/Layout';
import BasicButton from './components/Button/BasicButton.tsx';
import FormInput from './components/Form/FormInput.tsx';
import ToggleButton from './components/ToggleButton';
import SmartContainer from './components/SmartContainer/SmartContainer.tsx';
import ListExample from './components/ListExample/ListExample.tsx';
import EventExample from './components/EventExample/Input.tsx';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import ColorBox from './components/ColorBox/ColorBox.tsx';
import ScrollListenerExample from './components/ScrollListenerExample';
import IntervalCounter from './components/IntervalCounter';
import RefCounter from './components/RefCounter';
import RefForm from './components/RefForm';
import RefExample from './components/RefExample';
import StatusBar from './components/StatusBar/StatusBar.tsx';
import ActivityBar from './components/ActivityBar';
import CrashOnRenderComponent from './components/CrashingComponent/CrashOnRenderComponent.tsx';
import CrashingOnClickComponent from './components/CrashingComponent/CrashingOnClickComponent.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeContextProvider } from './containers/ThemeContext.tsx';
import ThemeSwitcher from './components/ThemeSwitcher';
import Button from './components/Button/Button.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to={ROUTES.ReactFundamentals} />} />
            <Route path={ROUTES.ReactFundamentals} element={<ReactFundamentals />}>
              <Route
                path={REACT_FUNDAMENTALS_ROUTES.BasicButton}
                element={<BasicButton name="click me" onClick={() => console.log('clicked!')} />}
              />
              <Route path={REACT_FUNDAMENTALS_ROUTES.FormInput} element={<FormInput />} />
              <Route path={REACT_FUNDAMENTALS_ROUTES.ToggleButton} element={<ToggleButton showIcon />} />
              <Route path={REACT_FUNDAMENTALS_ROUTES.ConditionalContainer} element={<SmartContainer />} />
              <Route path={REACT_FUNDAMENTALS_ROUTES.List} element={<ListExample students={STUDENTS} />} />
              <Route path={REACT_FUNDAMENTALS_ROUTES.Event} element={<EventExample />} />
              <Route path={REACT_FUNDAMENTALS_ROUTES.Counter} element={<Counter />} />
              <Route path={REACT_FUNDAMENTALS_ROUTES.ControlledInput} element={<ControlledInput />} />
              <Route path={REACT_FUNDAMENTALS_ROUTES.ColorBox} element={<ColorBox />} />
              <Route path={REACT_FUNDAMENTALS_ROUTES.ScrollListener} element={<ScrollListenerExample />} />
              <Route path={REACT_FUNDAMENTALS_ROUTES.IntervalCounter} element={<IntervalCounter />} />
              <Route path={REACT_FUNDAMENTALS_ROUTES.RefCounter} element={<RefCounter />} />
              <Route path={REACT_FUNDAMENTALS_ROUTES.RefForm} element={<RefForm />} />
              <Route path={REACT_FUNDAMENTALS_ROUTES.RefExample} element={<RefExample />} />
            </Route>
            <Route path={ROUTES.ReactAdvanced} element={<ReactAdvanced />}>
              <Route path={REACT_ADVANCED_ROUTES.StatusBar} element={<StatusBar />} />
              <Route path={REACT_ADVANCED_ROUTES.ActivityBar} element={<ActivityBar />} />
              <Route
                path={REACT_ADVANCED_ROUTES.ErrorWhileRendering}
                element={
                  <ErrorBoundary fallback={<p>Something went wrong</p>}>
                    <CrashOnRenderComponent />
                  </ErrorBoundary>
                }
              />
              <Route path={REACT_ADVANCED_ROUTES.ErrorInEventHandler} element={<CrashingOnClickComponent />} />
              <Route path={REACT_ADVANCED_ROUTES.ThemeSwitch} element={<ThemeSwitcher />} />
              <Route path={REACT_ADVANCED_ROUTES.ThemeResponsiveButton} element={<Button />} />
            </Route>
            <Route path="*" element={<h1>Page Not Found!</h1>} />
          </Routes>
        </Layout>
      </ThemeContextProvider>
    </BrowserRouter>
  );
};

export default App;
