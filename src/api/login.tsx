import API from './client'

export const loginWithGoogle = async (token: string) => {
  if (!token) throw new Error('No se recibió el ID token de Google')
  try {
    console.log('🔐 Sending Google token to backend:', {
      tokenLength: token.length,
      tokenPreview: token.substring(0, 20) + '...'
    })
    const { data } = await API.post('/usuarios/auth/google', { token })
    localStorage.setItem('jwt', data.jwt)
    return data
  } catch (err: any) {
    console.error('❌ Error en login con Google', {
      status: err.response?.status,
      data: err.response?.data,
      message: err.message
    })
    throw err
  }
}