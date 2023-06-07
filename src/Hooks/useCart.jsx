import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"

const useCart = () =>{
    const [axiosSecure] = useAxiosSecure()
    const {user, loading} = useContext(AuthContext)
    const token = localStorage.getItem("access-token")
    const { isLoading, refetch, isError, data: cart = [], error } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async ()=>{
        //     const res = await fetch(`https://bistro-boss-server-neon.vercel.app/carts?email=${user?.email}`,{
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // }
        queryFn: async ()=>{
            const res = await axiosSecure(`/carts?email=${user?.email}`
            // ,{
            //     headers: {
            //         authorization: `bearer ${token}`
            //     }
            // }
            )
            return res.data
        }
      })
      return [cart, refetch ]
}
export default useCart