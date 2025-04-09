import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import HeroImageImage from "../assets/images/root-flash-hero.jpg";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = styled.section`
  padding: 4rem 2rem 6rem;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  margin-bottom: 4rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  animation: ${fadeIn} 1s ease forwards;

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.1;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${float} 6s ease-in-out infinite;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 3rem;
  }

  @media (max-width: 768px) {
    grid-row: 1;
    margin-bottom: 2rem;
  }
`;

const CircleDecoration = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  z-index: 0;

  &.circle1 {
    top: -150px;
    right: -100px;
    width: 400px;
    height: 400px;
  }

  &.circle2 {
    bottom: -200px;
    left: -100px;
    width: 500px;
    height: 500px;
  }
`;

const Button = styled.button`
  padding: 0.875rem 2rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:focus {
    outline: none;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: white;
  color: #1e3a8a;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.7);
  margin-left: 1rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e3a8a;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #1e3a8a);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1e293b;
`;

const FeatureDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

const StatsSection = styled.section`
  background-color: #f8fafc;
  padding: 4rem 2rem;
  border-radius: 16px;
  margin: 4rem 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #64748b;
  font-size: 1.125rem;
`;

const TestimonialsSection = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;

  &:before {
    content: '"';
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-size: 4rem;
    color: #3b82f6;
    opacity: 0.1;
    font-family: serif;
    line-height: 1;
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: #334155;
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e2e8f0;
  margin-right: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-weight: 600;
  color: #1e293b;
`;

const AuthorTitle = styled.div`
  font-size: 0.875rem;
  color: #64748b;
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 16px;
  margin: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

const NewsletterSection = styled.section`
  padding: 3rem 0;
`;

const NewsletterContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const NewsletterButton = styled(PrimaryButton)`
  background-color: #1e3a8a;
  color: white;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const newCount = Math.floor((progress / duration) * end);
        setCount(newCount);
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
};

