const Token = 'vue_admin_token'

export function getToken() {
  return localStorage.getItem(Token)
}

export function setToken(token: string) {
  return localStorage.setItem(Token, token)
}

export function removeToken() {
  return localStorage.removeItem(Token)
}