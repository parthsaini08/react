import React from 'react';
import Faculty from './components/Faculty'
import MembersList from './components/MembersList'

class App extends React.Component {
  render()
  {
    let membersData=  [{
      name: 'Ankur',
      post: 'Tres'
    },{
      name: 'Avin',
      post: 'GS'
    },{
      name: 'Ash',
      post: 'PR'
    }];
    return(
    <div className="App">
      <Faculty />
      <MembersList data={membersData} />
    </div> 
  )
}
}

export default App;