'use client'

import { Box, Typography, Container, Grid, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

const About = () => {
  const { t } = useLanguage()

  const skills = [
    // Core Technologies
    { name: 'Python', category: 'Backend', level: 'Expert' },
    { name: 'FastAPI', category: 'Backend', level: 'Expert' },
    { name: 'Django', category: 'Backend', level: 'Advanced' },
    { name: 'Node.js', category: 'Backend', level: 'Advanced' },
    { name: 'GraphQL', category: 'Backend', level: 'Advanced' },
    { name: 'REST APIs', category: 'Backend', level: 'Expert' },
    
    { name: 'React', category: 'Frontend', level: 'Expert' },
    { name: 'Next.js', category: 'Frontend', level: 'Advanced' },
    { name: 'React Native', category: 'Frontend', level: 'Advanced' },
    { name: 'TypeScript', category: 'Frontend', level: 'Advanced' },
    { name: 'Vue.js', category: 'Frontend', level: 'Intermediate' },
    
    { name: 'PostgreSQL', category: 'Database', level: 'Expert' },
    { name: 'MongoDB', category: 'Database', level: 'Advanced' },
    { name: 'Redis', category: 'Database', level: 'Advanced' },
    { name: 'MySQL', category: 'Database', level: 'Advanced' },
    
    { name: 'Docker', category: 'DevOps', level: 'Expert' },
    { name: 'Kubernetes', category: 'DevOps', level: 'Advanced' },
    { name: 'AWS', category: 'DevOps', level: 'Advanced' },
    { name: 'CI/CD', category: 'DevOps', level: 'Advanced' },
  ]

  const categories = [
    { key: 'Backend', label: t('about.skills.backend') },
    { key: 'Frontend', label: t('about.skills.frontend') },
    { key: 'Database', label: t('about.skills.database') },
    { key: 'DevOps', label: t('about.skills.devops') },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return '#00BFFF'
      case 'Advanced': return '#10B981'
      case 'Intermediate': return '#64748B'
      default: return '#94A3B8'
    }
  }

  return (
    <Box
      id="about"
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
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              {t('about.skills.title')}
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                background: 'linear-gradient(135deg, #00BFFF 0%, #10B981 100%)',
                borderRadius: 2,
                mx: 'auto',
              }}
            />
          </Box>
        </motion.div>

        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: '#475569',
                  mb: 4,
                }}
              >
                {t('about.description')}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: '#475569',
                  mb: 4,
                }}
              >
                I have solid experience in microservices architecture, RESTful and GraphQL API development, 
                systems integration, and DevOps practices implementation. I work daily with tools like 
                RabbitMQ, Redis, AWS SQS for asynchronous communication, and Docker/Kubernetes for container orchestration.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: '#475569',
                }}
              >
                Based in Dublin, Ireland, I'm always looking for new challenges that allow me to apply 
                my passion for technology and contribute to innovative solutions.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {categories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#0A192F',
                          fontWeight: 600,
                          fontSize: '1.125rem',
                          mb: 3,
                        }}
                      >
                        {category.label}
                      </Typography>
                      
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 2,
                        }}
                      >
                        {skills
                          .filter(skill => skill.category === category.key)
                          .map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: index * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <Chip
                                label={
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography
                                      sx={{
                                        fontWeight: 500,
                                        fontSize: '0.875rem',
                                      }}
                                    >
                                      {skill.name}
                                    </Typography>
                                    <Box
                                      sx={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: '50%',
                                        bgcolor: getLevelColor(skill.level),
                                      }}
                                    />
                                  </Box>
                                }
                                sx={{
                                  bgcolor: 'white',
                                  color: '#475569',
                                  border: '1px solid #E2E8F0',
                                  fontWeight: 500,
                                  fontSize: '0.875rem',
                                  height: 40,
                                  px: 3,
                                  '&:hover': {
                                    borderColor: getLevelColor(skill.level),
                                    bgcolor: `${getLevelColor(skill.level)}08`,
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                  },
                                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                              />
                            </motion.div>
                          ))}
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About