export const Home = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState({
    features: false,
    stats: false,
    testimonials: false,
    cta: false,
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = ["features", "stats", "testimonials", "cta"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navigateToAboutPage = () => {
    navigate("/about");
  };

  const navigateToContactPage = () => {
    navigate("/contact");
  };

  return (
    <>
      <HeroSection>
        <CircleDecoration className="circle1" />
        <CircleDecoration className="circle2" />

        <HeroGrid>
          <HeroContent>
            <h1>Innovate. Transform. Succeed.</h1>
            <p>
              At Rootflash Technology, we deliver cutting-edge solutions that
              empower businesses to thrive in the digital age. Our innovative
              approaches drive growth and transform challenges into
              opportunities.
            </p>
            <ButtonGroup>
              <PrimaryButton>Get Started</PrimaryButton>
              <SecondaryButton onClick={navigateToAboutPage}>
                Learn More
              </SecondaryButton>
            </ButtonGroup>
          </HeroContent>

          <HeroImage>
            <img
              src={HeroImageImage}
              alt="Digital transformation illustration"
            />
          </HeroImage>
        </HeroGrid>
      </HeroSection>

      <FeaturesSection id="features">
        <SectionTitle>What We Offer</SectionTitle>
        <SectionSubtitle>
          Our comprehensive suite of services designed to drive your business
          forward
        </SectionSubtitle>

        <FeaturesGrid
          style={{
            opacity: isVisible.features ? 1 : 0,
            transform: isVisible.features
              ? "translateY(0)"
              : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <FeatureCard>
            <FeatureIcon>AI</FeatureIcon>
            <FeatureTitle>AI Solutions</FeatureTitle>
            <FeatureDescription>
              Leverage the power of artificial intelligence to automate
              processes, gain insights, and make data-driven decisions.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>⚙️</FeatureIcon>
            <FeatureTitle>Custom Software</FeatureTitle>
            <FeatureDescription>
              Tailored software solutions designed to address your specific
              business needs and challenges.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>📱</FeatureIcon>
            <FeatureTitle>Mobile Development</FeatureTitle>
            <FeatureDescription>
              Create seamless mobile experiences that engage users and extend
              your digital presence across all devices.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>☁️</FeatureIcon>
            <FeatureTitle>Cloud Services</FeatureTitle>
            <FeatureDescription>
              Scalable cloud solutions that optimize performance, enhance
              security, and reduce operational costs.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🔒</FeatureIcon>
            <FeatureTitle>Cybersecurity</FeatureTitle>
            <FeatureDescription>
              Comprehensive security strategies to protect your digital assets
              and maintain customer trust.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>📊</FeatureIcon>
            <FeatureTitle>Data Analytics</FeatureTitle>
            <FeatureDescription>
              Transform raw data into actionable insights that drive strategic
              decision-making and business growth.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <StatsSection
        id="stats"
        style={{
          opacity: isVisible.stats ? 1 : 0,
          transform: isVisible.stats ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <StatsGrid>
          <StatItem>
            <StatNumber>{isVisible.stats && <Counter end={250} />}+</StatNumber>
            <StatLabel>Clients Worldwide</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>{isVisible.stats && <Counter end={500} />}+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>{isVisible.stats && <Counter end={98} />}%</StatNumber>
            <StatLabel>Client Satisfaction</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>{isVisible.stats && <Counter end={12} />}+</StatNumber>
            <StatLabel>Years of Experience</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsSection>

      <TestimonialsSection id="testimonials">
        <SectionTitle>What Our Clients Say</SectionTitle>
        <SectionSubtitle>
          Don't just take our word for it - hear from some of our satisfied
          clients
        </SectionSubtitle>

        <TestimonialGrid
          style={{
            opacity: isVisible.testimonials ? 1 : 0,
            transform: isVisible.testimonials
              ? "translateY(0)"
              : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <TestimonialCard>
            <TestimonialText>
              "Rootflash Technology transformed our outdated systems into a
              streamlined, efficient operation. Their team's expertise and
              dedication exceeded our expectations."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorAvatar>
                <img src="/api/placeholder/50/50" alt="Client Avatar" />
              </AuthorAvatar>
              <AuthorInfo>
                <AuthorName>Sarah Johnson</AuthorName>
                <AuthorTitle>CTO, Global Innovations</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>

          <TestimonialCard>
            <TestimonialText>
              "The custom AI solution developed by Rootflash has increased our
              operational efficiency by 40%. Their commitment to quality and
              innovation is unmatched."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorAvatar>
                <img src="/api/placeholder/50/50" alt="Client Avatar" />
              </AuthorAvatar>
              <AuthorInfo>
                <AuthorName>Michael Chen</AuthorName>
                <AuthorTitle>Director, NextGen Solutions</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>

          <TestimonialCard>
            <TestimonialText>
              "Working with Rootflash has been a game-changer for our business.
              Their mobile application development expertise helped us reach new
              markets."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorAvatar>
                <img src="/api/placeholder/50/50" alt="Client Avatar" />
              </AuthorAvatar>
              <AuthorInfo>
                <AuthorName>Emily Rodriguez</AuthorName>
                <AuthorTitle>Founder, TechStart Inc.</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        </TestimonialGrid>
      </TestimonialsSection>

      <CTASection
        id="cta"
        style={{
          opacity: isVisible.cta ? 1 : 0,
          transform: isVisible.cta ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <CircleDecoration className="circle1" />
        <CircleDecoration className="circle2" />

        <CTAContent>
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss how Rootflash Technology can help you achieve your
            goals and stay ahead in today's competitive landscape.
          </p>
          <PrimaryButton onClick={navigateToContactPage}>
            Schedule a Consultation
          </PrimaryButton>
        </CTAContent>
      </CTASection>

      <NewsletterSection>
        <NewsletterContainer>
          <SectionTitle>Stay Updated</SectionTitle>
          <SectionSubtitle>
            Subscribe to our newsletter for the latest tech insights and company
            news
          </SectionSubtitle>

          <NewsletterForm>
            <NewsletterInput
              type="email"
              placeholder="Enter your email address"
            />
            <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
        </NewsletterContainer>
      </NewsletterSection>
    </>
  );
};

export default Home;
