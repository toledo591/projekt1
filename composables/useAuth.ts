
// export const useAuth = () => {
//     const { $supabase } = useNuxtApp()
//     const user = useState('user')
//     const isLoggedIn = computed(() => !!user.value)
  
//     const fetchUser = async () => {
//       const { data, error } = await $supabase.auth.getUser()
//       if (!error) user.value = data.user
//     }
  
//     const login = async (email: string, password: string) => {
//       const { data, error } = await $supabase.auth.signInWithPassword({ email, password })
//       if (error) throw error
//       user.value = data.user
//     }
  
//     const register = async (email: string, password: string) => {
//       const { data, error } = await $supabase.auth.signUp({ email, password })
//       if (error) throw error
//       user.value = data.user
//     }
  
//     const logout = async () => {
//       await $supabase.auth.signOut()
//       user.value = null
//     }
  
//     return {
//       user,
//       isLoggedIn,
//       login,
//       register,
//       logout,
//       fetchUser
//     }
//   }