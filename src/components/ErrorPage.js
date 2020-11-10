import React from 'react';
import './Common.css';

function ErrorPage() { 
      return (
         <div class="Header">
            <h1>404 - Page Not Found</h1>
         </div>
      );
   }

export default ErrorPage

/* Class type Implementation */
// class ErrorPage extends React.Component  {
//    render() {  
//       return (
//       <div>
//          <h1>Page Not Found</h1>
//       </div>
//    );
//    }
// }
// export default ErrorPage