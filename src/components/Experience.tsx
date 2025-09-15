'use client'

import { Box, Typography, Container, Card, CardContent, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

const Experience = () => {
  const { t } = useLanguage()

  const getExperiences = () => [
    {
      title: t('experience.trustpanel.title'),
      company: t('experience.trustpanel.company'),
      location: t('experience.trustpanel.location'),
      period: t('experience.trustpanel.period'),
      description: [
        t('experience.trustpanel.desc1'),
        t('experience.trustpanel.desc2'),
        t('experience.trustpanel.desc3'),
        t('experience.trustpanel.desc4'),
        t('experience.trustpanel.desc5'),
        t('experience.trustpanel.desc6'),
      ],
      technologies: ['Python', 'Django Rest', 'React', 'Vite', 'PostgreSQL', 'CI/CD', 'Unit Testing', 'Integration Testing', 'Agile'],
    },
    {
      title: t('experience.jmd.title'),
      company: t('experience.jmd.company'),
      location: t('experience.jmd.location'),
      period: t('experience.jmd.period'),
      description: [
        t('experience.jmd.desc1'),
        t('experience.jmd.desc2'),
        t('experience.jmd.desc3'),
        t('experience.jmd.desc4'),
      ],
      technologies: ['Python', 'Django', 'FastAPI', 'React', 'React Native', 'Next.js', 'Docker', 'Google Cloud', 'Azure'],
    },
    {
      title: t('experience.devforbusiness.title'),
      company: t('experience.devforbusiness.company'),
      location: t('experience.devforbusiness.location'),
      period: t('experience.devforbusiness.period'),
      description: [
        t('experience.devforbusiness.desc1'),
        t('experience.devforbusiness.desc2'),
        t('experience.devforbusiness.desc3'),
        t('experience.devforbusiness.desc4'),
      ],
      technologies: ['Vue.js', 'React Native', 'JavaScript', 'Mobile Development', 'UI/UX', 'Process Automation'],
    },
    {
      title: t('experience.coplan.title'),
      company: t('experience.coplan.company'),
      location: t('experience.coplan.location'),
      period: t('experience.coplan.period'),
      description: [
        t('experience.coplan.desc1'),
        t('experience.coplan.desc2'),
        t('experience.coplan.desc3'),
        t('experience.coplan.desc4'),
      ],
      technologies: ['Genexus', 'Java', 'PostgreSQL', 'SQL Server', 'HTML', 'CSS', 'Linux', 'Git', 'Jenkins'],
    },
    {
      title: t('experience.nightapp.title'),
      company: t('experience.nightapp.company'),
      location: t('experience.nightapp.location'),
      period: t('experience.nightapp.period'),
      description: [
        t('experience.nightapp.desc1'),
        t('experience.nightapp.desc2'),
        t('experience.nightapp.desc3'),
        t('experience.nightapp.desc4'),
      ],
      technologies: ['Node.js', 'Vue.js', 'React', 'MySQL', 'PostgreSQL', 'HTML', 'CSS', 'Linux', 'Git'],
    },
  ]

  const experiences = getExperiences()

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 8,
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            {t('experience.title')}
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              top: 0,
              bottom: 0,
              width: '2px',
              bgcolor: 'primary.light',
              transform: { md: 'translateX(-50%)' },
              zIndex: 0,
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  mb: 6,
                  display: 'flex',
                  justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-end' : 'flex-start' },
                  pl: { xs: 6, md: 0 },
                }}
              >
                {/* Timeline Dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '11px', md: '50%' },
                    top: '24px',
                    width: '18px',
                    height: '18px',
                    bgcolor: 'primary.main',
                    borderRadius: '50%',
                    transform: { md: 'translateX(-50%)' },
                    zIndex: 1,
                    border: '4px solid',
                    borderColor: 'background.paper',
                  }}
                />

                <Card
                  sx={{
                    maxWidth: { xs: '100%', md: '45%' },
                    width: '100%',
                    ml: { md: index % 2 === 0 ? 0 : 'auto' },
                    mr: { md: index % 2 === 0 ? 'auto' : 0 },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 1,
                      }}
                    >
                      {exp.title}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        color: 'text.primary',
                        mb: 0.5,
                      }}
                    >
                      {exp.company}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 2,
                        fontStyle: 'italic',
                      }}
                    >
                      {exp.location} • {exp.period}
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                      {exp.description.map((item, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            mb: 1,
                            lineHeight: 1.6,
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                      }}
                    >
                      {exp.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'primary.light',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Experience