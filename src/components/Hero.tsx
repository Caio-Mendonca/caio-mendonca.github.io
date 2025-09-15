'use client'

import { Box, Typography, Container, Button, Chip } from '@mui/material'
import { LinkedIn, GitHub, Download, ArrowRight } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

const Hero = () => {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
        position: 'relative',
        pt: { xs: 10, md: 12 },
        pb: { xs: 8, md: 0 },
      }}
    >
      {/* Subtle background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300BFFF' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            textAlign: 'center',
          }}
        >

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                color: '#0A192F',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                fontSize: { xs: '2.5rem', md: '4rem', lg: '4.5rem' },
              }}
            >
              {t('hero.title')}
              <Box
                component="span"
                sx={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #00BFFF 0%, #10B981 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mt: 1,
                }}
              >
                {t('hero.subtitle')}
              </Box>
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: '#64748B',
                fontWeight: 400,
                lineHeight: 1.6,
                fontSize: { xs: '1.125rem', md: '1.5rem' },
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              {t('hero.description')}
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 6,
                color: '#475569',
                fontSize: '1.125rem',
                lineHeight: 1.7,
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              {t('hero.bio')}
            </Typography>
          </motion.div>



          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#94A3B8',
                  fontSize: '0.875rem',
                  mr: 2,
                }}
              >
                {t('hero.connect')}
              </Typography>

              <Button
                variant="text"
                startIcon={<LinkedIn />}
                href="https://www.linkedin.com/in/caio-eduardo-597b03191"
                target="_blank"
                sx={{
                  color: '#64748B',
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    color: '#0077B5',
                    bgcolor: 'rgba(0, 119, 181, 0.05)',
                  },
                }}
              >
                LinkedIn
              </Button>

              <Button
                variant="text"
                startIcon={<GitHub />}
                href="https://github.com/Caio-Mendonca"
                target="_blank"
                sx={{
                  color: '#64748B',
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    color: '#333333',
                    bgcolor: 'rgba(51, 51, 51, 0.05)',
                  },
                }}
              >
                GitHub
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </Box>
  )
}

export default Hero