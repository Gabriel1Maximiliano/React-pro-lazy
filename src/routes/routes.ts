import { lazy,LazyExoticComponent } from "react";
// import { LazyPage1 } from "../01-lazyload/components/LazyPage1";
// import { LazyPage2 } from "../01-lazyload/components/LazyPage2";
// import { LazyPage3 } from "../01-lazyload/components/LazyPage3";
type JSXComponent = () => JSX.Element 
interface Route {
    to:string,
    path:string,
    name:string,
    Component:LazyExoticComponent<JSXComponent> | JSXComponent
}
const Lazy1 = lazy(() => import('../01-lazyload/components/LazyPage1'))
const Lazy2 = lazy(() => import('../01-lazyload/components/LazyPage2'))
const Lazy3 = lazy(() => import('../01-lazyload/components/LazyPage3'))

export const routes:Route[] =[
    {
        to:'/lazy1',
        path:'lazy1',
        Component:Lazy1,
        name:'lazy-1'
    },
    {
        to:'/lazy2',
        path:'lazy2',
        Component:Lazy2,
        name:'lazy-2'
    },
    {
        to:'/lazy3',
        path:'lazy3',
        Component:Lazy3,
        name:'lazy-3'
    }
]