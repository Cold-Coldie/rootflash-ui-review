import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  background: linear-gradient(to bottom, #ffffff, #f0f7ff);
  min-height: 100vh;
`;

const HeroSection = styled.div`
  position: relative;
  overflow: hidden;
  background-color: rgba(30, 58, 138, 0.9);
  padding: 6rem 1rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3.25rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  color: #e0f0ff;
  max-width: 42rem;
  margin: 0 auto;
`;

const PrimaryButton = styled.button`
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  transition: all 0.3s ease;
  margin-top: 2.5rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #2563eb;
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
`;

const TabButton = styled.button`
  padding: 0.75rem 1.25rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "#2563eb" : "#6b7280")};
  border: none;
  background: none;
  border-bottom: ${(props) => (props.active ? "2px solid #2563eb" : "none")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => (props.active ? "#2563eb" : "#3b82f6")};
  }
`;

const ContentSection = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const JobCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  margin-bottom: 1.5rem;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const JobCardContent = styled.div`
  padding: 1.5rem;
`;

const JobCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e3a8a;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${(props) => {
    switch (props.type) {
      case "department":
        return "#dbeafe";
      case "location":
        return "#dcfce7";
      case "jobType":
        return "#f3e8ff";
      default:
        return "#f3f4f6";
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case "department":
        return "#1e40af";
      case "location":
        return "#166534";
      case "jobType":
        return "#7e22ce";
      default:
        return "#4b5563";
    }
  }};
`;

const SecondaryButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const CalloutBox = styled.div`
  background-color: #eff6ff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 3rem;
`;

const CalloutTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const CalloutText = styled.p`
  color: #4b5563;
`;

const InfoText = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const TwoColumnGrid = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FourColumnGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  color: #1e40af;
  margin-bottom: 0.75rem;
`;

const CardText = styled.p`
  color: #4b5563;
`;

const BenefitsCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 3rem;
  padding: 2rem;
`;

const BenefitsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
`;

const BenefitsGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
`;

const IconCircle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background-color: #dbeafe;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const BenefitText = styled.p`
  margin-left: 1rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: #374151;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const FormGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const FileUploadLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactBox = styled.div`
  background-color: #eff6ff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-top: 2rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  color: #4b5563;
`;

const EmailLink = styled.span`
  color: #2563eb;
  font-weight: 500;
`;

const ListItem = styled.li`
  display: flex;
  align-items: start;
  margin-bottom: 0.75rem;
`;

const CheckIcon = styled.span`
  color: #3b82f6;
  margin-right: 0.5rem;
