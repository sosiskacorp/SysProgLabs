import React from 'react';
import CitySelector from './CitySelector';
import Calculator from './Calculator';
import NumberBaseConverter from './NumberBaseConverter';
import AgeCounter from './AgeCounter';
import NumberList from './NumberList';
import RegistrationForm from './RegistrationForm';
import ProfileEditForm from './ProfileEditForm';
import FinalFormExample from './FinalFormExample';

function App() {
  return (
    <div>
      <h1>React: Forms and Validation</h1>

      <h2>City Selector</h2>
      <CitySelector />

      <h2>Calculator</h2>
      <Calculator />

      <h2>Number Base Converter</h2>
      <NumberBaseConverter />

      <h2>Age Counter</h2>
      <AgeCounter />

      <h2>Number List with Filtering</h2>
      <NumberList />

      <h2>Registration Form</h2>
      <RegistrationForm />

      <h2>Profile Edit Form</h2>
      <ProfileEditForm />

      <h2>Final Form Example</h2>
      <FinalFormExample />
    </div>
  );
}

export default App;