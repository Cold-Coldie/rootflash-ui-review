import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 4rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const OverlayPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.1) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeInUp} 1s ease forwards;
`;

const HeadingLarge = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubheadingHero = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  margin-bottom: 4rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #1e3a8a);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StoryContent = styled.div`
  animation: ${(props) =>
      props.direction === "left" ? slideInLeft : slideInRight}
    0.8s ease forwards;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};
  opacity: 0;

  @media (max-width: 768px) {
    order: ${(props) => (props.direction === "right" ? -1 : 0)};
  }
`;

const StoryImage = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    pointer-events: none;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const StoryHeading = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const StoryText = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 1.5rem;
`;

const ValuesContainer = styled.div`
  background-color: #f8fafc;
  border-radius: 16px;
  padding: 3rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: ${(props) => props.index * 0.15}s;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ValueIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const ValueTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
`;

const ValueDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

const TeamSection = styled(Section)`
  text-align: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamMemberCard = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: ${(props) => props.index * 0.15}s;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const TeamMemberImage = styled.div`
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const TeamMemberInfo = styled.div`
  padding: 1.5rem;
`;

const TeamMemberName = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const TeamMemberTitle = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1rem;
`;

const TeamMemberSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #3b82f6;
    color: white;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background: linear-gradient(to bottom, #3b82f6, #1e3a8a);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineEvent = styled.div`
  display: flex;
  margin-bottom: 3rem;
  opacity: 0;
  animation: ${(props) =>
      props.position === "left" ? slideInRight : slideInLeft}
    0.8s ease forwards;
  animation-delay: ${(props) => props.index * 0.2}s;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};

  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.position === "left" ? "row" : "row")};
    padding-left: 60px;
  }
`;

const TimelineMarker = styled.div`
  flex: 0 0 50%;
  position: relative;
  text-align: ${(props) => (props.position === "left" ? "right" : "left")};
  padding: ${(props) =>
    props.position === "left" ? "0 2rem 0 0" : "0 0 0 2rem"};

  @media (max-width: 768px) {
    flex: 1;
    text-align: left;
    padding: 0;
  }
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #1e3a8a);
  position: absolute;
  top: 0;
  ${(props) => (props.position === "left" ? "right: -10px" : "left: -10px")};

  @media (max-width: 768px) {
    left: -45px;
  }
`;

const TimelineContent = styled.div`
  flex: 0 0 50%;
  padding: ${(props) =>
    props.position === "left" ? "0 0 0 2rem" : "0 2rem 0 0"};

  @media (max-width: 768px) {
    flex: 1;
    padding: 0;
  }
`;

const TimelineYear = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
`;

const TimelineText = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

const BrandsSection = styled(Section)`
  text-align: center;
`;

const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  align-items: center;
`;

const BrandLogo = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease forwards;
  animation-delay: ${(props) => props.index * 0.1}s;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};

  img {
    max-width: 80%;
    max-height: 60px;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 16px;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};
  opacity: 0;
`;

const CTAHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.button`
  background-color: white;
  color: #1e3a8a;
  border: none;
  border-radius: 8px;
  padding: 0.875rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1);
  }
`;

const CircleDecoration = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  z-index: 0;

  &.circle1 {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -100px;
  }

  &.circle2 {
    width: 200px;
    height: 200px;
    bottom: -100px;
    left: 10%;
  }

  &.circle3 {
    width: 150px;
    height: 150px;
    bottom: 30%;
    right: 10%;
  }
