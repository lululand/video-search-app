import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  // const onInputChange = event => {
  //   setTerm(event.target.value);
  // }; // updated this to be inline in <input> element below

  const onSubmit = event => {
    event.preventDefault(); // stops default behavior hitting enter

    // calling the callback from parent component
    onFormSubmit(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} action='' className='ui form'>
        <div className='field'>
          <label htmlFor=''>Video Search</label>
          <input
            type='text'
            value={term}
            onChange={event => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   // state = { term: '' };

//   onInputChange = event => {
//     this.setState({ term: event.target.value });
//   };

//   onFormSubmit = event => {
//     event.preventDefault(); // stops default behavior hitting enter

//     // calling the callback from parent component
//     this.props.callParentSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className='search-bar ui segment'>
//         <form onSubmit={this.onFormSubmit} action='' className='ui form'>
//           <div className='field'>
//             <label htmlFor=''>Video Search</label>
//             <input
//               type='text'
//               value={this.state.term}
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
