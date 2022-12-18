import { ComponentType, lazy,LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/components/NoLazy";
// import { LazyPage1 } from "../01-lazyload/components/LazyPage1";
// import { LazyPage2 } from "../01-lazyload/components/LazyPage2";
// import { LazyPage3 } from "../01-lazyload/components/LazyPage3";
//import { LazyLayout } from '../01-lazyload/layout/LazyLayout';
type JSXComponent = () => JSX.Element 
interface Route {
    to:string,
    path:string,
    name:string,
    Component:LazyExoticComponent<ComponentType<any>> | JSXComponent
}
const LazyLayout = lazy(():any => import(/*webpackChunkName:LazyLayout*/'../01-lazyload/layout/LazyLayout'))
const Lazy2 = lazy(():any => import(/*webpackChunkName:Lazypage2*/'../01-lazyload/components/LazyPage2'))
const Lazy3 = lazy(():any => import(/*webpackChunkName:Lazypage3*/'../01-lazyload/components/LazyPage3'))

export const routes:Route[] =[
    {
        to:'/lazyload/*',
        path:'/lazyload/*',
        Component:LazyLayout,
        name:'layout'
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component:NoLazy,
        name:'No Lazy'
    },
  
]