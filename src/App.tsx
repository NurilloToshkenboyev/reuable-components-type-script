import React, { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Select from './components/Select/Select';
import { toast } from 'react-toastify';

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  
  const handleButtonClick = () => {
    toast.success('Button clicked!');
    setName(''); 
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6"> Components</h1>
      <Input
        label="Ism"
        placeholder="Ismingizni kiriting"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Select
        label="Tanlang"
        options={[
          { value: 'option1', label: 'Variant 1' },
          { value: 'option2', label: 'Variant 2' },
          { value: 'option3', label: 'Variant 3' },
        ]}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      <Button
        onClick={handleButtonClick}
        variant="primary"
        size="medium"
      >
        Click Me
      </Button>
    </div>
  );
};

export default App;

