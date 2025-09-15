'use client'

import { useState } from 'react'
import { Box, Typography, Container, Grid, Card, CardContent, Button, Chip, Modal, IconButton, Divider } from '@mui/material'
import { GitHub, Launch, ArrowForward, Close, CalendarToday, Group, TrendingUp } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  technologies: string[]
  category: string
  impact: string
  duration: string
  team: string
  results: string[]
  challenges: string[]
  images: string[]
  github: string
  demo: string
  keyFeatures?: string
}

const Projects = () => {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 'real-estate',
      title: 'Real Estate Pricing System',
      description: 'Enterprise system that reduced property pricing process from 15 days to 4 hours. Built with microservices architecture, featuring automated valuation models and real-time market analysis.',
      fullDescription: 'Comprehensive enterprise-grade real estate pricing system that revolutionized property valuation processes. The system integrates multiple data sources, implements machine learning algorithms for automated property valuation, and provides real-time market analysis capabilities.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Google Cloud', 'Docker', 'Redis', 'Celery', 'React'],
      category: 'Enterprise Software',
      impact: '96% time reduction',
      duration: '8 months',
      team: '5 developers',
      results: [
        'Reduced pricing process from 15 days to 4 hours (96% improvement)',
        'Automated 80% of manual valuation tasks',
        'Increased pricing accuracy by 35%',
        'Processed over 10,000 property valuations',
        'Saved company $500K annually in operational costs'
      ],
      challenges: [
        'Integration with multiple legacy systems',
        'Real-time data synchronization across microservices',
        'Implementing ML models for property valuation',
        'Ensuring 99.9% system uptime for critical business operations'
      ],
      images: [
        'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      github: 'https://github.com/Caio-Mendonca',
      demo: '#',
    },
    {
      id: 'delivery-app',
      title: 'Condominium Delivery App',
      description: 'Full-stack mobile and web application for private condominium restaurant delivery. Features real-time order tracking, payment integration, and comprehensive user management.',
      fullDescription: 'Complete delivery ecosystem designed specifically for private condominiums. The platform includes mobile apps for customers and delivery personnel, web dashboard for restaurant management, and admin panel for system oversight.',
      technologies: ['React Native', 'React', 'FastAPI', 'PostgreSQL', 'Docker', 'Stripe', 'WebSocket', 'Redis'],
      category: 'Mobile & Web App',
      impact: '500+ active users',
      duration: '6 months',
      team: '3 developers',
      results: [
        'Successfully launched in 3 condominiums',
        'Achieved 500+ active monthly users',
        'Processed over 2,000 orders in first quarter',
        'Average order completion time: 25 minutes',
        '4.8/5 user satisfaction rating'
      ],
      challenges: [
        'Real-time order tracking implementation',
        'Payment gateway integration and security',
        'Optimizing delivery routes within condominium complexes',
        'Managing concurrent orders during peak hours'
      ],
      images: [
        'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      github: 'https://github.com/Caio-Mendonca',
      demo: '#',
    },
    {
      id: 'erp-crm',
      title: 'ERP-CRM Integration Platform',
      description: 'Microservices architecture for seamless ERP and CRM system integration. Implements asynchronous communication with RabbitMQ and deployed using Kubernetes orchestration.',
      fullDescription: 'Sophisticated integration platform that bridges multiple enterprise systems, enabling seamless data flow between ERP, CRM, and other business applications. Built with event-driven architecture and cloud-native principles.',
      technologies: ['Python', 'FastAPI', 'RabbitMQ', 'Kubernetes', 'Docker', 'MongoDB', 'Redis', 'Grafana'],
      category: 'System Integration',
      impact: 'Multi-system sync',
      duration: '10 months',
      team: '4 developers',
      results: [
        'Integrated 5 different enterprise systems',
        'Achieved 99.95% data synchronization accuracy',
        'Reduced manual data entry by 90%',
        'Processed over 1M transactions monthly',
        'Improved business process efficiency by 60%'
      ],
      challenges: [
        'Handling different data formats and schemas',
        'Ensuring data consistency across systems',
        'Implementing fault-tolerant message queuing',
        'Managing complex deployment orchestration'
      ],
      images: [
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      github: 'https://github.com/Caio-Mendonca',
      demo: '#',
    },
  ]

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: '#F8FAFC',
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
              {t('projects.title')}
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
              {t('projects.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
                      borderColor: '#CBD5E1',
                    },
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Image */}
                  <Box
                    sx={{
                      height: 200,
                      backgroundImage: `url(${project.images[0]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        right: 16,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      }}
                    >
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(0, 191, 255, 0.9)',
                          color: 'white',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                        }}
                      />
                      <Chip
                        label={project.impact}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(16, 185, 129, 0.9)',
                          color: 'white',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                  </Box>

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        lineHeight: 1.3,
                        mb: 2,
                        color: '#0A192F',
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#475569',
                        lineHeight: 1.6,
                        mb: 3,
                        flexGrow: 1,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        mb: 3,
                      }}
                    >
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: '#F1F5F9',
                            color: '#475569',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            height: 28,
                          }}
                        />
                      ))}
                      {project.technologies.length > 4 && (
                        <Chip
                          label={`+${project.technologies.length - 4}`}
                          size="small"
                          sx={{
                            bgcolor: '#E2E8F0',
                            color: '#64748B',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            height: 28,
                          }}
                        />
                      )}
                    </Box>

                    <Button
                      variant="contained"
                      endIcon={<ArrowForward />}
                      fullWidth
                      sx={{
                        background: 'linear-gradient(135deg, #00BFFF 0%, #10B981 100%)',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        py: 1.5,
                        '&:hover': {
                          background: 'linear-gradient(135deg, #0099CC 0%, #059669 100%)',
                        },
                      }}
                    >
                      {t('projects.viewDetails')}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              variant="body1"
              sx={{
                color: '#64748B',
                fontSize: '1rem',
                fontStyle: 'italic',
              }}
            >
              {t('projects.moreInfo')}
            </Typography>
          </Box>
        </motion.div>
      </Container>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Modal
            open={!!selectedProject}
            onClose={handleCloseModal}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '100%',
                maxWidth: '900px',
                maxHeight: '90vh',
                overflow: 'auto',
              }}
            >
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
                  position: 'relative',
                }}
              >
                {/* Close Button */}
                <IconButton
                  onClick={handleCloseModal}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    zIndex: 10,
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 1)',
                    },
                  }}
                >
                  <Close />
                </IconButton>

                {/* Project Images */}
                <Box
                  sx={{
                    height: 300,
                    position: 'relative',
                    borderRadius: '20px 20px 0 0',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      backgroundImage: `url(${selectedProject.images[0]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {selectedProject.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Chip
                        label={selectedProject.category}
                        sx={{
                          bgcolor: 'rgba(0, 191, 255, 0.9)',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                      <Chip
                        label={selectedProject.impact}
                        sx={{
                          bgcolor: 'rgba(16, 185, 129, 0.9)',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ p: 4 }}>
                  {/* Project Info */}
                  <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CalendarToday sx={{ fontSize: 20, color: '#64748B' }} />
                        <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 500 }}>
                          Duração
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: '#0A192F' }}>
                        {selectedProject.duration}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Group sx={{ fontSize: 20, color: '#64748B' }} />
                        <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 500 }}>
                          Equipe
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: '#0A192F' }}>
                        {selectedProject.team}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <TrendingUp sx={{ fontSize: 20, color: '#64748B' }} />
                        <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 500 }}>
                          Impacto
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: '#0A192F' }}>
                        {selectedProject.impact}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Divider sx={{ mb: 4 }} />

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#475569',
                      lineHeight: 1.7,
                      mb: 4,
                      fontSize: '1.1rem',
                    }}
                  >
                    {selectedProject.fullDescription}
                  </Typography>

                  {/* Technologies */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: '#0A192F',
                      }}
                    >
                      {t('projects.modal.technologies')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {selectedProject.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            bgcolor: '#F1F5F9',
                            color: '#475569',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Results */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: '#0A192F',
                      }}
                    >
                      {t('projects.modal.results')}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {selectedProject.results.map((result, index) => (
                        <Typography
                          key={index}
                          component="li"
                          variant="body2"
                          sx={{
                            color: '#475569',
                            mb: 1,
                            lineHeight: 1.6,
                          }}
                        >
                          {result}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  {/* Challenges */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: '#0A192F',
                      }}
                    >
                      {t('projects.modal.challenges')}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {selectedProject.challenges.map((challenge, index) => (
                        <Typography
                          key={index}
                          component="li"
                          variant="body2"
                          sx={{
                            color: '#475569',
                            mb: 1,
                            lineHeight: 1.6,
                          }}
                        >
                          {challenge}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  {/* Additional Project Details */}
                  <Box
                    sx={{
                      bgcolor: '#F8FAFC',
                      borderRadius: '12px',
                      p: 3,
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: '#0A192F',
                      }}
                    >
                      {t('projects.modal.keyFeatures')}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#475569',
                        lineHeight: 1.7,
                        mb: 2,
                      }}
                    >
                      {selectedProject.keyFeatures || t('projects.modal.keyFeaturesDefault')}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: '#10B981',
                          }}
                        />
                        <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 500 }}>
                          {t('projects.modal.status')}: {t('projects.modal.completed')}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: '#00BFFF',
                          }}
                        />
                        <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 500 }}>
                          {t('projects.modal.type')}: {selectedProject.category}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default Projects