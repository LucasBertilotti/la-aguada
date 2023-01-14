import { toast } from 'react-toastify';

const useNotify = () => {

    const porpFunction = {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    }

    const successNotif = msj =>{
        toast.success(msj, {
            ...porpFunction,
            theme: "colored",
        });
    }
    
    const infoNotif = msj =>{
        toast.warn(msj, {
            ...porpFunction,
            theme: "dark",
        });
    }

    const errorNotif = msj =>{
        toast.error(msj, {
            ...porpFunction,
            theme: "colored",
        });
    }

    return{ successNotif, infoNotif, errorNotif}
}

export default useNotify;