`;

const VisuallyHidden = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const Career = () => {
  const [activeTab, setActiveTab] = useState("openings");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    resume: null,
    message: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0]?.name || null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setFormData({
      name: "",
      email: "",
      position: "",
      resume: null,
      message: "",
    });
  };

  const currentOpenings = [
    {
      id: 1,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / San Francisco",
      type: "Full-time",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Contract",
    },
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technologies.",
    },
    {
      title: "Collaboration",
      description: "We believe great solutions come from diverse perspectives.",
    },
    {
      title: "Excellence",
      description: "We maintain high standards in everything we do.",
    },
    {
      title: "Integrity",
      description: "We operate with transparency and honesty.",
    },
  ];

  const benefits = [
    "Competitive salary package",
    "Flexible remote work policy",
    "Professional development stipend",
    "Health and wellness benefits",
    "Modern equipment and tools",
    "Collaborative team environment",
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Join Our Team at Rootflash</HeroTitle>
          <HeroText>
            Help us build the future of technology with passion, creativity, and
            expert craftsmanship
          </HeroText>
          <PrimaryButton onClick={() => handleTabChange("openings")}>
            View Open Positions
          </PrimaryButton>
        </HeroContent>
      </HeroSection>

      {/* Navigation Tabs */}
      <ContentContainer>
        <TabsContainer>
          <TabButton
            active={activeTab === "openings"}
            onClick={() => handleTabChange("openings")}
          >
            Openings
          </TabButton>
          <TabButton
            active={activeTab === "culture"}
            onClick={() => handleTabChange("culture")}
          >
            Our Culture
          </TabButton>
          <TabButton
            active={activeTab === "benefits"}
            onClick={() => handleTabChange("benefits")}
          >
            Benefits
          </TabButton>
          <TabButton
            active={activeTab === "apply"}
            onClick={() => handleTabChange("apply")}
          >
            Apply
          </TabButton>
        </TabsContainer>

        {/* Content based on active tab */}
        <ContentSection>
          {activeTab === "openings" && (
            <div>
              <SectionTitle>Current Openings</SectionTitle>

              {currentOpenings.map((job) => (
                <JobCard key={job.id}>
                  <JobCardContent>
                    <JobCardHeader>
                      <div>
                        <JobTitle>{job.title}</JobTitle>
                        <TagsContainer>
                          <Tag type="department">{job.department}</Tag>
                          <Tag type="location">{job.location}</Tag>
                          <Tag type="jobType">{job.type}</Tag>
                        </TagsContainer>
                      </div>
                      <SecondaryButton onClick={() => handleTabChange("apply")}>
                        Apply Now
                      </SecondaryButton>
                    </JobCardHeader>
                  </JobCardContent>
                </JobCard>
              ))}

              <CalloutBox>
                <CalloutTitle>Don't see a position that fits?</CalloutTitle>
                <CalloutText>
                  We're always interested in connecting with talented
                  individuals. Send us your resume for future opportunities.
                </CalloutText>
                <SecondaryButton onClick={() => handleTabChange("apply")}>
                  Submit General Application
                </SecondaryButton>
              </CalloutBox>
            </div>
          )}

          {activeTab === "culture" && (
            <div>
              <SectionTitle>Our Culture</SectionTitle>

              <InfoText>
                At Rootflash, we believe that great products are built by great
                teams. Our culture fosters innovation, collaboration, and
                personal growth. We're committed to creating an inclusive
                environment where diverse perspectives are valued and everyone
                can thrive.
              </InfoText>

              <TwoColumnGrid>
                <Card>
                  <CardTitle>What We Offer</CardTitle>
                  <ul>
                    <ListItem>
                      <CheckIcon>✓</CheckIcon>
                      <span>
                        Challenging projects with emerging technologies
                      </span>
                    </ListItem>
                    <ListItem>
                      <CheckIcon>✓</CheckIcon>
                      <span>Mentorship and learning opportunities</span>
                    </ListItem>
                    <ListItem>
                      <CheckIcon>✓</CheckIcon>
                      <span>Work-life balance that respects your time</span>
                    </ListItem>
                    <ListItem>
                      <CheckIcon>✓</CheckIcon>
                      <span>Transparent communication at all levels</span>
                    </ListItem>
                  </ul>
                </Card>

                <Card>
                  <CardTitle>Our Work Environment</CardTitle>
                  <ul>
                    <ListItem>
                      <CheckIcon>✓</CheckIcon>
                      <span>Flexible hybrid work model</span>
                    </ListItem>
                    <ListItem>
                      <CheckIcon>✓</CheckIcon>
                      <span>Modern collaborative tools and workflows</span>
                    </ListItem>
                    <ListItem>
                      <CheckIcon>✓</CheckIcon>
                      <span>Regular team events and social activities</span>
                    </ListItem>
                    <ListItem>
                      <CheckIcon>✓</CheckIcon>
                      <span>Employee-driven initiatives and innovation</span>
                    </ListItem>
                  </ul>
                </Card>
              </TwoColumnGrid>

              <SectionTitle style={{ marginTop: "2rem" }}>
                Our Core Values
              </SectionTitle>
              <FourColumnGrid>
                {coreValues.map((value, index) => (
                  <Card key={index} style={{ textAlign: "center" }}>
                    <CardTitle>{value.title}</CardTitle>
                    <CardText>{value.description}</CardText>
                  </Card>
                ))}
              </FourColumnGrid>
            </div>
          )}

          {activeTab === "benefits" && (
            <div>
              <SectionTitle>Benefits & Perks</SectionTitle>

              <BenefitsCard>
                <BenefitsTitle>Taking Care of Our Team</BenefitsTitle>
                <InfoText>
                  We believe that happy, healthy employees create the best work.
                  That's why we offer a comprehensive benefits package designed
                  to support your professional growth, personal wellbeing, and
                  work-life balance.
                </InfoText>

                <BenefitsGrid>
                  {benefits.map((benefit, index) => (
                    <BenefitItem key={index}>
                      <IconCircle>
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          stroke="#3b82f6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </IconCircle>
                      <BenefitText>{benefit}</BenefitText>
                    </BenefitItem>
                  ))}
                </BenefitsGrid>
              </BenefitsCard>

              <CalloutBox
                style={{ backgroundColor: "#eff6ff", padding: "2rem" }}
              >
                <BenefitsTitle>Growth & Development</BenefitsTitle>
                <CalloutText style={{ marginBottom: "1.5rem" }}>
                  We're committed to helping you advance your career and develop
                  new skills.
                </CalloutText>

                <TwoColumnGrid style={{ marginTop: "1rem" }}>
                  <Card>
                    <CardTitle>Learning Budget</CardTitle>
                    <CardText>
                      Annual budget for courses, conferences, and learning
                      materials
                    </CardText>
                  </Card>

                  <Card>
                    <CardTitle>Mentorship Program</CardTitle>
                    <CardText>
                      One-on-one guidance from experienced team members
                    </CardText>
                  </Card>
                </TwoColumnGrid>
              </CalloutBox>
            </div>
          )}

          {activeTab === "apply" && (
            <div>
              <SectionTitle>Apply to Join Our Team</SectionTitle>

              <FormContainer>
                <InfoText>
                  We're excited about your interest in joining Rootflash! Please
                  fill out the form below, and our team will review your
                  application.
                </InfoText>

                <form onSubmit={handleSubmit}>
                  <FormGrid>
                    <FormGroup>
                      <Label htmlFor="name">Full Name*</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="email">Email Address*</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </FormGroup>
                  </FormGrid>

                  <FormGroup>
                    <Label htmlFor="position">
                      Position You're Applying For*
                    </Label>
                    <Select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a position</option>
                      <option value="Full Stack Developer">
                        Full Stack Developer
                      </option>
                      <option value="UX/UI Designer">UX/UI Designer</option>
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="General Application">
                        General Application
                      </option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="resume">Resume/CV*</Label>
                    <FileUploadLabel>
                      <span>
                        {formData.resume
                          ? formData.resume
                          : "Upload PDF or DOCX"}
                      </span>
                      <VisuallyHidden
                        id="resume"
                        name="resume"
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.docx"
                      />
                    </FileUploadLabel>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="message">
                      Why are you interested in joining Rootflash?
                    </Label>
                    <TextArea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </FormGroup>

                  <ButtonContainer>
                    <PrimaryButton type="submit">
                      Submit Application
                    </PrimaryButton>
                  </ButtonContainer>
                </form>
              </FormContainer>

              <ContactBox>
                <ContactTitle>Have questions?</ContactTitle>
                <ContactText>
                  Contact our talent team at{" "}
                  <EmailLink>careers@rootflash.tech</EmailLink>
                </ContactText>
              </ContactBox>
            </div>
          )}
        </ContentSection>
      </ContentContainer>
    </PageContainer>
  );
};

export default Career;
