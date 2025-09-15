'use client'

import { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Select, MenuItem, FormControl } from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  const navItems = [
    { key: 'home', label: t('nav.home'), id: 'hero' },
    { key: 'about', label: t('nav.about'), id: 'about' },
    { key: 'experience', label: t('nav.experience'), id: 'experience' },
    { key: 'projects', label: t('nav.projects'), id: 'projects' },
    { key: 'contact', label: t('nav.contact'), id: 'contact' },
  ]

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'es', label: 'ES' },
    { code: 'it', label: 'IT' },
  ]


  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'white' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2, borderBottom: '1px solid #E2E8F0' }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#64748B' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2, py: 3 }}>
        {navItems.map((item) => (
          <ListItem 
            key={item.key} 
            onClick={() => scrollToSection(item.id)} 
            sx={{ 
              cursor: 'pointer', 
              borderRadius: '8px',
              mb: 1,
              '&:hover': { 
                bgcolor: '#F1F5F9' 
              } 
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ 
                '& .MuiListItemText-primary': {
                  fontWeight: 500,
                  color: '#334155'
                }
              }}
            />
          </ListItem>
        ))}

      </List>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <FormControl size="small" sx={{ ml: 3, minWidth: 70 }}>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              sx={{
                color: '#475569',
                fontSize: '0.875rem',
                fontWeight: 500,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#E2E8F0',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#CBD5E1',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#00BFFF',
                },
                '& .MuiSvgIcon-root': {
                  color: '#64748B',
                },
              }}
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code} sx={{ fontSize: '0.875rem' }}>
                  {lang.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </motion.div>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid rgba(226, 232, 240, 0.6)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 3 }, py: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '1.5rem',
                color: '#0A192F',
                cursor: 'pointer',
                letterSpacing: '-0.025em',
              }}
              onClick={() => scrollToSection('hero')}
            >
              Caio Mendonça
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: '#475569',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    px: 3,
                    py: 1,
                    borderRadius: '8px',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      bgcolor: '#F1F5F9',
                      color: '#0A192F',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}

            <FormControl size="small" sx={{ ml: 3, minWidth: 70 }}>
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                sx={{
                  color: '#475569',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E2E8F0',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#CBD5E1',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00BFFF',
                  },
                  '& .MuiSvgIcon-root': {
                    color: '#64748B',
                  },
                }}
              >
                {languages.map((lang) => (
                  <MenuItem key={lang.code} value={lang.code} sx={{ fontSize: '0.875rem' }}>
                    {lang.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { md: 'none' }, 
              color: '#475569',
              '&:hover': {
                bgcolor: '#F1F5F9'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            border: 'none',
            boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Header