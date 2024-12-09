import { toast } from 'react-toastify';  
import { AppDispatch } from '@/app/lib/store';  
import { useRouter } from 'next/navigation';
import { setUser } from '@/app/lib/features/userSlice/userSlice';


export const handleUserCreation = (data: any, dispatch: AppDispatch, router: ReturnType<typeof useRouter>) => {
  toast.success("Account created successfully");
  dispatch(setUser({
    email: data.email,
    user_id: data.id
    
  }));
  setTimeout(() => {
    router.push("/");
  }, 1000);
};
