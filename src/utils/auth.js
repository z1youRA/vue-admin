import { TOKEN_TIME_NAME, TOKEN_VALID_TIME } from '@/utils/index.js'

export const setTimeToken = () => {
  sessionStorage.setItem(TOKEN_TIME_NAME, Date.now())
}

export const getTimeToken = () => {
  return sessionStorage.getItem(TOKEN_TIME_NAME)
}

//判断当前TimeToken是否
export const isTimeTokenValid = () => {
  const localTokenTime = getTimeToken()
  if (localTokenTime) {
    return Date.now() - localTokenTime < TOKEN_VALID_TIME
  }
  return false
}