`;

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

export const About = () => {
  const navigate = useNavigate();

  const [storyRef, storyInView] = useIntersectionObserver({ threshold: 0.2 });
  const [valuesRef, valuesInView] = useIntersectionObserver({ threshold: 0.1 });
  const [teamRef, teamInView] = useIntersectionObserver({ threshold: 0.1 });
  const [timelineRef, timelineInView] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [brandsRef, brandsInView] = useIntersectionObserver({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useIntersectionObserver({ threshold: 0.2 });

  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative thinking to deliver forward-looking solutions.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and partnership with our clients to achieve shared success.",
    },
    {
      icon: "🔍",
      title: "Excellence",
      description:
        "We pursue the highest standards in every project, focusing on quality, performance, and results.",
    },
    {
      icon: "🛡️",
      title: "Integrity",
      description:
        "We operate with transparency and honesty, building trust through ethical business practices.",
    },
    {
      icon: "🌱",
      title: "Growth",
      description:
        "We foster continuous learning and development, evolving alongside our clients and industry.",
    },
    {
      icon: "💪",
      title: "Resilience",
      description:
        "We adapt to challenges and embrace change, turning obstacles into opportunities for innovation.",
    },
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      title: "Founder & CEO",
      image: "/api/placeholder/250/250",
    },
    {
      name: "Sarah Johnson",
      title: "CTO",
      image: "/api/placeholder/250/250",
    },
    {
      name: "Michael Rodriguez",
      title: "Head of Design",
      image: "/api/placeholder/250/250",
    },
    {
      name: "Priya Patel",
      title: "Lead Developer",
      image: "/api/placeholder/250/250",
    },
  ];

  const timelineEvents = [
    {
      year: "2012",
      title: "Founding",
      description:
        "Rootflash Technology was founded with a vision to create meaningful digital solutions.",
      position: "left",
    },
    {
      year: "2015",
      title: "First Major Client",
      description:
        "Secured our first enterprise client and established Rootflash as a trusted technology partner.",
      position: "right",
    },
    {
      year: "2018",
      title: "International Expansion",
      description:
        "Expanded operations to three new countries, growing our team to over 50 professionals.",
      position: "left",
    },
    {
      year: "2021",
      title: "Technology Innovation Award",
      description:
        "Recognized for outstanding contributions to AI and machine learning solutions.",
      position: "right",
    },
    {
      year: "2024",
      title: "Next Generation Platform",
      description:
        "Launched our flagship product, revolutionizing how businesses leverage technology.",
      position: "left",
    },
  ];

  const partners = Array(6).fill("/api/placeholder/150/60");

  const navigateToContactPage = () => {
    navigate("/contact");
  };

  return (
    <AboutContainer>
      <HeroSection>
        <OverlayPattern />
        <HeroContent>
          <HeadingLarge>About Rootflash</HeadingLarge>
          <SubheadingHero>
            We're a team of passionate technologists driving digital
            transformation through innovative solutions, strategic thinking, and
            relentless creativity.
          </SubheadingHero>
        </HeroContent>
      </HeroSection>

      <Section ref={storyRef}>
        <SectionHeader>
          <SectionTitle>Our Story</SectionTitle>
          <SectionSubtitle>
            The journey that shaped who we are today
          </SectionSubtitle>
        </SectionHeader>

        <StoryGrid>
          <StoryContent direction="left" inView={storyInView}>
            <StoryHeading>From Vision to Reality</StoryHeading>
            <StoryText>
              Founded in 2012, Rootflash Technology began with a clear mission:
              to harness the power of emerging technologies to solve real-world
              business challenges. What started as a small team of innovators
              has grown into a global technology company with a reputation for
              excellence and innovation.
            </StoryText>
            <StoryText>
              Our journey has been defined by our commitment to pushing
              boundaries, embracing change, and delivering solutions that create
              lasting impact for our clients and their customers.
            </StoryText>
          </StoryContent>
          <StoryImage>
            <img src="/api/placeholder/600/400" alt="Rootflash founding team" />
          </StoryImage>
        </StoryGrid>

        <StoryGrid style={{ marginTop: "4rem" }}>
          <StoryImage>
            <img src="/api/placeholder/600/400" alt="Rootflash office" />
          </StoryImage>
          <StoryContent direction="right" inView={storyInView}>
            <StoryHeading>Where We Are Today</StoryHeading>
            <StoryText>
              Today, Rootflash stands at the forefront of technological
              innovation, with a diverse team of experts across multiple
              disciplines. We've successfully delivered hundreds of projects for
              clients ranging from ambitious startups to Fortune 500 companies.
            </StoryText>
            <StoryText>
              Our holistic approach combines technical expertise, creative
              thinking, and strategic insight to create solutions that not only
              meet current needs but anticipate future challenges and
              opportunities.
            </StoryText>
          </StoryContent>
        </StoryGrid>
      </Section>

      <Section ref={valuesRef}>
        <SectionHeader>
          <SectionTitle>Our Values</SectionTitle>
          <SectionSubtitle>
            The principles that guide everything we do
          </SectionSubtitle>
        </SectionHeader>

        <ValuesContainer>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard key={index} index={index} inView={valuesInView}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesContainer>
      </Section>

      <Section ref={timelineRef}>
        <SectionHeader>
          <SectionTitle>Our Journey</SectionTitle>
          <SectionSubtitle>Key milestones in our evolution</SectionSubtitle>
        </SectionHeader>

        <TimelineContainer>
          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={index}
              position={event.position}
              index={index}
              inView={timelineInView}
            >
              <TimelineMarker position={event.position}>
                <TimelineDot position={event.position} />
                {event.position === "left" && (
                  <>
                    <TimelineYear>{event.year}</TimelineYear>
                    <TimelineTitle>{event.title}</TimelineTitle>
                  </>
                )}
              </TimelineMarker>
              <TimelineContent position={event.position}>
                {event.position === "right" && (
                  <>
                    <TimelineYear>{event.year}</TimelineYear>
                    <TimelineTitle>{event.title}</TimelineTitle>
                  </>
                )}
                <TimelineText>{event.description}</TimelineText>
              </TimelineContent>
            </TimelineEvent>
          ))}
        </TimelineContainer>
      </Section>

      <TeamSection ref={teamRef}>
        <SectionHeader>
          <SectionTitle>Our Leadership</SectionTitle>
          <SectionSubtitle>
            Meet the talented individuals driving our vision forward
          </SectionSubtitle>
        </SectionHeader>

        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} index={index} inView={teamInView}>
              <TeamMemberImage>
                <img src={member.image} alt={member.name} />
              </TeamMemberImage>
              <TeamMemberInfo>
                <TeamMemberName>{member.name}</TeamMemberName>
                <TeamMemberTitle>{member.title}</TeamMemberTitle>
                <TeamMemberSocial>
                  <SocialIcon>in</SocialIcon>
                  <SocialIcon>t</SocialIcon>
                  <SocialIcon>f</SocialIcon>
                </TeamMemberSocial>
              </TeamMemberInfo>
            </TeamMemberCard>
          ))}
        </TeamGrid>
      </TeamSection>

      <BrandsSection ref={brandsRef}>
        <SectionHeader>
          <SectionTitle>Our Partners</SectionTitle>
          <SectionSubtitle>
            Trusted by industry leaders worldwide
          </SectionSubtitle>
        </SectionHeader>

        <BrandsGrid>
          {partners.map((partner, index) => (
            <BrandLogo key={index} index={index} inView={brandsInView}>
              <img src={partner} alt={`Partner ${index + 1}`} />
            </BrandLogo>
          ))}
        </BrandsGrid>
      </BrandsSection>

      <CTASection ref={ctaRef}>
        <CircleDecoration className="circle1" />
        <CircleDecoration className="circle2" />
        <CircleDecoration className="circle3" />

        <CTAContent inView={ctaInView}>
          <CTAHeading>Ready to Transform Your Business?</CTAHeading>
          <CTAText>
            Join the many organizations that trust Rootflash Technology to
            deliver innovative solutions that drive growth and success.
          </CTAText>
          <CTAButton onClick={navigateToContactPage}>Get in Touch</CTAButton>
        </CTAContent>
      </CTASection>
    </AboutContainer>
  );
};

export default About;
