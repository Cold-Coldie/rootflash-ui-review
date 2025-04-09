import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  background: linear-gradient(to bottom, #ffffff, #f0f7ff);
  min-height: 100vh;
  padding: 2rem 1rem;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  text-align: center;
  padding: 2rem 1rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #1e3a8a;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  margin: 1rem auto;
  max-width: 600px;
  line-height: 1.6;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
`;

const TwoColumnGrid = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  text-align: left;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
`;

const ContactInfoItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
`;

const IconContainer = styled.div`
  background-color: #dbeafe;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const ContactInfoText = styled.div`
  color: #4b5563;
`;

const ContactInfoLabel = styled.p`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const ContactInfoValue = styled.p`
  line-height: 1.5;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1rem;
`;

const SocialLink = styled.a`
  background-color: #e5e7eb;
  color: #4b5563;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2563eb;
    color: white;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  width: 100%;
  height: 150px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  outline: none;
  resize: vertical;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
  }
`;

const MapContainer = styled.div`
  height: 400px;
  margin-top: 3rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapPlaceholder = styled.div`
  text-align: center;
  color: #6b7280;
`;

const SuccessMessage = styled.div`
  background-color: #dcfce7;
  color: #166534;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const CheckIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.25rem;
`;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <PageContainer>
      <ContactContainer>
        <Section>
          <Heading>Contact Us</Heading>
          <Paragraph>
            Have questions or want to learn more about our services? We'd love
            to hear from you. Fill out the form below or use our contact
            information to get in touch with our team.
          </Paragraph>
        </Section>

        <FormContainer>
          <TwoColumnGrid>
            <ContactInfo>
              <ContactInfoTitle>Get in Touch</ContactInfoTitle>

              <ContactInfoItem>
                <IconContainer>
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="#2563eb"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </IconContainer>
                <ContactInfoText>
                  <ContactInfoLabel>Phone</ContactInfoLabel>
                  <ContactInfoValue>+1 (123) 456-7890</ContactInfoValue>
                </ContactInfoText>
              </ContactInfoItem>

              <ContactInfoItem>
                <IconContainer>
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="#2563eb"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </IconContainer>
                <ContactInfoText>
                  <ContactInfoLabel>Email</ContactInfoLabel>
                  <ContactInfoValue>contact@rootflash.tech</ContactInfoValue>
                </ContactInfoText>
              </ContactInfoItem>

              <ContactInfoItem>
                <IconContainer>
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="#2563eb"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </IconContainer>
                <ContactInfoText>
                  <ContactInfoLabel>Address</ContactInfoLabel>
                  <ContactInfoValue>
                    123 Tech Avenue
                    <br />
                    Innovation District
                    <br />
                  </ContactInfoValue>
                </ContactInfoText>
              </ContactInfoItem>

              <SocialLinks>
                <SocialLink href="#" aria-label="Facebook">
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="Twitter">
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="LinkedIn">
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="Instagram">
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </SocialLink>
              </SocialLinks>
            </ContactInfo>

            <div>
              <ContactInfoTitle>Send us a Message</ContactInfoTitle>
              {isSubmitted && (
                <SuccessMessage>
                  <CheckIcon>✓</CheckIcon>
                  Message sent successfully! We'll get back to you soon.
                </SuccessMessage>
              )}

              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="message">Your Message</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <Button type="submit">Send Message</Button>
              </ContactForm>
            </div>
          </TwoColumnGrid>
        </FormContainer>

        <MapContainer>
          <MapPlaceholder>
            <svg
              width="48"
              height="48"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>
              I have only 24 hours to submit so I will be using a placeholder
              instead of an actual map
            </p>
          </MapPlaceholder>
        </MapContainer>
      </ContactContainer>
    </PageContainer>
  );
};

export default Contact;
