// components/LanguageToggle.jsx
import { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../context/LanguageContext";

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #2d81ff;
  }

  &:checked + span:before {
    transform: translateX(30px);
    content: "EN";
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "PT";
    height: 26px;
    width: 26px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    color: #333;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <SwitchContainer>
      <SwitchInput
        type="checkbox"
        onChange={toggleLanguage}
        checked={language === "en"}
      />
      <Slider />
    </SwitchContainer>
  );
};

export default LanguageToggle;
