import {Routes, Route} from 'react-router-dom';
import { router } from './routes';

const AppRouter = () => {
    return (
        <Routes>
            {router.map((el)=>{
                return <Route path={el.path} element={<el.Component/>}  key={el.path} />
            })}
        </Routes>
    )
}

export default AppRouter;