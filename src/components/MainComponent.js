import About from "./AboutComponent/";
import DishDetail from './DishdetailComponent/';
import Menu from './MenuComponent/';
import Contact from "./ContactComponent/";
import Home from "./HomeComponent/";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Route, Routes, useParams, useLocation} from 'react-router-dom'
import {  useDispatch } from 'react-redux'
import { useEffect } from "react";
import { fetchDishesFB, fetchPromos, fetchCommentsFB, fetchLeaders } from "../redux/actions";
import SlideRoutes from 'react-slide-routes'

function Main(){
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(()=>{
        dispatch(fetchDishesFB());
        dispatch(fetchCommentsFB());
        // dispatch(fetchPromos());
        // dispatch(fetchLeaders());
        // getAPI();
    },[])
    useEffect(()=>{
        console.log('re-renderred');
    })

    function DishWithId(){
        const {dishId} = useParams();
        console.log(dishId);
        return(
            <DishDetail 
                selectedDishId={dishId}
            />
        )
    }

    return (
        <div className="App">
            <Header/>
                {/* {location.pathname!=='/'?<BreadcrumbComponent></BreadcrumbComponent>:null} */}
            {/* <TransitionGroup > */}
                {/* <CSSTransition classNames="page" timeout={300} key={location.pathname}> */}
                <Routes>
                    {/* <SlideRoutes animation='' duration={500} location={location}> */}
                        <Route path={'/'} element={<Home/>} />
                        <Route exact path={'/menu'} element={<Menu/>} />
                        <Route path={'/menu/:dishId'} element={<DishWithId />} />
                        <Route path={'/contactus'} element={<Contact/>} />
                        <Route path={'/aboutus'} element={<About />} />
                        <Route path="*" element={<Home/>}/>
                    {/* </SlideRoutes> */}
                    </Routes>
                {/* </CSSTransition> */}
            {/* </TransitionGroup> */}
            <Footer/>
        </div>
    )
}
export default Main;