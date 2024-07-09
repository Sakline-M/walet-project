/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import ModalStep1 from '../../components/ModalStep1';
import ModalStep2 from '../../components/ModalStep2';
import ModalStep3 from '../../components/ModalStep3';
import ModalStep4 from '../../components/ModalStep4';
import ModalStep5 from '../../components/ModalStep5';
import ModalStep6 from '../../components/ModalStep6';
import ModalStep7 from '../../components/ModalStep7';
import ModalStep8 from '../../components/ModalStep8';
import ModalStep9 from '../../components/ModalStep9';
import ModalSummary from '../../components/ModaSummary';
import './homepage.scss'
import { useState } from 'react';

const HomePage = () => {
  const [step, setStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({
    option1: [],
  });

  const handleOptionSelect = (optionKey, optionValue) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [optionKey]: prevState[optionKey].includes(optionValue)
        ? prevState[optionKey].filter(opt => opt !== optionValue)
        : [...prevState[optionKey], optionValue],
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const updateOptions = (newOptions) => {
    setSelectedOptions(newOptions);
  };

  const calculateProgress = () => {
    const totalSteps = 10;
    return (step / totalSteps) * 100;
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return <ModalStep1 onSelect={handleOptionSelect} nextStep={nextStep} progress={calculateProgress()} step={step} selectedOptions={selectedOptions.option1} />;
      case 2:
        return <ModalStep2 onSelect={handleOptionSelect} nextStep={nextStep} progress={calculateProgress()} step={step} selectedOptions={selectedOptions.option1} />;
        case 3:
          return <ModalStep3 onSelect={handleOptionSelect} nextStep={nextStep} progress={calculateProgress()} step={step} selectedOptions={selectedOptions.option1} />;
      case 4:
        return <ModalStep4 onSelect={handleOptionSelect} nextStep={nextStep} progress={calculateProgress()} step={step} selectedOptions={selectedOptions.option1} />;
      case 5:
        return <ModalStep5 onSelect={handleOptionSelect} nextStep={nextStep} progress={calculateProgress()} step={step} selectedOptions={selectedOptions.option1} />;
      case 6:
        return <ModalStep6 onSelect={handleOptionSelect} nextStep={nextStep} progress={calculateProgress()} step={step} selectedOptions={selectedOptions.option1} />;
      case 7:
        return <ModalStep7 onSelect={handleOptionSelect} nextStep={nextStep} progress={calculateProgress()} step={step} selectedOptions={selectedOptions.option1} />;
        case 8:
          return <ModalStep8 onSelect={handleOptionSelect} nextStep={nextStep} progress={calculateProgress()} step={step} selectedOptions={selectedOptions.option1} />;
        case 9:
          return <ModalStep9 onSelect={handleOptionSelect} nextStep={nextStep} progress={calculateProgress()} step={step} selectedOptions={selectedOptions.option1} />;
      case 10:
        return <ModalSummary selectedOptions={selectedOptions} updateOptions={updateOptions} progress={calculateProgress()} step={step} />;
      default:
        return null;
    }
  };
  return (
    <div className="App bg-primary min-h-screen flex items-center justify-center text-white">
    {renderCurrentStep()}
  </div>
  )
}

export default HomePage