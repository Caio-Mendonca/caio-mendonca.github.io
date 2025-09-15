'use client'

import { Box, Typography, Container, IconButton, Divider } from '@mui/material'
import { LinkedIn, GitHub, Email } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

const Footer = () => {
  const { t } = useLanguage()


  const socialLinks = [
    {
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/caio-eduardo-597b03191',
      color: '#0077B5',
      label: 'LinkedIn',
    },
    {
      icon: <GitHub />,
      href: 'https://github.com/Caio-Mendonca',
      color: '#333333',
      label: 'GitHub',
    },
    {
      icon: <Email />,
      href: 'mailto:caioeduardojm4@gmail.com',
      color: '#EA4335',
      label: 'Email',
    },
  ]

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {/* Logo and Description */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: '#0A192F',
                  mb: 1,
                  letterSpacing: '-0.025em',
                }}
              >
                Caio Mendonça
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#64748B',
                  fontSize: '0.875rem',
                  maxWidth: '300px',
                }}
              >
                Software Engineer & AI Engineer building scalable solutions with Python, React & Node.js
              </Typography>
            </Box>

            {/* Social Links */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#94A3B8',
                  fontSize: '0.875rem',
                  mr: 2,
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                {t('footer.connect')}
              </Typography>
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    href={link.href}
                    target="_blank"
                    aria-label={link.label}
                    sx={{
                      color: '#64748B',
                      bgcolor: 'white',
                      border: '1px solid #E2E8F0',
                      width: 44,
                      height: 44,
                      '&:hover': {
                        color: link.color,
                        borderColor: link.color,
                        bgcolor: `${link.color}05`,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 4px 12px ${link.color}20`,
                      },
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {link.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Box>

          <Divider sx={{ my: 4, borderColor: '#E2E8F0' }} />

          {/* Copyright */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: '#94A3B8',
                fontSize: '0.875rem',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              © 2024 Caio Mendonça. {t('footer.rights')}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#CBD5E1',
                fontSize: '0.75rem',
                textAlign: { xs: 'center', sm: 'right' },
              }}
            >
              {t('footer.built')}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Footer