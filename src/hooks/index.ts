import { getCurrentInstance } from 'vue'

export function useStore() {
  const { proxy } = getCurrentInstance()
  const store = proxy.$store
  return store
}

export function useRouter() {
  const { proxy } = getCurrentInstance()
  const router = proxy.$router
  return router
}

export function useRoute() {
  const { proxy } = getCurrentInstance()
  const route = proxy.$route
  return route
}
