import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import the necessary images and gifs
import fullPhoto from '../../assets/her2.jpg'; 
import cakeGif2 from '../../assets/cake2.gif';

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 0 30px;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 968px) {
    flex-direction: column;
    padding: 0 15px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 968px) {
    padding: 20px;
    border-radius: 20px 20px 0 0; /* Adjust radius for mobile */
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding: 40px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 968px) {
    padding: 20px;
    border-radius: 0 0 20px 20px; /* Adjust radius for mobile */
  }
`;

const FullImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 968px) {
    height: auto; /* Make sure the image resizes correctly on mobile */
  }
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 968px) {
    font-size: 1.5rem;
  }
`;

const MotivationalText = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;

  @media (max-width: 968px) {
    font-size: 1rem;
  }
`;

const Gif = styled.img`
  max-width: 200px;
  border-radius: 10px;
  margin-top: 20px;

  @media (max-width: 968px) {
    max-width: 150px;
  }
`;





const Additional = () => {
  const motivationalQuote = `
    Entering your mid-20s can be challenging, but it's also a time of immense growth and self-discovery.
    Feeling uncertain or overwhelmed is natural. Your 20s to 30s are a time of exploration and change.
    It's okay not to have all the answers right now. Each challenge you face is shaping you into a stronger,
    wiser version of yourself.<br><br>
    Every day is a chance to learn, grow, and become the best version of yourself. Your path is uniquely yours. Don't be afraid to take detours, try new things,
    or even start over. Some of life's most beautiful journeys begin with a change in direction.
    Surround yourself with positive influences and don't hesitate to seek support when you need it. Remember, asking for help is a sign of strength, not weakness. You don't have to navigate this journey alone.<br><br>
    Keep pushing forward, dreaming big, and believing in yourself. Most importantly, be kind to yourself.
    Celebrate your achievements, no matter how small they may seem. Learn from your mistakes, but don't dwell
    on them. You're doing better than you think you are. Do your best and let Allah do the rest.
  `;

  return (
    <PageContainer>
      <LeftSection>
        <Title>Quarter-Life Crisis (?)</Title>
        <MotivationalText dangerouslySetInnerHTML={{ __html: motivationalQuote }} />
        <Gif src={cakeGif2} alt="Gif" />
      </LeftSection>
      <RightSection>
        <FullImage src={fullPhoto} alt="Full Photo" />
      </RightSection>
    </PageContainer>
  );
};

export default Additional;
