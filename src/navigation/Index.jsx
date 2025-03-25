import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AuthNav from './Auth';
import HomeNav from './Home';
import { Init } from '../../store/Actions/AuthAction';
import { getVehicle } from '../../store/Actions/userActions';
export default function Index() {
    const access = useSelector(state => state.reducer.access);
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        dispatch(Init())
        dispatch(getVehicle(setLoading))
    }, [dispatch])
    return (
        <NavigationContainer>
            {
                access ? <HomeNav /> : <AuthNav />
            }
        </NavigationContainer>
    )
}