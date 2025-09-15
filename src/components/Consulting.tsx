'use client'

import { useState } from 'react'
import { Box, Typography, Container, Grid, Card, CardContent, Chip, Modal, IconButton, Divider } from '@mui/material'
import { Security, Analytics, CheckCircle, TrendingUp, Speed, Shield, Close, PhoneAndroid, Laptop, CalendarToday, Group, Business } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

interface ConsultingProject {
  id: string
  title: string
  client: string
  location: string
  period: string
  category: string
  description: string
  fullDescription: string
  objectives: string[]
  results: string[]
  technologies: string[]
  platforms: {
    mobile?: {
      title: string
      description: string
      image: string
    }
    web?: {
      title: string
      description: string
      image: string
    }
  }
  icon: React.ReactNode
  color: string
  bgColor: string
}

const Consulting = () => {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<ConsultingProject | null>(null)

  const getConsultingProjects = (): ConsultingProject[] => [
    {
      id: 'panic-button',
      title: t('consulting.panicButton.title'),
      client: t('consulting.panicButton.client'),
      location: t('consulting.panicButton.location'),
      period: t('consulting.panicButton.period'),
      category: t('consulting.panicButton.category'),
      description: t('consulting.panicButton.description'),
      fullDescription: 'Sistema completo de segurança pessoal desenvolvido para a Sinop Segforte, incluindo aplicativo mobile para usuários finais e painel web administrativo para operadores da central de monitoramento. O sistema permite acionamento de emergência com um toque, enviando localização GPS precisa e dados do usuário instantaneamente para a central 24h.',
      objectives: [
        t('consulting.panicButton.obj1'),
        t('consulting.panicButton.obj2'),
        t('consulting.panicButton.obj3'),
        t('consulting.panicButton.obj4'),
      ],
      results: [
        t('consulting.panicButton.result1'),
        t('consulting.panicButton.result2'),
        t('consulting.panicButton.result3'),
        t('consulting.panicButton.result4'),
      ],
      technologies: ['React Native', 'Node.js', 'WebSocket', 'GPS Tracking', 'Push Notifications', 'MongoDB'],
      platforms: {
        mobile: {
          title: 'App Mobile - Usuário Final',
          description: 'Interface intuitiva para acionamento de emergência com um toque, visualização de status da conexão e histórico de acionamentos.',
          image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        web: {
          title: 'Painel Web - Central de Monitoramento',
          description: 'Dashboard completo para operadores com mapa em tempo real, gestão de usuários, histórico de ocorrências e relatórios detalhados.',
          image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      icon: <Security />,
      color: '#EF4444',
      bgColor: '#FEF2F2',
    },
    {
      id: 'fraud-analysis',
      title: t('consulting.fraudAnalysis.title'),
      client: t('consulting.fraudAnalysis.client'),
      location: t('consulting.fraudAnalysis.location'),
      period: t('consulting.fraudAnalysis.period'),
      category: t('consulting.fraudAnalysis.category'),
      description: t('consulting.fraudAnalysis.description'),
      fullDescription: 'Sistema inteligente de análise de fraudes desenvolvido para a Urbano Norte, utilizando algoritmos de Machine Learning para detectar padrões suspeitos em corridas de transporte urbano. O sistema analisa em tempo real dados como rotas, horários, valores e comportamentos para identificar possíveis fraudes.',
      objectives: [
        t('consulting.fraudAnalysis.obj1'),
        t('consulting.fraudAnalysis.obj2'),
        t('consulting.fraudAnalysis.obj3'),
        t('consulting.fraudAnalysis.obj4'),
      ],
      results: [
        t('consulting.fraudAnalysis.result1'),
        t('consulting.fraudAnalysis.result2'),
        t('consulting.fraudAnalysis.result3'),
        t('consulting.fraudAnalysis.result4'),
      ],
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'PostgreSQL', 'FastAPI', 'Pandas'],
      platforms: {
        web: {
          title: 'Dashboard Analítico',
          description: 'Interface completa com gráficos em tempo real, alertas de fraude, relatórios detalhados e ferramentas de análise de dados.',
          image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      },
      icon: <Analytics />,
      color: '#8B5CF6',
      bgColor: '#F3F4F6',
    },
  ]

  const projects = getConsultingProjects()

  const handleProjectClick = (project: ConsultingProject) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <Box
      id="consulting"
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
              {t('consulting.title')}
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
              {t('consulting.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  onClick={() => handleProjectClick(project)}
                  sx={{
                    cursor: 'pointer',
                    border: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
                      borderColor: '#CBD5E1',
                    },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    {/* Header Section */}
                    <Box
                      sx={{
                        background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`,
                        p: 4,
                        borderBottom: '1px solid #E2E8F0',
                      }}
                    >
                      <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={8}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: '12px',
                                bgcolor: project.bgColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: project.color,
                              }}
                            >
                              {project.icon}
                            </Box>
                            <Box>
                              <Typography
                                variant="h4"
                                sx={{
                                  fontWeight: 600,
                                  color: '#0A192F',
                                  fontSize: '1.5rem',
                                  lineHeight: 1.2,
                                }}
                              >
                                {project.title}
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{
                                  color: '#64748B',
                                  fontSize: '1rem',
                                  fontWeight: 500,
                                }}
                              >
                                {project.client}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                            <Chip
                              label={project.category}
                              sx={{
                                bgcolor: project.color,
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                mb: 1,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#64748B',
                                fontSize: '0.875rem',
                                display: 'block',
                              }}
                            >
                              {project.location} • {project.period}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>

                    {/* Content Section */}
                    <Box sx={{ p: 4 }}>
                      <Grid container spacing={4}>
                        {/* Description */}
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#475569',
                              fontSize: '1.125rem',
                              lineHeight: 1.7,
                              mb: 4,
                            }}
                          >
                            {project.description}
                          </Typography>
                        </Grid>

                        {/* Objectives and Results */}
                        <Grid item xs={12} md={6}>
                          <Box sx={{ mb: 4 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                mb: 2,
                                color: '#0A192F',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                              }}
                            >
                              <TrendingUp sx={{ fontSize: 20, color: project.color }} />
                              {t('consulting.objectives')}
                            </Typography>
                            <Box component="ul" sx={{ pl: 2 }}>
                              {project.objectives.map((objective, i) => (
                                <Typography
                                  key={i}
                                  component="li"
                                  variant="body2"
                                  sx={{
                                    color: '#475569',
                                    mb: 1,
                                    lineHeight: 1.6,
                                  }}
                                >
                                  {objective}
                                </Typography>
                              ))}
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Box sx={{ mb: 4 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                mb: 2,
                                color: '#0A192F',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                              }}
                            >
                              <CheckCircle sx={{ fontSize: 20, color: '#10B981' }} />
                              {t('consulting.results')}
                            </Typography>
                            <Box component="ul" sx={{ pl: 2 }}>
                              {project.results.map((result, i) => (
                                <Typography
                                  key={i}
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
                        </Grid>

                        {/* Technologies */}
                        <Grid item xs={12}>
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
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                              }}
                            >
                              <Speed sx={{ fontSize: 20, color: '#64748B' }} />
                              {t('consulting.technologies')}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {project.technologies.map((tech) => (
                                <Chip
                                  key={tech}
                                  label={tech}
                                  size="small"
                                  sx={{
                                    bgcolor: 'white',
                                    color: '#475569',
                                    border: '1px solid #E2E8F0',
                                    fontWeight: 500,
                                    '&:hover': {
                                      borderColor: project.color,
                                      bgcolor: `${project.color}08`,
                                    },
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Consulting Project Detail Modal */}
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
                maxWidth: '1000px',
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

                {/* Header */}
                <Box
                  sx={{
                    background: `linear-gradient(135deg, ${selectedProject.color}20 0%, ${selectedProject.color}10 100%)`,
                    p: 4,
                    borderRadius: '20px 20px 0 0',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '16px',
                        bgcolor: selectedProject.bgColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: selectedProject.color,
                      }}
                    >
                      {selectedProject.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 600,
                          color: '#0A192F',
                          fontSize: '2rem',
                          lineHeight: 1.2,
                          mb: 1,
                        }}
                      >
                        {selectedProject.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#64748B',
                          fontSize: '1.125rem',
                          fontWeight: 500,
                        }}
                      >
                        {selectedProject.client}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Project Info */}
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CalendarToday sx={{ fontSize: 20, color: '#64748B' }} />
                        <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 500 }}>
                          Período
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: '#0A192F' }}>
                        {selectedProject.period}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Business sx={{ fontSize: 20, color: '#64748B' }} />
                        <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 500 }}>
                          Localização
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: '#0A192F' }}>
                        {selectedProject.location}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Group sx={{ fontSize: 20, color: '#64748B' }} />
                        <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 500 }}>
                          Categoria
                        </Typography>
                      </Box>
                      <Chip
                        label={selectedProject.category}
                        sx={{
                          bgcolor: selectedProject.color,
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ p: 4 }}>
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

                  <Divider sx={{ mb: 4 }} />

                  {/* Platforms */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 4,
                      color: '#0A192F',
                    }}
                  >
                    Plataformas Desenvolvidas
                  </Typography>

                  <Grid container spacing={4} sx={{ mb: 4 }}>
                    {/* Mobile Platform */}
                    {selectedProject.platforms.mobile && (
                      <Grid item xs={12} md={6}>
                        <Box
                          sx={{
                            bgcolor: '#F8FAFC',
                            borderRadius: '16px',
                            p: 3,
                            border: '1px solid #E2E8F0',
                            height: '100%',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                            <PhoneAndroid sx={{ fontSize: 24, color: selectedProject.color }} />
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                color: '#0A192F',
                              }}
                            >
                              {selectedProject.platforms.mobile.title}
                            </Typography>
                          </Box>

                          {/* Mobile Frame */}
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              mb: 3,
                            }}
                          >
                            <Box
                              sx={{
                                width: 200,
                                height: 360,
                                bgcolor: '#1F2937',
                                borderRadius: '24px',
                                p: '8px',
                                position: 'relative',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                              }}
                            >
                              {/* Screen */}
                              <Box
                                sx={{
                                  width: '100%',
                                  height: '100%',
                                  borderRadius: '18px',
                                  overflow: 'hidden',
                                  backgroundImage: `url(${selectedProject.platforms.mobile.image})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                }}
                              />
                              {/* Home indicator */}
                              <Box
                                sx={{
                                  position: 'absolute',
                                  bottom: 4,
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  width: 60,
                                  height: 4,
                                  bgcolor: '#374151',
                                  borderRadius: 2,
                                }}
                              />
                            </Box>
                          </Box>

                          <Typography
                            variant="body2"
                            sx={{
                              color: '#475569',
                              lineHeight: 1.6,
                              textAlign: 'center',
                            }}
                          >
                            {selectedProject.platforms.mobile.description}
                          </Typography>
                        </Box>
                      </Grid>
                    )}

                    {/* Web Platform */}
                    {selectedProject.platforms.web && (
                      <Grid item xs={12} md={selectedProject.platforms.mobile ? 6 : 12}>
                        <Box
                          sx={{
                            bgcolor: '#F8FAFC',
                            borderRadius: '16px',
                            p: 3,
                            border: '1px solid #E2E8F0',
                            height: '100%',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                            <Laptop sx={{ fontSize: 24, color: selectedProject.color }} />
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                color: '#0A192F',
                              }}
                            >
                              {selectedProject.platforms.web.title}
                            </Typography>
                          </Box>

                          {/* Laptop Frame */}
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              mb: 3,
                            }}
                          >
                            <Box
                              sx={{
                                width: selectedProject.platforms.mobile ? 280 : 400,
                                position: 'relative',
                              }}
                            >
                              {/* Screen */}
                              <Box
                                sx={{
                                  width: '100%',
                                  height: selectedProject.platforms.mobile ? 180 : 250,
                                  bgcolor: '#1F2937',
                                  borderRadius: '8px 8px 0 0',
                                  p: '4px',
                                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                                }}
                              >
                                <Box
                                  sx={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '4px',
                                    overflow: 'hidden',
                                    backgroundImage: `url(${selectedProject.platforms.web.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                  }}
                                />
                              </Box>
                              {/* Base */}
                              <Box
                                sx={{
                                  width: '100%',
                                  height: 20,
                                  bgcolor: '#374151',
                                  borderRadius: '0 0 12px 12px',
                                }}
                              />
                              {/* Stand */}
                              <Box
                                sx={{
                                  width: 60,
                                  height: 8,
                                  bgcolor: '#4B5563',
                                  borderRadius: '4px',
                                  mx: 'auto',
                                  mt: 1,
                                }}
                              />
                            </Box>
                          </Box>

                          <Typography
                            variant="body2"
                            sx={{
                              color: '#475569',
                              lineHeight: 1.6,
                              textAlign: 'center',
                            }}
                          >
                            {selectedProject.platforms.web.description}
                          </Typography>
                        </Box>
                      </Grid>
                    )}
                  </Grid>

                  <Divider sx={{ mb: 4 }} />

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
                      Tecnologias Utilizadas
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
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <CheckCircle sx={{ fontSize: 20, color: '#10B981' }} />
                      Principais Resultados
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
                </Box>
              </Box>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default Consulting