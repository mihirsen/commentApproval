import React from 'react';
import  ReactDOM  from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App=() => {
    return(
      <div className='ui container comments'>
        <ApprovalCard>
        <CommentDetail
         author = "Mihir" 
         date="Today at 2:00AM" 
         text="Nice blog post"/>
         </ApprovalCard>
        <ApprovalCard>
        <CommentDetail 
        author = "ALOK" 
        date="yesterday at 8:00PM" 
        text="Good, keep going!"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Raja"
             date="Monday at 6:00PM" 
             text="Big Fan !!!"/>
             </ApprovalCard>
      </div>

    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));