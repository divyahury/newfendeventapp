import React from 'react'
import { useLocation } from 'react-router-dom'


const PageName = (WrappedComponent) => {
  const ComponentWithName = (props) => {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'component';
    return <WrappedComponent {...props} componentName={componentName} />
  }


  return ComponentWithName;
}

export default PageName



// get page path
// const PageName = () => {
//     const location = useLocation();
//     const pathname = location.pathname;

//     //determione the oage name based on the path name
//     const pageName =  pathname === '/' ? 'Home' : pathname.slice(1);

//     const formattedPagename = pageName.charAt(0).toUpperCase() + pageName.slice(1)

//   return (
//     <div>
//         <h1>current page: {formattedPagename} </h1>
//     </div>
//   )
// }

// export default PageName


