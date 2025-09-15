'use client'

import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material'
import { Email, Phone, LocationOn, LinkedIn, Send as SendIcon } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

const Contact = () => {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'caioeduardojm4@gmail.com',
      link: 'mailto:caioeduardojm4@gmail.com',
      color: '#64748B',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+353 083 83 7462',
      link: 'tel:+353083837462',
      color: '#64748B',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Dublin, Ireland',
      link: '#',
      color: '#64748B',
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/caio-eduardo-597b03191',
      color: '#64748B',
    },
  ]

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                color: '#0A192F',
                fontWeight: 600,
                fontSize: { xs: '2rem', md: '3rem' },
                letterSpacing: '-0.02em',
              }}
            >
              {t('contact.title')}
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                background: 'linear-gradient(135deg, #00BFFF 0%, #10B981 100%)',
                borderRadius: 2,
                mx: 'auto',
                mb: 3,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: '#64748B',
                fontSize: '1.125rem',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              {t('contact.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          {/* Contact Information Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={3} sx={{ mb: 8 }}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      component="a"
                      href={info.link}
                      target="_blank"
                      sx={{
                        textDecoration: 'none',
                        bgcolor: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '12px',
                        height: '100%',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          bgcolor: '#FFFFFF',
                          borderColor: '#CBD5E1',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3, textAlign: 'center' }}>
                        <Box
                          sx={{
                            color: info.color,
                            mb: 2,
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: '#0A192F',
                            fontSize: '0.875rem',
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#64748B',
                            fontSize: '0.75rem',
                            lineHeight: 1.4,
                          }}
                        >
                          {info.value}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* LinkedIn CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: 'center',
                p: { xs: 4, md: 6 },
                bgcolor: '#F8FAFC',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '16px',
                  bgcolor: '#0077B510',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0077B5',
                  mx: 'auto',
                  mb: 3,
                }}
              >
                <LinkedIn sx={{ fontSize: 32 }} />
              </Box>
              
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: '#0A192F',
                  fontSize: '1.25rem',
                }}
              >
                {t('contact.linkedin.title')}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: '#64748B',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  maxWidth: '400px',
                  mx: 'auto',
                }}
              >
                {t('contact.linkedin.description')}
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                startIcon={<SendIcon />}
                href="https://www.linkedin.com/messaging/compose/?recipient=caio-eduardo-597b03191"
                target="_blank"
                sx={{
                  background: 'linear-gradient(135deg, #0077B5 0%, #005885 100%)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '12px',
                  textTransform: 'none',
                  boxShadow: '0 4px 6px -1px rgb(0 119 181 / 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #005885 0%, #004466 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 15px -3px rgb(0 119 181 / 0.4)',
                  },
                }}
              >
                {t('contact.linkedin.button')}
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact